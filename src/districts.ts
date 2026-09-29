import { DISTRICTS_DATA, PROVINCES, type DistrictInfo, type ProvinceInfo } from "./data/districts.data";

/**
 * Canonical names of all 77 districts of Nepal, sorted alphabetically.
 */
export const DISTRICTS = [
  "Achham",
  "Arghakhanchi",
  "Baglung",
  "Baitadi",
  "Bajhang",
  "Bajura",
  "Banke",
  "Bara",
  "Bardiya",
  "Bhaktapur",
  "Bhojpur",
  "Chitwan",
  "Dadeldhura",
  "Dailekh",
  "Dang",
  "Darchula",
  "Dhading",
  "Dhankuta",
  "Dhanusha",
  "Dolakha",
  "Dolpa",
  "Doti",
  "Eastern Rukum",
  "Gorkha",
  "Gulmi",
  "Humla",
  "Ilam",
  "Jajarkot",
  "Jhapa",
  "Jumla",
  "Kailali",
  "Kalikot",
  "Kanchanpur",
  "Kapilvastu",
  "Kaski",
  "Kathmandu",
  "Kavrepalanchok",
  "Khotang",
  "Lalitpur",
  "Lamjung",
  "Mahottari",
  "Makwanpur",
  "Manang",
  "Morang",
  "Mugu",
  "Mustang",
  "Myagdi",
  "Nawalpur",
  "Nuwakot",
  "Okhaldhunga",
  "Palpa",
  "Panchthar",
  "Parasi",
  "Parbat",
  "Parsa",
  "Pyuthan",
  "Ramechhap",
  "Rasuwa",
  "Rautahat",
  "Rolpa",
  "Rupandehi",
  "Salyan",
  "Sankhuwasabha",
  "Saptari",
  "Sarlahi",
  "Sindhuli",
  "Sindhupalchok",
  "Siraha",
  "Solukhumbu",
  "Sunsari",
  "Surkhet",
  "Syangja",
  "Tanahun",
  "Taplejung",
  "Terhathum",
  "Udayapur",
  "Western Rukum",
] as const;

/** Canonical name of one of the 77 districts of Nepal. */
export type ValidDistrict = (typeof DISTRICTS)[number];

/**
 * Any district name accepted as input. Auto-suggests the 77 canonical names,
 * but also accepts any casing, alternate spellings, or Nepali Devanagari script.
 */
export type DistrictInput = ValidDistrict | (string & {});

/**
 * 7 Provinces of Nepal.
 */
export const PROVINCE_NAMES = [
  "Koshi",
  "Madhesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
] as const;

export type ValidProvince = (typeof PROVINCE_NAMES)[number];

/**
 * Normalizes input string for fuzzy/alias matching:
 * - Lowercases
 * - Strips whitespace, dashes, punctuation
 * - Strips common suffixes: "district", "zila", "jilla", "जिल्ला"
 */
export function normalizeDistrictKey(s: string): string {
  if (!s) return "";
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/[\s\-_'’\.,\(\)]+/g, "")
    .replace(/(district|zila|jilla|jela|जिल्ला)$/u, "");
}

/** Known alternate spellings & colloquial forms mapped to canonical names. */
const ALIASES: Record<string, ValidDistrict> = {
  // Kavre
  kavre: "Kavrepalanchok",
  kavrepalanchowk: "Kavrepalanchok",
  kabhre: "Kavrepalanchok",
  kabhrepalanchok: "Kavrepalanchok",
  kabhrepalanchowk: "Kavrepalanchok",

  // Tanahun
  tanahu: "Tanahun",

  // Terhathum
  tehrathum: "Terhathum",

  // Chitwan
  chitwon: "Chitwan",

  // Bardiya
  bardia: "Bardiya",

  // Kapilvastu
  kapilbastu: "Kapilvastu",

  // Makwanpur
  makawanpur: "Makwanpur",

  // Dhanusha
  dhanusa: "Dhanusha",

  // Sindhupalchok
  sindhupalchowk: "Sindhupalchok",

  // Nawalparasi / Nawalpur / Parasi
  nawalpur: "Nawalpur",
  nawalparasieast: "Nawalpur",
  eastnawalparasi: "Nawalpur",
  nawalparasiwest: "Parasi",
  westnawalparasi: "Parasi",
  parasi: "Parasi",
  nawalparasi: "Parasi", // default to Parasi if ambiguous

  // Rukum
  easternrukum: "Eastern Rukum",
  rukumeast: "Eastern Rukum",
  eastrukum: "Eastern Rukum",
  purbarukum: "Eastern Rukum",
  purbirukum: "Eastern Rukum",
  westernrukum: "Western Rukum",
  rukumwest: "Western Rukum",
  westrukum: "Western Rukum",
  paschimrukum: "Western Rukum",

  // Shankhuwasabha / Sankhuwasabha
  shankhuwasabha: "Sankhuwasabha",
  sankhuwasabha: "Sankhuwasabha",

  // Dadeldhura
  dandeldhura: "Dadeldhura",

  // Syangja
  syangza: "Syangja",

  // Arghakhanchi
  argakhanchi: "Arghakhanchi",

  // Solukhumbu
  solu: "Solukhumbu",
};

// Nepali Devanagari mappings
const DEVANAGARI_ALIASES: Record<string, ValidDistrict> = {
  "अछाम": "Achham",
  "अर्घाखाँची": "Arghakhanchi",
  "अर्घाखाचि": "Arghakhanchi",
  "बागलुङ": "Baglung",
  "बागलुङ्ग": "Baglung",
  "बैतडी": "Baitadi",
  "बझाङ": "Bajhang",
  "बझाङ्ग": "Bajhang",
  "बाजुरा": "Bajura",
  "बाँके": "Banke",
  "बाके": "Banke",
  "बारा": "Bara",
  "बर्दिया": "Bardiya",
  "भक्तपुर": "Bhaktapur",
  "भोजपुर": "Bhojpur",
  "चितवन": "Chitwan",
  "डडेलधुरा": "Dadeldhura",
  "डडेल्धुरा": "Dadeldhura",
  "दैलेख": "Dailekh",
  "दाङ": "Dang",
  "दाङ्ग": "Dang",
  "दार्चुला": "Darchula",
  "धादिङ": "Dhading",
  "धादिङ्ग": "Dhading",
  "धनकुटा": "Dhankuta",
  "धनुषा": "Dhanusha",
  "धनुसा": "Dhanusha",
  "दोलखा": "Dolakha",
  "डोल्पा": "Dolpa",
  "डोटी": "Doti",
  "पूर्वी रुकुम": "Eastern Rukum",
  "पुर्वी रुकुम": "Eastern Rukum",
  "रुकुम पूर्व": "Eastern Rukum",
  "रुकुम (पूर्व)": "Eastern Rukum",
  "गोरखा": "Gorkha",
  "गोर्खा": "Gorkha",
  "गुल्मी": "Gulmi",
  "हुम्ला": "Humla",
  "इलाम": "Ilam",
  "जाजरकोट": "Jajarkot",
  "झापा": "Jhapa",
  "जुम्ला": "Jumla",
  "कैलाली": "Kailali",
  "कालिकोट": "Kalikot",
  "कञ्चनपुर": "Kanchanpur",
  "कन्चनपुर": "Kanchanpur",
  "कपिलवस्तु": "Kapilvastu",
  "कास्की": "Kaski",
  "काठमाडौं": "Kathmandu",
  "काठमाडौँ": "Kathmandu",
  "काठमाण्डौ": "Kathmandu",
  "काठमाण्डौं": "Kathmandu",
  "काभ्रेपलाञ्चोक": "Kavrepalanchok",
  "काभ्रे": "Kavrepalanchok",
  "काभ्रेपलान्चोक": "Kavrepalanchok",
  "खोटाङ": "Khotang",
  "खोटाङ्ग": "Khotang",
  "ललितपुर": "Lalitpur",
  "लमजुङ": "Lamjung",
  "लमजुङ्ग": "Lamjung",
  "महोत्तरी": "Mahottari",
  "मकवानपुर": "Makwanpur",
  "मनाङ": "Manang",
  "मनाङ्ग": "Manang",
  "मोरङ": "Morang",
  "मोरङ्ग": "Morang",
  "मुगु": "Mugu",
  "मुस्ताङ": "Mustang",
  "मुस्ताङ्ग": "Mustang",
  "म्याग्दी": "Myagdi",
  "नवलपुर": "Nawalpur",
  "नवलपरासी पूर्व": "Nawalpur",
  "नवलपरासी (पूर्व)": "Nawalpur",
  "नुवाकोट": "Nuwakot",
  "ओखलढुङ्गा": "Okhaldhunga",
  "ओखलढुंगा": "Okhaldhunga",
  "पाल्पा": "Palpa",
  "पाँचथर": "Panchthar",
  "पाचथर": "Panchthar",
  "परासी": "Parasi",
  "नवलपरासी पश्चिम": "Parasi",
  "नवलपरासी (पश्चिम)": "Parasi",
  "पर्वत": "Parbat",
  "पर्सा": "Parsa",
  "प्युठान": "Pyuthan",
  "प्यूठान": "Pyuthan",
  "रामेछाप": "Ramechhap",
  "रसुवा": "Rasuwa",
  "रौतहट": "Rautahat",
  "रोल्पा": "Rolpa",
  "रुपन्देही": "Rupandehi",
  "सल्यान": "Salyan",
  "संखुवासभा": "Sankhuwasabha",
  "सङ्खुवासभा": "Sankhuwasabha",
  "सप्तरी": "Saptari",
  "सर्लाही": "Sarlahi",
  "सिन्धुली": "Sindhuli",
  "सिन्धुपाल्चोक": "Sindhupalchok",
  "सिराहा": "Siraha",
  "सोलुखुम्बु": "Solukhumbu",
  "सुनसरी": "Sunsari",
  "सुर्खेत": "Surkhet",
  "स्याङ्जा": "Syangja",
  "स्याङ्गजा": "Syangja",
  "तनहुँ": "Tanahun",
  "तनहु": "Tanahun",
  "ताप्लेजुङ": "Taplejung",
  "ताप्लेजुङ्ग": "Taplejung",
  "तेह्रथुम": "Terhathum",
  "उदयपुर": "Udayapur",
  "पश्चिम रुकुम": "Western Rukum",
  "रुकुम पश्चिम": "Western Rukum",
  "रुकुम (पश्चिम)": "Western Rukum",
};

// Build fast lookup table
const LOOKUP = new Map<string, ValidDistrict>();

// Canonical entries
for (const name of DISTRICTS) {
  LOOKUP.set(normalizeDistrictKey(name), name);
}

// English aliases
for (const [alias, canonical] of Object.entries(ALIASES)) {
  LOOKUP.set(normalizeDistrictKey(alias), canonical);
}

// Devanagari aliases
for (const [alias, canonical] of Object.entries(DEVANAGARI_ALIASES)) {
  LOOKUP.set(normalizeDistrictKey(alias), canonical);
}

// Metadata index by canonical name
const META_BY_NAME = new Map<ValidDistrict, DistrictInfo>();
for (const item of DISTRICTS_DATA) {
  META_BY_NAME.set(item.name as ValidDistrict, item);
}

/**
 * Resolves any recognized spelling, alias, or Devanagari text to the canonical
 * district name. Returns `null` if unrecognized.
 *
 * @example
 * resolveDistrict("Kathmandu"); // "Kathmandu"
 * resolveDistrict("काठमाडौं"); // "Kathmandu"
 * resolveDistrict("kavre"); // "Kavrepalanchok"
 * resolveDistrict("tanahu district"); // "Tanahun"
 * resolveDistrict("Unknown"); // null
 */
export function resolveDistrict(
  name: string | null | undefined
): ValidDistrict | null {
  if (typeof name !== "string") return null;
  const key = normalizeDistrictKey(name);
  if (!key) return null;
  return LOOKUP.get(key) ?? null;
}

/**
 * Returns true if the string is a recognized Nepal district.
 */
export function isDistrict(name: unknown): boolean {
  return typeof name === "string" && resolveDistrict(name) !== null;
}

/**
 * Returns comprehensive metadata for a district (English & Nepali names,
 * headquarters, province, center coordinates, bounds).
 */
export function getDistrictInfo(
  name: string | null | undefined
): DistrictInfo | null {
  const canonical = resolveDistrict(name);
  if (!canonical) return null;
  return META_BY_NAME.get(canonical) ?? null;
}

/**
 * Returns all districts belonging to a specific province (by ID 1-7 or name).
 */
export function getDistrictsByProvince(
  province: number | string
): DistrictInfo[] {
  let targetId: number | null = null;
  if (typeof province === "number") {
    targetId = province;
  } else {
    const provNorm = province.trim().toLowerCase();
    for (const [idStr, info] of Object.entries(PROVINCES)) {
      if (
        info.name.toLowerCase() === provNorm ||
        info.nepali === province.trim() ||
        `province ${idStr}` === provNorm ||
        `province ${info.name.toLowerCase()}` === provNorm
      ) {
        targetId = Number(idStr);
        break;
      }
    }
  }

  if (!targetId) return [];
  return DISTRICTS_DATA.filter((d) => d.provinceId === targetId);
}

export { DISTRICTS_DATA, PROVINCES, type DistrictInfo, type ProvinceInfo };
