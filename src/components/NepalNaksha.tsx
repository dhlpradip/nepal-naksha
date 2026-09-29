"use client";

import {
  useState,
  useMemo,
  useCallback,
  useRef,
  type CSSProperties,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { DISTRICT_PATHS, MAP_VIEWBOX } from "../data/districtPaths.data";
import {
  DISTRICTS,
  resolveDistrict,
  getDistrictInfo,
  type ValidDistrict,
  type DistrictInput,
  type DistrictInfo,
} from "../districts";

export interface DistrictItemObject {
  place: DistrictInput;
  id?: string | number;
  color?: string;
  [key: string]: any;
}

export type DistrictItem = DistrictItemObject | DistrictInput;

export interface NepalNakshaColors {
  /** Background fill for non-active/unselected districts. Default: "#e2e8f0" */
  base?: string;
  /** Fill for highlighted/active districts. Default: "#3b82f6" */
  active?: string;
  /** Fill for the currently selected district. Default: "#ef4444" */
  selected?: string;
  /** Fill on district hover. Default: "#60a5fa" */
  hover?: string;
  /** Border stroke color. Default: "#ffffff" */
  stroke?: string;
  /** Border stroke width in px. Default: 1 */
  strokeWidth?: number;
  /** Stroke color for selected district. Default: "#b91c1c" */
  selectedStroke?: string;
  /** Stroke width for selected district. Default: 2 */
  selectedStrokeWidth?: number;
  /** SVG glow/shadow color on hover or selection. */
  selectedGlow?: string;
}

export interface NepalNakshaProps {
  /**
   * Districts to highlight/activate. Can be an array of strings or objects with a `place` key.
   * If omitted or undefined, all 77 districts are active and selectable by default.
   */
  items?: readonly DistrictItem[] | DistrictItem[];

  /** Controlled selected district. Pass `null` for no selection. */
  value?: DistrictInput | null;

  /** Uncontrolled initially selected district. */
  defaultValue?: DistrictInput | null;

  /** Callback fired when a district is selected (clicked). */
  onSelect?: (district: ValidDistrict, meta: DistrictInfo) => void;

  /** Mouse enter callback. */
  onDistrictMouseEnter?: (
    district: ValidDistrict,
    event: ReactMouseEvent<SVGPathElement>,
    meta: DistrictInfo
  ) => void;

  /** Mouse leave callback. */
  onDistrictMouseLeave?: (
    district: ValidDistrict,
    event: ReactMouseEvent<SVGPathElement>,
    meta: DistrictInfo
  ) => void;

  /** Click callback. */
  onDistrictClick?: (
    district: ValidDistrict,
    event: ReactMouseEvent<SVGPathElement>,
    meta: DistrictInfo
  ) => void;

  /** Color scheme customization. */
  colors?: NepalNakshaColors;

  /** Language for district names in default tooltips and labels. Default: "en" */
  language?: "en" | "ne";

  /** Filter or highlight a specific province (1-7 or "Bagmati", etc.). */
  filterProvince?: number | string | null;

  /** Whether to show text labels on districts. Default: false */
  showLabels?: boolean | "active" | "hover";

  /** Whether to show a built-in tooltip on hover. Default: true */
  showTooltip?: boolean;

  /** Custom tooltip renderer. Return `null` to suppress tooltip for that district. */
  renderTooltip?: (
    district: ValidDistrict,
    meta: DistrictInfo,
    item?: DistrictItemObject
  ) => ReactNode;

  /** Custom renderer for selected district details (rendered beneath map). */
  renderSelected?: (
    district: ValidDistrict | null,
    meta: DistrictInfo | null,
    item?: DistrictItemObject
  ) => ReactNode;

  /**
   * Dynamic color resolver for heatmaps, choropleths, or custom styling.
   * Takes precedence over `colors.active`.
   */
  choropleth?: (
    district: ValidDistrict,
    meta: DistrictInfo,
    item?: DistrictItemObject
  ) => string | undefined;

  /** Wrapper container class name. */
  className?: string;

  /** Wrapper container inline styles. */
  style?: CSSProperties;

  /** SVG element class name. */
  svgClassName?: string;

  /** SVG element inline styles. */
  svgStyle?: CSSProperties;

  /** SVG viewBox string. Default: "0 0 1000 600" */
  viewBox?: string;

  /** Disable all interactions (hover, click). Default: false */
  disabled?: boolean;
}

const DEFAULT_COLORS: Required<NepalNakshaColors> = {
  base: "#e2e8f0",
  active: "#3b82f6",
  selected: "#ef4444",
  hover: "#60a5fa",
  stroke: "#ffffff",
  strokeWidth: 1,
  selectedStroke: "#991b1b",
  selectedStrokeWidth: 2.2,
  selectedGlow: "rgba(239, 68, 68, 0.4)",
};

export function NepalNaksha({
  items,
  value,
  defaultValue,
  onSelect,
  onDistrictMouseEnter,
  onDistrictMouseLeave,
  onDistrictClick,
  colors: userColors,
  language = "en",
  filterProvince,
  showLabels = false,
  showTooltip = true,
  renderTooltip,
  renderSelected,
  choropleth,
  className = "",
  style,
  svgClassName = "",
  svgStyle,
  viewBox = MAP_VIEWBOX,
  disabled = false,
}: NepalNakshaProps) {
  const colors = useMemo(() => ({ ...DEFAULT_COLORS, ...userColors }), [userColors]);

  // Map of active districts from `items` prop
  const { activeMap, hasExplicitItems } = useMemo(() => {
    if (!items) {
      return { activeMap: new Map<ValidDistrict, DistrictItemObject>(), hasExplicitItems: false };
    }
    const map = new Map<ValidDistrict, DistrictItemObject>();
    for (const raw of items) {
      const placeStr = typeof raw === "string" ? raw : raw?.place;
      const canonical = resolveDistrict(placeStr);
      if (canonical) {
        map.set(
          canonical,
          typeof raw === "string" ? { place: canonical } : { ...raw, place: canonical }
        );
      }
    }
    return { activeMap: map, hasExplicitItems: true };
  }, [items]);

  // Province filter resolution
  const provinceFilterId = useMemo<number | null>(() => {
    if (filterProvince === null || filterProvince === undefined) return null;
    if (typeof filterProvince === "number") return filterProvince;
    const s = String(filterProvince).trim().toLowerCase();
    const match = s.match(/\d+/);
    if (match) return parseInt(match[0], 10);
    const names = ["koshi", "madhesh", "bagmati", "gandaki", "lumbini", "karnali", "sudurpashchim"];
    const idx = names.indexOf(s);
    return idx >= 0 ? idx + 1 : null;
  }, [filterProvince]);

  // Controlled vs Uncontrolled selection state
  const isControlled = value !== undefined;
  const initialSelected = useMemo(() => {
    if (defaultValue) return resolveDistrict(defaultValue);
    if (!isControlled && hasExplicitItems && activeMap.size > 0) {
      return Array.from(activeMap.keys())[0];
    }
    return null;
  }, [defaultValue, isControlled, hasExplicitItems, activeMap]);

  const [internalSelected, setInternalSelected] = useState<ValidDistrict | null>(initialSelected);
  const selectedDistrict = isControlled ? (value ? resolveDistrict(value) : null) : internalSelected;

  // Hover state
  const [hoveredDistrict, setHoveredDistrict] = useState<ValidDistrict | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDistrictClick = useCallback(
    (district: ValidDistrict, e: ReactMouseEvent<SVGPathElement>) => {
      if (disabled) return;
      const meta = getDistrictInfo(district);
      if (!meta) return;

      onDistrictClick?.(district, e, meta);

      if (!isControlled) {
        setInternalSelected(district);
      }
      onSelect?.(district, meta);
    },
    [disabled, isControlled, onDistrictClick, onSelect]
  );

  const handleMouseEnter = useCallback(
    (district: ValidDistrict, e: ReactMouseEvent<SVGPathElement>) => {
      if (disabled) return;
      setHoveredDistrict(district);
      const meta = getDistrictInfo(district);
      if (meta) {
        onDistrictMouseEnter?.(district, e, meta);
      }

      if (showTooltip && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [disabled, onDistrictMouseEnter, showTooltip]
  );

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent) => {
      if (disabled || !showTooltip || !hoveredDistrict || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [disabled, showTooltip, hoveredDistrict]
  );

  const handleMouseLeave = useCallback(
    (district: ValidDistrict, e: ReactMouseEvent<SVGPathElement>) => {
      if (disabled) return;
      setHoveredDistrict(null);
      setTooltipPos(null);
      const meta = getDistrictInfo(district);
      if (meta) {
        onDistrictMouseLeave?.(district, e, meta);
      }
    },
    [disabled, onDistrictMouseLeave]
  );

  // Compute fill color for a given district
  const getDistrictFill = useCallback(
    (district: ValidDistrict, meta: DistrictInfo) => {
      // Province filter dimming
      if (provinceFilterId !== null && meta.provinceId !== provinceFilterId) {
        return "#f1f5f9";
      }

      const isSelected = selectedDistrict === district;
      const isHovered = hoveredDistrict === district;
      const isActive = hasExplicitItems ? activeMap.has(district) : true;
      const itemObj = activeMap.get(district);

      if (isSelected) return colors.selected;
      if (isHovered && !disabled) return colors.hover;

      // Custom Choropleth callback
      if (choropleth) {
        const customColor = choropleth(district, meta, itemObj);
        if (customColor) return customColor;
      }

      // Explicit item color
      if (itemObj?.color && typeof itemObj.color === "string") {
        return itemObj.color;
      }

      if (isActive) return colors.active;
      return colors.base;
    },
    [
      provinceFilterId,
      selectedDistrict,
      hoveredDistrict,
      disabled,
      hasExplicitItems,
      activeMap,
      colors,
      choropleth,
    ]
  );

  // Metadata for currently selected district
  const selectedMeta = useMemo(() => {
    return selectedDistrict ? getDistrictInfo(selectedDistrict) : null;
  }, [selectedDistrict]);

  const selectedItemObj = useMemo(() => {
    return selectedDistrict ? activeMap.get(selectedDistrict) : undefined;
  }, [selectedDistrict, activeMap]);

  const renderOrder = useMemo(() => {
    if (!selectedDistrict) return DISTRICTS;
    return [...DISTRICTS.filter((district) => district !== selectedDistrict), selectedDistrict];
  }, [selectedDistrict]);

  return (
    <div
      ref={containerRef}
      className={`nepal-naksha-wrapper ${className}`}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        userSelect: "none",
        ...style,
      }}
      onMouseMove={handleMouseMove}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className={`nepal-naksha-svg ${svgClassName}`}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.04))",
          ...svgStyle,
        }}
        role="img"
        aria-label="Interactive Map of Nepal Districts"
      >
        <defs>
          <filter id="nepal-naksha-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor={colors.selectedGlow} />
          </filter>
        </defs>

        {/* District Paths */}
        <g className="nepal-naksha-districts">
          {renderOrder.map((name) => {
            const pathData = DISTRICT_PATHS[name];
            if (!pathData) return null;

            const meta = getDistrictInfo(name)!;
            const isSelected = selectedDistrict === name;
            const isFilteredOut = provinceFilterId !== null && meta.provinceId !== provinceFilterId;
            const fill = getDistrictFill(name, meta);

            return (
              <path
                key={name}
                id={`nepal-district-${meta.name.toLowerCase().replace(/\s+/g, "-")}`}
                d={pathData.d}
                fill={fill}
                stroke={colors.stroke}
                strokeWidth={colors.strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={isFilteredOut ? 0.35 : 1}
                cursor={disabled ? "default" : "pointer"}
                filter={isSelected ? "url(#nepal-naksha-glow)" : undefined}
                style={{
                  transition: "fill 0.18s ease, stroke 0.18s ease, opacity 0.2s ease",
                }}
                onClick={(e) => handleDistrictClick(name, e)}
                onMouseEnter={(e) => handleMouseEnter(name, e)}
                onMouseLeave={(e) => handleMouseLeave(name, e)}
              />
            );
          })}
        </g>

        {/* Optional Centroid Labels */}
        {showLabels && (
          <g className="nepal-naksha-labels" pointerEvents="none">
            {DISTRICTS.map((name) => {
              const pathData = DISTRICT_PATHS[name];
              if (!pathData) return null;
              const meta = getDistrictInfo(name)!;

              if (provinceFilterId !== null && meta.provinceId !== provinceFilterId) {
                return null;
              }

              const isHovered = hoveredDistrict === name;
              const isSelected = selectedDistrict === name;
              const isActive = hasExplicitItems ? activeMap.has(name) : true;

              const shouldShowLabel =
                showLabels === true ||
                (showLabels === "active" && (isSelected || (hasExplicitItems && isActive))) ||
                (showLabels === "hover" && isHovered);

              if (!shouldShowLabel) return null;

              const label = language === "ne" ? meta.nepali : meta.name;
              const [cx, cy] = pathData.center;

              return (
                <text
                  key={`label-${name}`}
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={isSelected || isHovered ? 11 : 9}
                  fontWeight={isSelected || isHovered ? "bold" : "normal"}
                  fill={isSelected ? "#ffffff" : isHovered ? "#1e293b" : "#475569"}
                  style={{
                    textShadow: isSelected
                      ? "0 1px 3px rgba(0,0,0,0.8)"
                      : "0 1px 2px rgba(255,255,255,0.9)",
                    pointerEvents: "none",
                    transition: "font-size 0.15s ease",
                  }}
                >
                  {label}
                </text>
              );
            })}
          </g>
        )}
      </svg>

      {/* Floating Tooltip */}
      {showTooltip && hoveredDistrict && tooltipPos && (
        <div
          className="nepal-naksha-tooltip"
          style={{
            position: "absolute",
            zIndex: 50,
            pointerEvents: "none",
            transform: "translate(-50%, calc(-100% - 8px))",
            paddingBottom: "8px",
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
          }}
        >
          {(() => {
            const meta = getDistrictInfo(hoveredDistrict);
            if (!meta) return null;
            const itemObj = activeMap.get(hoveredDistrict);

            if (renderTooltip) {
              return renderTooltip(hoveredDistrict, meta, itemObj);
            }

            return (
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.92)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
                  fontSize: "12px",
                  lineHeight: "1.4",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: "13px" }}>
                  {language === "ne" ? meta.nepali : meta.name}
                  <span style={{ opacity: 0.7, fontSize: "11px", marginLeft: "6px" }}>
                    ({language === "ne" ? meta.name : meta.nepali})
                  </span>
                </div>
                <div style={{ fontSize: "11px", opacity: 0.85 }}>
                  HQ: {meta.headquarters} • {language === "ne" ? meta.provinceNepali : meta.provinceName}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Selected District Card / Banner */}
      {renderSelected && renderSelected(selectedDistrict, selectedMeta, selectedItemObj)}
    </div>
  );
}
