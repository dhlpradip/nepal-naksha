// Metadata for all 77 districts and 7 provinces of Nepal.
export interface ProvinceInfo {
  id: number;
  name: string;
  nepali: string;
}

export const PROVINCES: Record<number, ProvinceInfo> = {
  "1": {
    "id": 1,
    "name": "Koshi",
    "nepali": "कोशी"
  },
  "2": {
    "id": 2,
    "name": "Madhesh",
    "nepali": "मधेश"
  },
  "3": {
    "id": 3,
    "name": "Bagmati",
    "nepali": "बागमती"
  },
  "4": {
    "id": 4,
    "name": "Gandaki",
    "nepali": "गण्डकी"
  },
  "5": {
    "id": 5,
    "name": "Lumbini",
    "nepali": "लुम्बिनी"
  },
  "6": {
    "id": 6,
    "name": "Karnali",
    "nepali": "कर्णाली"
  },
  "7": {
    "id": 7,
    "name": "Sudurpashchim",
    "nepali": "सुदूरपश्चिम"
  }
};

export interface DistrictInfo {
  name: string;
  nepali: string;
  provinceId: number;
  provinceName: string;
  provinceNepali: string;
  headquarters: string;
  center: [number, number];
  bounds: [[number, number], [number, number]];
}

export const DISTRICTS_DATA: DistrictInfo[] = [
  {
    "name": "Achham",
    "nepali": "अछाम",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Mangalsen",
    "center": [
      166.9,
      208.2
    ],
    "bounds": [
      [
        135.4,
        170.9
      ],
      [
        200.4,
        257.6
      ]
    ]
  },
  {
    "name": "Arghakhanchi",
    "nepali": "अर्घाखाँची",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Sandhikharka",
    "center": [
      376.1,
      368.3
    ],
    "bounds": [
      [
        337.9,
        342.3
      ],
      [
        406.4,
        386.2
      ]
    ]
  },
  {
    "name": "Baglung",
    "nepali": "बागलुङ",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Baglung",
    "center": [
      397.3,
      311.3
    ],
    "bounds": [
      [
        352.9,
        272.9
      ],
      [
        446.8,
        347.1
      ]
    ]
  },
  {
    "name": "Baitadi",
    "nepali": "बैतडी",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Dasharathchand",
    "center": [
      81.1,
      155.3
    ],
    "bounds": [
      [
        42.5,
        128.1
      ],
      [
        121,
        182
      ]
    ]
  },
  {
    "name": "Bajhang",
    "nepali": "बझाङ",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Chainpur",
    "center": [
      152.8,
      127.9
    ],
    "bounds": [
      [
        101.5,
        80.8
      ],
      [
        198.2,
        171.5
      ]
    ]
  },
  {
    "name": "Bajura",
    "nepali": "बाजुरा",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Martadi",
    "center": [
      198.3,
      147.7
    ],
    "bounds": [
      [
        152.4,
        95.1
      ],
      [
        226.8,
        187.1
      ]
    ]
  },
  {
    "name": "Banke",
    "nepali": "बाँके",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Nepalgunj",
    "center": [
      229.4,
      346
    ],
    "bounds": [
      [
        190.7,
        313.3
      ],
      [
        272.5,
        376.8
      ]
    ]
  },
  {
    "name": "Bara",
    "nepali": "बारा",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Kalaiya",
    "center": [
      611.2,
      475.7
    ],
    "bounds": [
      [
        587.7,
        441.9
      ],
      [
        634.1,
        510
      ]
    ]
  },
  {
    "name": "Bardiya",
    "nepali": "बर्दिया",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Gulariya",
    "center": [
      179,
      306.1
    ],
    "bounds": [
      [
        138.7,
        267.8
      ],
      [
        222,
        348.3
      ]
    ]
  },
  {
    "name": "Bhaktapur",
    "nepali": "भक्तपुर",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Bhaktapur",
    "center": [
      654.9,
      400.2
    ],
    "bounds": [
      [
        644.7,
        393.7
      ],
      [
        664.7,
        408
      ]
    ]
  },
  {
    "name": "Bhojpur",
    "nepali": "भोजपुर",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Bhojpur",
    "center": [
      846.4,
      466.3
    ],
    "bounds": [
      [
        826.6,
        428.7
      ],
      [
        870.5,
        505
      ]
    ]
  },
  {
    "name": "Chitwan",
    "nepali": "चितवन",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Bharatpur",
    "center": [
      536.5,
      412.7
    ],
    "bounds": [
      [
        475.4,
        373.8
      ],
      [
        578.7,
        443.3
      ]
    ]
  },
  {
    "name": "Dadeldhura",
    "nepali": "डडेलधुरा",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Amargadhi",
    "center": [
      71.4,
      193.4
    ],
    "bounds": [
      [
        32.1,
        166.4
      ],
      [
        106.5,
        224.3
      ]
    ]
  },
  {
    "name": "Dailekh",
    "nepali": "दैलेख",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Dullu / Narayan",
    "center": [
      211.5,
      240
    ],
    "bounds": [
      [
        180.3,
        205.6
      ],
      [
        240.6,
        272.8
      ]
    ]
  },
  {
    "name": "Dang",
    "nepali": "दाङ",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Ghorahi",
    "center": [
      298.9,
      362.4
    ],
    "bounds": [
      [
        251,
        323.2
      ],
      [
        353,
        400.2
      ]
    ]
  },
  {
    "name": "Darchula",
    "nepali": "दार्चुला",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Khalanga",
    "center": [
      107.1,
      95.5
    ],
    "bounds": [
      [
        56.9,
        24
      ],
      [
        144.6,
        142.1
      ]
    ]
  },
  {
    "name": "Dhading",
    "nepali": "धादिङ",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Dhading Besi",
    "center": [
      598.4,
      364
    ],
    "bounds": [
      [
        561.9,
        311.5
      ],
      [
        634.4,
        401.6
      ]
    ]
  },
  {
    "name": "Dhankuta",
    "nepali": "धनकुटा",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Dhankuta",
    "center": [
      877.3,
      491.4
    ],
    "bounds": [
      [
        855.7,
        464.7
      ],
      [
        907.5,
        510.6
      ]
    ]
  },
  {
    "name": "Dhanusha",
    "nepali": "धनुषा",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Janakpur",
    "center": [
      724.6,
      512.8
    ],
    "bounds": [
      [
        702.6,
        478
      ],
      [
        751.3,
        547
      ]
    ]
  },
  {
    "name": "Dolakha",
    "nepali": "दोलखा",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Charikot",
    "center": [
      743.6,
      386.3
    ],
    "bounds": [
      [
        702.9,
        334.6
      ],
      [
        786.4,
        427.2
      ]
    ]
  },
  {
    "name": "Dolpa",
    "nepali": "डोल्पा",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Dunai",
    "center": [
      373.5,
      200.6
    ],
    "bounds": [
      [
        296,
        128.4
      ],
      [
        447.4,
        261
      ]
    ]
  },
  {
    "name": "Doti",
    "nepali": "डोटी",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Dipayal Silgadhi",
    "center": [
      119.5,
      200.8
    ],
    "bounds": [
      [
        76,
        163.8
      ],
      [
        150,
        233.1
      ]
    ]
  },
  {
    "name": "Eastern Rukum",
    "nepali": "पूर्वी रुकुम",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Rukumkot",
    "center": [
      344.6,
      267.5
    ],
    "bounds": [
      [
        301.2,
        241.1
      ],
      [
        385,
        294
      ]
    ]
  },
  {
    "name": "Gorkha",
    "nepali": "गोरखा",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Gorkha",
    "center": [
      578.3,
      314.7
    ],
    "bounds": [
      [
        534.8,
        256.9
      ],
      [
        625.8,
        384.6
      ]
    ]
  },
  {
    "name": "Gulmi",
    "nepali": "गुल्मी",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Tamghas",
    "center": [
      403,
      345
    ],
    "bounds": [
      [
        368.8,
        320.5
      ],
      [
        439,
        367.8
      ]
    ]
  },
  {
    "name": "Humla",
    "nepali": "हुम्ला",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Simikot",
    "center": [
      235.5,
      83.9
    ],
    "bounds": [
      [
        162,
        27.5
      ],
      [
        308.4,
        142.1
      ]
    ]
  },
  {
    "name": "Ilam",
    "nepali": "इलाम",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Ilam",
    "center": [
      944.8,
      506.2
    ],
    "bounds": [
      [
        908.4,
        476.2
      ],
      [
        977.5,
        535.2
      ]
    ]
  },
  {
    "name": "Jajarkot",
    "nepali": "जाजरकोट",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Khalanga",
    "center": [
      269.2,
      241.7
    ],
    "bounds": [
      [
        228.2,
        206.8
      ],
      [
        317.1,
        275.6
      ]
    ]
  },
  {
    "name": "Jhapa",
    "nepali": "झापा",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Bhadrapur",
    "center": [
      945.9,
      545.6
    ],
    "bounds": [
      [
        913.6,
        516
      ],
      [
        978.4,
        574.4
      ]
    ]
  },
  {
    "name": "Jumla",
    "nepali": "जुम्ला",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Khalanga",
    "center": [
      275.2,
      186.9
    ],
    "bounds": [
      [
        230.5,
        154.9
      ],
      [
        318.8,
        227.3
      ]
    ]
  },
  {
    "name": "Kailali",
    "nepali": "कैलाली",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Dhangadhi",
    "center": [
      117.3,
      258
    ],
    "bounds": [
      [
        72.4,
        212.8
      ],
      [
        165.9,
        304.4
      ]
    ]
  },
  {
    "name": "Kalikot",
    "nepali": "कालिकोट",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Manma",
    "center": [
      220.4,
      197.4
    ],
    "bounds": [
      [
        187.1,
        161.4
      ],
      [
        251.6,
        227.7
      ]
    ]
  },
  {
    "name": "Kanchanpur",
    "nepali": "कञ्चनपुर",
    "provinceId": 7,
    "provinceName": "Sudurpashchim",
    "provinceNepali": "सुदूरपश्चिम",
    "headquarters": "Bhimdatta",
    "center": [
      52.1,
      242
    ],
    "bounds": [
      [
        20.2,
        208.8
      ],
      [
        79.9,
        283.6
      ]
    ]
  },
  {
    "name": "Kapilvastu",
    "nepali": "कपिलवस्तु",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Taulihawa",
    "center": [
      366.2,
      405.9
    ],
    "bounds": [
      [
        331.8,
        379.4
      ],
      [
        394.8,
        435
      ]
    ]
  },
  {
    "name": "Kaski",
    "nepali": "कास्की",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Pokhara",
    "center": [
      484.9,
      310.1
    ],
    "bounds": [
      [
        449.9,
        275.2
      ],
      [
        517.9,
        346.2
      ]
    ]
  },
  {
    "name": "Kathmandu",
    "nepali": "काठमाडौं",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Kathmandu",
    "center": [
      642.3,
      394.1
    ],
    "bounds": [
      [
        624.9,
        381.9
      ],
      [
        664.3,
        414.3
      ]
    ]
  },
  {
    "name": "Kavrepalanchok",
    "nepali": "काभ्रेपलाञ्चोक",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Dhulikhel",
    "center": [
      675.7,
      418.8
    ],
    "bounds": [
      [
        648.6,
        385.9
      ],
      [
        705.9,
        445.7
      ]
    ]
  },
  {
    "name": "Khotang",
    "nepali": "खोटाङ",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Diktel",
    "center": [
      813.3,
      467.7
    ],
    "bounds": [
      [
        770.9,
        431.9
      ],
      [
        836.6,
        506.9
      ]
    ]
  },
  {
    "name": "Lalitpur",
    "nepali": "ललितपुर",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Lalitpur",
    "center": [
      643,
      418.8
    ],
    "bounds": [
      [
        630.6,
        398.7
      ],
      [
        654.8,
        436.8
      ]
    ]
  },
  {
    "name": "Lamjung",
    "nepali": "लमजुङ",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Besishahar",
    "center": [
      535.8,
      318.5
    ],
    "bounds": [
      [
        507.5,
        289.4
      ],
      [
        566.8,
        349.8
      ]
    ]
  },
  {
    "name": "Mahottari",
    "nepali": "महोत्तरी",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Jaleshwar",
    "center": [
      699.4,
      505.6
    ],
    "bounds": [
      [
        682.7,
        468.1
      ],
      [
        714.1,
        542.5
      ]
    ]
  },
  {
    "name": "Makwanpur",
    "nepali": "मकवानपुर",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Hetauda",
    "center": [
      612.2,
      428
    ],
    "bounds": [
      [
        565.3,
        396.2
      ],
      [
        662.8,
        468.6
      ]
    ]
  },
  {
    "name": "Manang",
    "nepali": "मनाङ",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Chame",
    "center": [
      511.5,
      267.2
    ],
    "bounds": [
      [
        460.4,
        237.1
      ],
      [
        552.3,
        296.4
      ]
    ]
  },
  {
    "name": "Morang",
    "nepali": "मोरङ",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Biratnagar",
    "center": [
      894,
      540.7
    ],
    "bounds": [
      [
        866.4,
        505.4
      ],
      [
        919.2,
        576
      ]
    ]
  },
  {
    "name": "Mugu",
    "nepali": "मुगु",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Gamgadhi",
    "center": [
      293.3,
      140.2
    ],
    "bounds": [
      [
        223.1,
        92.5
      ],
      [
        347.1,
        171.1
      ]
    ]
  },
  {
    "name": "Mustang",
    "nepali": "मुस्ताङ",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Jomsom",
    "center": [
      468.4,
      225.9
    ],
    "bounds": [
      [
        424.2,
        178.9
      ],
      [
        514.8,
        280.9
      ]
    ]
  },
  {
    "name": "Myagdi",
    "nepali": "म्याग्दी",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Beni",
    "center": [
      421.6,
      283.5
    ],
    "bounds": [
      [
        379.4,
        251.5
      ],
      [
        470.1,
        317.6
      ]
    ]
  },
  {
    "name": "Nawalpur",
    "nepali": "नवलपुर",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Kawasoti",
    "center": [
      495.3,
      397.3
    ],
    "bounds": [
      [
        452.3,
        374.6
      ],
      [
        535.6,
        418.7
      ]
    ]
  },
  {
    "name": "Nuwakot",
    "nepali": "नुवाकोट",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Bidur",
    "center": [
      630.7,
      368.9
    ],
    "bounds": [
      [
        601.3,
        346.1
      ],
      [
        660.9,
        389.4
      ]
    ]
  },
  {
    "name": "Okhaldhunga",
    "nepali": "ओखलढुङ्गा",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Okhaldhunga",
    "center": [
      769.9,
      446.3
    ],
    "bounds": [
      [
        744.4,
        420.4
      ],
      [
        801.2,
        470.4
      ]
    ]
  },
  {
    "name": "Palpa",
    "nepali": "पाल्पा",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Tansen",
    "center": [
      441.1,
      381.6
    ],
    "bounds": [
      [
        394.8,
        363.4
      ],
      [
        488.5,
        399.9
      ]
    ]
  },
  {
    "name": "Panchthar",
    "nepali": "पाँचथर",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Phidim",
    "center": [
      929.6,
      475
    ],
    "bounds": [
      [
        896.3,
        432.6
      ],
      [
        964.6,
        508.7
      ]
    ]
  },
  {
    "name": "Parasi",
    "nepali": "परासी",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Ramgram",
    "center": [
      456.7,
      419.4
    ],
    "bounds": [
      [
        436.4,
        397
      ],
      [
        481.5,
        444.2
      ]
    ]
  },
  {
    "name": "Parbat",
    "nepali": "पर्वत",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Kusma",
    "center": [
      447.5,
      329.6
    ],
    "bounds": [
      [
        433.8,
        304.1
      ],
      [
        464.4,
        357.6
      ]
    ]
  },
  {
    "name": "Parsa",
    "nepali": "पर्सा",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Birgunj",
    "center": [
      577,
      458.5
    ],
    "bounds": [
      [
        541.5,
        429
      ],
      [
        599.8,
        492.8
      ]
    ]
  },
  {
    "name": "Pyuthan",
    "nepali": "प्युठान",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Pyuthan Khalanga",
    "center": [
      351.7,
      341.7
    ],
    "bounds": [
      [
        320,
        309
      ],
      [
        378.9,
        373.5
      ]
    ]
  },
  {
    "name": "Ramechhap",
    "nepali": "रामेछाप",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Manthali",
    "center": [
      740.7,
      422.9
    ],
    "bounds": [
      [
        697,
        379.9
      ],
      [
        787.8,
        458
      ]
    ]
  },
  {
    "name": "Rasuwa",
    "nepali": "रसुवा",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Dhunche",
    "center": [
      651.3,
      333.1
    ],
    "bounds": [
      [
        616.9,
        306
      ],
      [
        696.2,
        362.4
      ]
    ]
  },
  {
    "name": "Rautahat",
    "nepali": "रौतहट",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Gaur",
    "center": [
      638.5,
      489.9
    ],
    "bounds": [
      [
        622.2,
        459.7
      ],
      [
        662.1,
        523.8
      ]
    ]
  },
  {
    "name": "Rolpa",
    "nepali": "रोल्पा",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Liwang",
    "center": [
      323.3,
      311.6
    ],
    "bounds": [
      [
        290.7,
        283.1
      ],
      [
        362.2,
        344.6
      ]
    ]
  },
  {
    "name": "Rupandehi",
    "nepali": "रुपन्देही",
    "provinceId": 5,
    "provinceName": "Lumbini",
    "provinceNepali": "लुम्बिनी",
    "headquarters": "Siddharthanagar",
    "center": [
      413.3,
      413.1
    ],
    "bounds": [
      [
        391.6,
        385.4
      ],
      [
        444.8,
        446.1
      ]
    ]
  },
  {
    "name": "Salyan",
    "nepali": "सल्यान",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Khalanga",
    "center": [
      265.8,
      304.4
    ],
    "bounds": [
      [
        219.6,
        271.8
      ],
      [
        299,
        336.1
      ]
    ]
  },
  {
    "name": "Sankhuwasabha",
    "nepali": "संखुवासभा",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Khandbari",
    "center": [
      871.1,
      413
    ],
    "bounds": [
      [
        831.7,
        363.3
      ],
      [
        917.1,
        472
      ]
    ]
  },
  {
    "name": "Saptari",
    "nepali": "सप्तरी",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Rajbiraj",
    "center": [
      806,
      540.8
    ],
    "bounds": [
      [
        777.2,
        505.2
      ],
      [
        841.3,
        566.1
      ]
    ]
  },
  {
    "name": "Sarlahi",
    "nepali": "सर्लाही",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Malangwa",
    "center": [
      669.3,
      492.2
    ],
    "bounds": [
      [
        641.3,
        464.7
      ],
      [
        699,
        523.9
      ]
    ]
  },
  {
    "name": "Sindhuli",
    "nepali": "सिन्धुली",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Kamalamai",
    "center": [
      714,
      463.5
    ],
    "bounds": [
      [
        652.6,
        430.5
      ],
      [
        766.1,
        501.2
      ]
    ]
  },
  {
    "name": "Sindhupalchok",
    "nepali": "सिन्धुपाल्चोक",
    "provinceId": 3,
    "provinceName": "Bagmati",
    "provinceNepali": "बागमती",
    "headquarters": "Chautara",
    "center": [
      689.7,
      369
    ],
    "bounds": [
      [
        654.8,
        330.8
      ],
      [
        727.7,
        409.1
      ]
    ]
  },
  {
    "name": "Siraha",
    "nepali": "सिराहा",
    "provinceId": 2,
    "provinceName": "Madhesh",
    "provinceNepali": "मधेश",
    "headquarters": "Siraha",
    "center": [
      760.7,
      522.3
    ],
    "bounds": [
      [
        736,
        498.9
      ],
      [
        783.7,
        549.8
      ]
    ]
  },
  {
    "name": "Solukhumbu",
    "nepali": "सोलुखुम्बु",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Salleri",
    "center": [
      805.1,
      395.7
    ],
    "bounds": [
      [
        762.5,
        342.4
      ],
      [
        839.6,
        445.1
      ]
    ]
  },
  {
    "name": "Sunsari",
    "nepali": "सुनसरी",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Inaruwa",
    "center": [
      857.8,
      536.3
    ],
    "bounds": [
      [
        827.8,
        506.2
      ],
      [
        879.9,
        568.8
      ]
    ]
  },
  {
    "name": "Surkhet",
    "nepali": "सुर्खेत",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Birendranagar",
    "center": [
      200.9,
      272.1
    ],
    "bounds": [
      [
        129.8,
        227
      ],
      [
        253.7,
        314.1
      ]
    ]
  },
  {
    "name": "Syangja",
    "nepali": "स्याङ्जा",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Syangja",
    "center": [
      462.1,
      354.7
    ],
    "bounds": [
      [
        419.3,
        327
      ],
      [
        488.8,
        375
      ]
    ]
  },
  {
    "name": "Tanahun",
    "nepali": "तनहुँ",
    "provinceId": 4,
    "provinceName": "Gandaki",
    "provinceNepali": "गण्डकी",
    "headquarters": "Damauli",
    "center": [
      514.9,
      363.4
    ],
    "bounds": [
      [
        477.9,
        340.1
      ],
      [
        551.2,
        391.9
      ]
    ]
  },
  {
    "name": "Taplejung",
    "nepali": "ताप्लेजुङ",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Phungling",
    "center": [
      935,
      413.1
    ],
    "bounds": [
      [
        890.7,
        364.2
      ],
      [
        979.8,
        454.7
      ]
    ]
  },
  {
    "name": "Terhathum",
    "nepali": "तेह्रथुम",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Myanglung",
    "center": [
      902.8,
      469.9
    ],
    "bounds": [
      [
        884.7,
        450.9
      ],
      [
        926.5,
        494.6
      ]
    ]
  },
  {
    "name": "Udayapur",
    "nepali": "उदयपुर",
    "provinceId": 1,
    "provinceName": "Koshi",
    "provinceNepali": "कोशी",
    "headquarters": "Gaighat",
    "center": [
      802.7,
      501.7
    ],
    "bounds": [
      [
        753,
        466.2
      ],
      [
        858.1,
        531.5
      ]
    ]
  },
  {
    "name": "Western Rukum",
    "nepali": "पश्चिम रुकुम",
    "provinceId": 6,
    "provinceName": "Karnali",
    "provinceNepali": "कर्णाली",
    "headquarters": "Musikot",
    "center": [
      303.7,
      258.5
    ],
    "bounds": [
      [
        271.3,
        225.2
      ],
      [
        332.8,
        287.8
      ]
    ]
  }
];
