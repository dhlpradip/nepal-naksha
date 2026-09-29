import { describe, it, expect } from "vitest";
import {
  DISTRICTS,
  PROVINCE_NAMES,
  resolveDistrict,
  isDistrict,
  getDistrictInfo,
  getDistrictsByProvince,
} from "../src/districts";
import { DISTRICT_PATHS } from "../src/data/districtPaths.data";

describe("Nepal Districts & Metadata", () => {
  it("should contain exactly 77 canonical districts", () => {
    expect(DISTRICTS.length).toBe(77);
    const uniqueDistricts = new Set(DISTRICTS);
    expect(uniqueDistricts.size).toBe(77);
  });

  it("should contain all 7 provinces", () => {
    expect(PROVINCE_NAMES.length).toBe(7);
  });

  it("every district must have valid SVG path and metadata", () => {
    for (const name of DISTRICTS) {
      const pathData = DISTRICT_PATHS[name];
      expect(pathData, `Missing path for ${name}`).toBeDefined();
      expect(pathData.d.startsWith("M")).toBe(true);
      expect(pathData.center.length).toBe(2);
      expect(pathData.provinceId).toBeGreaterThanOrEqual(1);
      expect(pathData.provinceId).toBeLessThanOrEqual(7);

      const info = getDistrictInfo(name);
      expect(info, `Missing metadata for ${name}`).toBeDefined();
      expect(info?.headquarters).toBeTruthy();
      expect(info?.nepali).toBeTruthy();
    }
  });

  it("resolves canonical and alternate spellings correctly", () => {
    expect(resolveDistrict("Kathmandu")).toBe("Kathmandu");
    expect(resolveDistrict("kathmandu district")).toBe("Kathmandu");
    expect(resolveDistrict("Kavre")).toBe("Kavrepalanchok");
    expect(resolveDistrict("Kavrepalanchowk")).toBe("Kavrepalanchok");
    expect(resolveDistrict("tanahu")).toBe("Tanahun");
    expect(resolveDistrict("chitwon")).toBe("Chitwan");
    expect(resolveDistrict("tehrathum")).toBe("Terhathum");
    expect(resolveDistrict("bardia")).toBe("Bardiya");
    expect(resolveDistrict("kapilbastu")).toBe("Kapilvastu");
    expect(resolveDistrict("makawanpur")).toBe("Makwanpur");
    expect(resolveDistrict("dhanusa")).toBe("Dhanusha");
    expect(resolveDistrict("sindhupalchowk")).toBe("Sindhupalchok");
    expect(resolveDistrict("rukum east")).toBe("Eastern Rukum");
    expect(resolveDistrict("rukum west")).toBe("Western Rukum");
    expect(resolveDistrict("nawalpur")).toBe("Nawalpur");
    expect(resolveDistrict("parasi")).toBe("Parasi");
  });

  it("resolves Nepali Devanagari script accurately", () => {
    expect(resolveDistrict("काठमाडौं")).toBe("Kathmandu");
    expect(resolveDistrict("काठमाण्डौ")).toBe("Kathmandu");
    expect(resolveDistrict("ललितपुर")).toBe("Lalitpur");
    expect(resolveDistrict("झापा")).toBe("Jhapa");
    expect(resolveDistrict("कास्की")).toBe("Kaski");
    expect(resolveDistrict("चितवन जिल्ला")).toBe("Chitwan");
    expect(resolveDistrict("मोरङ")).toBe("Morang");
    expect(resolveDistrict("रुकुम पूर्व")).toBe("Eastern Rukum");
  });

  it("returns null for unrecognized strings", () => {
    expect(resolveDistrict("Dhaka")).toBeNull();
    expect(resolveDistrict("London")).toBeNull();
    expect(resolveDistrict("")).toBeNull();
    expect(resolveDistrict(null)).toBeNull();
    expect(resolveDistrict(undefined)).toBeNull();
  });

  it("isDistrict correctly identifies districts", () => {
    expect(isDistrict("Kathmandu")).toBe(true);
    expect(isDistrict("काठमाडौं")).toBe(true);
    expect(isDistrict("tanahu")).toBe(true);
    expect(isDistrict("Gotham")).toBe(false);
  });

  it("groups districts correctly by province", () => {
    const koshi = getDistrictsByProvince(1);
    expect(koshi.length).toBe(14);

    const madhesh = getDistrictsByProvince("Madhesh");
    expect(madhesh.length).toBe(8);

    const bagmati = getDistrictsByProvince("Bagmati");
    expect(bagmati.length).toBe(13);

    const gandaki = getDistrictsByProvince(4);
    expect(gandaki.length).toBe(11);

    const lumbini = getDistrictsByProvince(5);
    expect(lumbini.length).toBe(12);

    const karnali = getDistrictsByProvince(6);
    expect(karnali.length).toBe(10);

    const sudurpashchim = getDistrictsByProvince(7);
    expect(sudurpashchim.length).toBe(9);

    const total =
      koshi.length +
      madhesh.length +
      bagmati.length +
      gandaki.length +
      lumbini.length +
      karnali.length +
      sudurpashchim.length;
    expect(total).toBe(77);
  });
});
