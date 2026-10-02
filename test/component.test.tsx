import { describe, it, expect } from "vitest";
import React from "react";
import { renderToString } from "react-dom/server";
import { NepalNaksha } from "../src/components/NepalNaksha";
import { DISTRICTS } from "../src/districts";

describe("<NepalNaksha /> React Component", () => {
  it("renders SVG map with all 77 district path elements", () => {
    const html = renderToString(<NepalNaksha />);
    expect(html).toContain("<svg");
    expect(html).toContain('viewBox="0 0 1000 600"');
    expect(html).toContain('width:100%;height:auto');
    
    // Check that districts are present
    expect(html).toContain('id="nepal-district-kathmandu"');
    expect(html).toContain('id="nepal-district-jhapa"');
    expect(html).toContain('id="nepal-district-kaski"');
    expect(html).toContain('id="nepal-district-darchula"');

    // Count path occurrences for districts
    const matchCount = (html.match(/id="nepal-district-/g) || []).length;
    expect(matchCount).toBe(77);
  });

  it("applies custom color themes", () => {
    const html = renderToString(
      <NepalNaksha
        colors={{
          base: "#334155",
          active: "#10b981",
          selected: "#f43f5e",
        }}
        value="Kathmandu"
      />
    );
    expect(html).toContain('fill="#f43f5e"'); // Selected fill
  });

  it("keeps the selected district border consistent with other districts", () => {
    const html = renderToString(
      <NepalNaksha
        value="Kathmandu"
        colors={{ stroke: "#0f172a", selectedStroke: "#ffffff" }}
      />
    );
    const selectedPath = html.match(/<path id="nepal-district-kathmandu"[^>]+>/)?.[0];

    expect(selectedPath).toContain('stroke="#0f172a"');
    expect(selectedPath).not.toContain('stroke="#ffffff"');
  });

  it("renders centroid labels when showLabels is true", () => {
    const html = renderToString(<NepalNaksha showLabels={true} />);
    expect(html).toContain("<text");
    expect(html).toContain("Kathmandu");
    expect(html).toContain("Jhapa");
  });

  it("renders Devanagari labels when language is 'ne'", () => {
    const html = renderToString(<NepalNaksha showLabels={true} language="ne" />);
    expect(html).toContain("काठमाडौं");
    expect(html).toContain("झापा");
  });

  it("renders active labels only for explicitly active districts", () => {
    const html = renderToString(
      <NepalNaksha items={["Kathmandu"]} showLabels="active" />
    );

    expect(html).toContain(">Kathmandu</text>");
    expect(html).not.toContain(">Jhapa</text>");
  });

  it("does not render hover labels until a district is hovered", () => {
    const html = renderToString(<NepalNaksha showLabels="hover" />);

    expect(html).not.toContain(">Kathmandu</text>");
  });

  it("renders active labels in white for highlighted districts", () => {
    const html = renderToString(
      <NepalNaksha
        items={["Kathmandu"]}
        showLabels="active"
      />
    );

    expect(html).toContain('fill="#ffffff"');
    expect(html).toContain(">Kathmandu</text>");
  });

  it("renders delivery routes between district centers", () => {
    const html = renderToString(
      <NepalNaksha
        routes={[
          {
            name: "Eastern delivery",
            source: "Kathmandu",
            destination: "Jhapa",
            color: "#f97316",
          },
        ]}
      />
    );

    expect(html).toContain('class="nepal-naksha-routes"');
    expect(html).toContain('stroke="#f97316"');
    expect(html).not.toContain(">Eastern delivery</text>");
    expect(html).toContain('cx="642.3"');
    expect(html).toContain('cx="945.9"');
  });
});
