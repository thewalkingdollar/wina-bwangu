const boothConfig = {
    "Wina1": {
        "location": "Lusaka CPD",
        "services": [
            "Airtel Money",
            "MTN Money",
            "Zamtel Money",
            "Zanaco",
            "FNB"
        ]
    },
    "Wina2": {
        "location": "Libala",
        "services": [
            "Airtel Money",
            "MTN Money",
            "Zamtel Money",
            "FNB"
        ]
    },
    "Wina3": {
        "location": "Kabwata",
        "services": [
            "Airtel Money",
            "MTN Money",
            "Zamtel Money",
            "Zanaco",
            "FNB"
        ]
    },
    "Wina4": {
        "location": "Mandevu",
        "services": [
            "Airtel Money",
            "MTN Money",
            "Zamtel Money"
        ]
    },
    "Wina5": {
        "location": "Woodlands",
        "services": [
            "Airtel Money",
            "MTN Money",
            "Zanaco",
            "FNB"
        ]
    },
    "Wina6": {
        "location": "Matero East",
        "services": [
            "Airtel Money",
            "MTN Money",
            "Zamtel Money"
        ]
    }
};
const rates = {
    "Airtel Money": 0.05,
    "MTN Money": 0.06,
    "Zamtel Money": 0.045,
    "Zanaco": 0.035,
    "FNB": 0.04
};
const limits = {"Airtel Money":350000,"MTN Money":160000,"Zamtel Money":70000,"Zanaco":80000,"FNB":80000};
let transactions = [
    {
        "id": "WB0000001",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Airtel Money",
        "amount": 1420.95,
        "afterTax": 1193.6,
        "revenue": 59.68,
        "date": "2026-09-24"
    },
    {
        "id": "WB0000002",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Airtel Money",
        "amount": 1730.6,
        "afterTax": 1453.7,
        "revenue": 72.69,
        "date": "2026-09-23"
    },
    {
        "id": "WB0000003",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "MTN Money",
        "amount": 818.55,
        "afterTax": 687.58,
        "revenue": 41.25,
        "date": "2026-09-22"
    },
    {
        "id": "WB0000004",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "MTN Money",
        "amount": 4637.87,
        "afterTax": 3895.81,
        "revenue": 233.75,
        "date": "2026-09-21"
    },
    {
        "id": "WB0000005",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 4580.79,
        "afterTax": 3847.86,
        "revenue": 134.68,
        "date": "2026-09-20"
    },
    {
        "id": "WB0000006",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 3083.51,
        "afterTax": 2590.15,
        "revenue": 155.41,
        "date": "2026-09-19"
    },
    {
        "id": "WB0000007",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 1320.06,
        "afterTax": 1108.85,
        "revenue": 38.81,
        "date": "2026-09-18"
    },
    {
        "id": "WB0000008",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "FNB",
        "amount": 4989.1,
        "afterTax": 4190.84,
        "revenue": 167.63,
        "date": "2026-09-17"
    },
    {
        "id": "WB0000009",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 2477.23,
        "afterTax": 2080.87,
        "revenue": 124.85,
        "date": "2026-09-16"
    },
    {
        "id": "WB0000010",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 101.3,
        "afterTax": 85.09,
        "revenue": 3.83,
        "date": "2026-09-15"
    },
    {
        "id": "WB0000011",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 4405.53,
        "afterTax": 3700.65,
        "revenue": 185.03,
        "date": "2026-09-14"
    },
    {
        "id": "WB0000012",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Airtel Money",
        "amount": 1146.73,
        "afterTax": 963.25,
        "revenue": 48.16,
        "date": "2026-09-13"
    },
    {
        "id": "WB0000013",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "MTN Money",
        "amount": 4203.47,
        "afterTax": 3530.91,
        "revenue": 211.85,
        "date": "2026-09-12"
    },
    {
        "id": "WB0000014",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 3418.64,
        "afterTax": 2871.66,
        "revenue": 114.87,
        "date": "2026-09-11"
    },
    {
        "id": "WB0000015",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Airtel Money",
        "amount": 3721.48,
        "afterTax": 3126.04,
        "revenue": 156.3,
        "date": "2026-09-10"
    },
    {
        "id": "WB0000016",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 4922.81,
        "afterTax": 4135.16,
        "revenue": 186.08,
        "date": "2026-09-09"
    },
    {
        "id": "WB0000017",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 1068.5,
        "afterTax": 897.54,
        "revenue": 35.9,
        "date": "2026-09-08"
    },
    {
        "id": "WB0000018",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Airtel Money",
        "amount": 3256.11,
        "afterTax": 2735.13,
        "revenue": 136.76,
        "date": "2026-09-07"
    },
    {
        "id": "WB0000019",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 2972.35,
        "afterTax": 2496.77,
        "revenue": 99.87,
        "date": "2026-09-06"
    },
    {
        "id": "WB0000020",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 3963.18,
        "afterTax": 3329.07,
        "revenue": 149.81,
        "date": "2026-09-05"
    },
    {
        "id": "WB0000021",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zanaco",
        "amount": 3379.38,
        "afterTax": 2838.68,
        "revenue": 99.35,
        "date": "2026-09-04"
    },
    {
        "id": "WB0000022",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 4634.26,
        "afterTax": 3892.78,
        "revenue": 175.18,
        "date": "2026-09-03"
    },
    {
        "id": "WB0000023",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 4422.91,
        "afterTax": 3715.24,
        "revenue": 130.03,
        "date": "2026-09-02"
    },
    {
        "id": "WB0000024",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Airtel Money",
        "amount": 686.75,
        "afterTax": 576.87,
        "revenue": 28.84,
        "date": "2026-09-01"
    },
    {
        "id": "WB0000025",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 1543.12,
        "afterTax": 1296.22,
        "revenue": 51.85,
        "date": "2026-08-31"
    },
    {
        "id": "WB0000026",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 566.87,
        "afterTax": 476.17,
        "revenue": 28.57,
        "date": "2026-08-30"
    },
    {
        "id": "WB0000027",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 666.38,
        "afterTax": 559.76,
        "revenue": 25.19,
        "date": "2026-08-29"
    },
    {
        "id": "WB0000028",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "MTN Money",
        "amount": 3454.64,
        "afterTax": 2901.9,
        "revenue": 174.11,
        "date": "2026-08-28"
    },
    {
        "id": "WB0000029",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zanaco",
        "amount": 2310.39,
        "afterTax": 1940.73,
        "revenue": 67.93,
        "date": "2026-08-27"
    },
    {
        "id": "WB0000030",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 2487.65,
        "afterTax": 2089.63,
        "revenue": 83.59,
        "date": "2026-09-25"
    },
    {
        "id": "WB0000031",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 4096.76,
        "afterTax": 3441.28,
        "revenue": 154.86,
        "date": "2026-09-24"
    },
    {
        "id": "WB0000032",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Airtel Money",
        "amount": 741.6,
        "afterTax": 622.94,
        "revenue": 31.15,
        "date": "2026-09-23"
    },
    {
        "id": "WB0000033",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 2801.04,
        "afterTax": 2352.87,
        "revenue": 82.35,
        "date": "2026-09-22"
    },
    {
        "id": "WB0000034",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 3906.06,
        "afterTax": 3281.09,
        "revenue": 164.05,
        "date": "2026-09-21"
    },
    {
        "id": "WB0000035",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 3708.1,
        "afterTax": 3114.8,
        "revenue": 140.17,
        "date": "2026-09-20"
    },
    {
        "id": "WB0000036",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 2180.16,
        "afterTax": 1831.33,
        "revenue": 91.57,
        "date": "2026-09-19"
    },
    {
        "id": "WB0000037",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Airtel Money",
        "amount": 1986.71,
        "afterTax": 1668.84,
        "revenue": 83.44,
        "date": "2026-09-18"
    },
    {
        "id": "WB0000038",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zanaco",
        "amount": 782.22,
        "afterTax": 657.06,
        "revenue": 23.0,
        "date": "2026-09-17"
    },
    {
        "id": "WB0000039",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 1683.88,
        "afterTax": 1414.46,
        "revenue": 49.51,
        "date": "2026-09-16"
    },
    {
        "id": "WB0000040",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 4155.93,
        "afterTax": 3490.98,
        "revenue": 157.09,
        "date": "2026-09-15"
    },
    {
        "id": "WB0000041",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 3051.83,
        "afterTax": 2563.54,
        "revenue": 128.18,
        "date": "2026-09-14"
    },
    {
        "id": "WB0000042",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 4274.27,
        "afterTax": 3590.39,
        "revenue": 143.62,
        "date": "2026-09-13"
    },
    {
        "id": "WB0000043",
        "booth": "Wina2",
        "location": "Libala",
        "service": "MTN Money",
        "amount": 111.85,
        "afterTax": 93.95,
        "revenue": 5.64,
        "date": "2026-09-12"
    },
    {
        "id": "WB0000044",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 2885.61,
        "afterTax": 2423.91,
        "revenue": 109.08,
        "date": "2026-09-11"
    },
    {
        "id": "WB0000045",
        "booth": "Wina2",
        "location": "Libala",
        "service": "MTN Money",
        "amount": 1497.28,
        "afterTax": 1257.72,
        "revenue": 75.46,
        "date": "2026-09-10"
    },
    {
        "id": "WB0000046",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 391.04,
        "afterTax": 328.47,
        "revenue": 14.78,
        "date": "2026-09-09"
    },
    {
        "id": "WB0000047",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 1413.45,
        "afterTax": 1187.3,
        "revenue": 53.43,
        "date": "2026-09-08"
    },
    {
        "id": "WB0000048",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 3477.87,
        "afterTax": 2921.41,
        "revenue": 175.28,
        "date": "2026-09-07"
    },
    {
        "id": "WB0000049",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Airtel Money",
        "amount": 3567.96,
        "afterTax": 2997.09,
        "revenue": 149.85,
        "date": "2026-09-06"
    },
    {
        "id": "WB0000050",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Airtel Money",
        "amount": 436.86,
        "afterTax": 366.96,
        "revenue": 18.35,
        "date": "2026-09-05"
    },
    {
        "id": "WB0000051",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 3604.4,
        "afterTax": 3027.7,
        "revenue": 151.38,
        "date": "2026-09-04"
    },
    {
        "id": "WB0000052",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 1038.94,
        "afterTax": 872.71,
        "revenue": 39.27,
        "date": "2026-09-03"
    },
    {
        "id": "WB0000053",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 3998.88,
        "afterTax": 3359.06,
        "revenue": 201.54,
        "date": "2026-09-02"
    },
    {
        "id": "WB0000054",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 1312.3,
        "afterTax": 1102.33,
        "revenue": 44.09,
        "date": "2026-09-01"
    },
    {
        "id": "WB0000055",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 2848.61,
        "afterTax": 2392.83,
        "revenue": 95.71,
        "date": "2026-08-31"
    },
    {
        "id": "WB0000056",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 4792.46,
        "afterTax": 4025.67,
        "revenue": 241.54,
        "date": "2026-08-30"
    },
    {
        "id": "WB0000057",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 3713.13,
        "afterTax": 3119.03,
        "revenue": 187.14,
        "date": "2026-08-29"
    },
    {
        "id": "WB0000058",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 4507.03,
        "afterTax": 3785.91,
        "revenue": 151.44,
        "date": "2026-08-28"
    },
    {
        "id": "WB0000059",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 1680.01,
        "afterTax": 1411.21,
        "revenue": 84.67,
        "date": "2026-08-27"
    },
    {
        "id": "WB0000060",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 2801.13,
        "afterTax": 2352.95,
        "revenue": 82.35,
        "date": "2026-09-25"
    },
    {
        "id": "WB0000061",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 3452.18,
        "afterTax": 2899.83,
        "revenue": 173.99,
        "date": "2026-09-24"
    },
    {
        "id": "WB0000062",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 4458.64,
        "afterTax": 3745.26,
        "revenue": 149.81,
        "date": "2026-09-23"
    },
    {
        "id": "WB0000063",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 4432.02,
        "afterTax": 3722.9,
        "revenue": 130.3,
        "date": "2026-09-22"
    },
    {
        "id": "WB0000064",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Airtel Money",
        "amount": 1202.37,
        "afterTax": 1009.99,
        "revenue": 50.5,
        "date": "2026-09-21"
    },
    {
        "id": "WB0000065",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zamtel Money",
        "amount": 4965.48,
        "afterTax": 4171.0,
        "revenue": 187.69,
        "date": "2026-09-20"
    },
    {
        "id": "WB0000066",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 434.17,
        "afterTax": 364.7,
        "revenue": 21.88,
        "date": "2026-09-19"
    },
    {
        "id": "WB0000067",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 2570.36,
        "afterTax": 2159.1,
        "revenue": 86.36,
        "date": "2026-09-18"
    },
    {
        "id": "WB0000068",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Zamtel Money",
        "amount": 1982.45,
        "afterTax": 1665.26,
        "revenue": 74.94,
        "date": "2026-09-17"
    },
    {
        "id": "WB0000069",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 4366.53,
        "afterTax": 3667.89,
        "revenue": 146.72,
        "date": "2026-09-16"
    },
    {
        "id": "WB0000070",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 3036.48,
        "afterTax": 2550.64,
        "revenue": 102.03,
        "date": "2026-09-15"
    },
    {
        "id": "WB0000071",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 2204.18,
        "afterTax": 1851.51,
        "revenue": 64.8,
        "date": "2026-09-14"
    },
    {
        "id": "WB0000072",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 1050.39,
        "afterTax": 882.33,
        "revenue": 30.88,
        "date": "2026-09-13"
    },
    {
        "id": "WB0000073",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 3130.19,
        "afterTax": 2629.36,
        "revenue": 105.17,
        "date": "2026-09-12"
    },
    {
        "id": "WB0000074",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Airtel Money",
        "amount": 416.51,
        "afterTax": 349.87,
        "revenue": 17.49,
        "date": "2026-09-11"
    },
    {
        "id": "WB0000075",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zamtel Money",
        "amount": 1105.52,
        "afterTax": 928.64,
        "revenue": 41.79,
        "date": "2026-09-10"
    },
    {
        "id": "WB0000076",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "FNB",
        "amount": 2113.95,
        "afterTax": 1775.72,
        "revenue": 71.03,
        "date": "2026-09-09"
    },
    {
        "id": "WB0000077",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 189.88,
        "afterTax": 159.5,
        "revenue": 7.18,
        "date": "2026-09-08"
    },
    {
        "id": "WB0000078",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 3444.14,
        "afterTax": 2893.08,
        "revenue": 173.58,
        "date": "2026-09-07"
    },
    {
        "id": "WB0000079",
        "booth": "Wina2",
        "location": "Libala",
        "service": "MTN Money",
        "amount": 3544.88,
        "afterTax": 2977.7,
        "revenue": 178.66,
        "date": "2026-09-06"
    },
    {
        "id": "WB0000080",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 4842.63,
        "afterTax": 4067.81,
        "revenue": 183.05,
        "date": "2026-09-05"
    },
    {
        "id": "WB0000081",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 2890.93,
        "afterTax": 2428.38,
        "revenue": 109.28,
        "date": "2026-09-04"
    },
    {
        "id": "WB0000082",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 2729.63,
        "afterTax": 2292.89,
        "revenue": 137.57,
        "date": "2026-09-03"
    },
    {
        "id": "WB0000083",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 198.73,
        "afterTax": 166.93,
        "revenue": 8.35,
        "date": "2026-09-02"
    },
    {
        "id": "WB0000084",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Airtel Money",
        "amount": 580.57,
        "afterTax": 487.68,
        "revenue": 24.38,
        "date": "2026-09-01"
    },
    {
        "id": "WB0000085",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 2526.69,
        "afterTax": 2122.42,
        "revenue": 95.51,
        "date": "2026-08-31"
    },
    {
        "id": "WB0000086",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 4394.86,
        "afterTax": 3691.68,
        "revenue": 221.5,
        "date": "2026-08-30"
    },
    {
        "id": "WB0000087",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 1556.97,
        "afterTax": 1307.85,
        "revenue": 52.31,
        "date": "2026-08-29"
    },
    {
        "id": "WB0000088",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 392.53,
        "afterTax": 329.73,
        "revenue": 14.84,
        "date": "2026-08-28"
    },
    {
        "id": "WB0000089",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Airtel Money",
        "amount": 2919.67,
        "afterTax": 2452.52,
        "revenue": 122.63,
        "date": "2026-08-27"
    },
    {
        "id": "WB0000090",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Airtel Money",
        "amount": 2857.77,
        "afterTax": 2400.53,
        "revenue": 120.03,
        "date": "2026-09-25"
    },
    {
        "id": "WB0000091",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 4263.2,
        "afterTax": 3581.09,
        "revenue": 214.87,
        "date": "2026-09-24"
    },
    {
        "id": "WB0000092",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zanaco",
        "amount": 2854.55,
        "afterTax": 2397.82,
        "revenue": 83.92,
        "date": "2026-09-23"
    },
    {
        "id": "WB0000093",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 4434.58,
        "afterTax": 3725.05,
        "revenue": 186.25,
        "date": "2026-09-22"
    },
    {
        "id": "WB0000094",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 3838.83,
        "afterTax": 3224.62,
        "revenue": 128.98,
        "date": "2026-09-21"
    },
    {
        "id": "WB0000095",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 3448.07,
        "afterTax": 2896.38,
        "revenue": 173.78,
        "date": "2026-09-20"
    },
    {
        "id": "WB0000096",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 4934.7,
        "afterTax": 4145.15,
        "revenue": 207.26,
        "date": "2026-09-19"
    },
    {
        "id": "WB0000097",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "MTN Money",
        "amount": 613.41,
        "afterTax": 515.26,
        "revenue": 30.92,
        "date": "2026-09-18"
    },
    {
        "id": "WB0000098",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Zamtel Money",
        "amount": 2728.16,
        "afterTax": 2291.65,
        "revenue": 103.12,
        "date": "2026-09-17"
    },
    {
        "id": "WB0000099",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "FNB",
        "amount": 524.55,
        "afterTax": 440.62,
        "revenue": 17.62,
        "date": "2026-09-16"
    },
    {
        "id": "WB0000100",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 4447.5,
        "afterTax": 3735.9,
        "revenue": 224.15,
        "date": "2026-09-15"
    },
    {
        "id": "WB0000101",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 4342.5,
        "afterTax": 3647.7,
        "revenue": 218.86,
        "date": "2026-09-14"
    },
    {
        "id": "WB0000102",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 4591.07,
        "afterTax": 3856.5,
        "revenue": 134.98,
        "date": "2026-09-13"
    },
    {
        "id": "WB0000103",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 2881.94,
        "afterTax": 2420.83,
        "revenue": 108.94,
        "date": "2026-09-12"
    },
    {
        "id": "WB0000104",
        "booth": "Wina2",
        "location": "Libala",
        "service": "FNB",
        "amount": 3044.31,
        "afterTax": 2557.22,
        "revenue": 102.29,
        "date": "2026-09-11"
    },
    {
        "id": "WB0000105",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 2260.18,
        "afterTax": 1898.55,
        "revenue": 66.45,
        "date": "2026-09-10"
    },
    {
        "id": "WB0000106",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 3130.4,
        "afterTax": 2629.54,
        "revenue": 92.03,
        "date": "2026-09-09"
    },
    {
        "id": "WB0000107",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 4365.16,
        "afterTax": 3666.73,
        "revenue": 220.0,
        "date": "2026-09-08"
    },
    {
        "id": "WB0000108",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Airtel Money",
        "amount": 2960.34,
        "afterTax": 2486.69,
        "revenue": 124.33,
        "date": "2026-09-07"
    },
    {
        "id": "WB0000109",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 3190.86,
        "afterTax": 2680.32,
        "revenue": 160.82,
        "date": "2026-09-06"
    },
    {
        "id": "WB0000110",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 367.26,
        "afterTax": 308.5,
        "revenue": 10.8,
        "date": "2026-09-05"
    },
    {
        "id": "WB0000111",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 2092.29,
        "afterTax": 1757.52,
        "revenue": 105.45,
        "date": "2026-09-04"
    },
    {
        "id": "WB0000112",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 2931.7,
        "afterTax": 2462.63,
        "revenue": 147.76,
        "date": "2026-09-03"
    },
    {
        "id": "WB0000113",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 3539.24,
        "afterTax": 2972.96,
        "revenue": 178.38,
        "date": "2026-09-02"
    },
    {
        "id": "WB0000114",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 4517.32,
        "afterTax": 3794.55,
        "revenue": 189.73,
        "date": "2026-09-01"
    },
    {
        "id": "WB0000115",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 1779.63,
        "afterTax": 1494.89,
        "revenue": 67.27,
        "date": "2026-08-31"
    },
    {
        "id": "WB0000116",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 2445.05,
        "afterTax": 2053.84,
        "revenue": 123.23,
        "date": "2026-08-30"
    },
    {
        "id": "WB0000117",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 3184.07,
        "afterTax": 2674.62,
        "revenue": 120.36,
        "date": "2026-08-29"
    },
    {
        "id": "WB0000118",
        "booth": "Wina2",
        "location": "Libala",
        "service": "MTN Money",
        "amount": 4521.08,
        "afterTax": 3797.71,
        "revenue": 227.86,
        "date": "2026-08-28"
    },
    {
        "id": "WB0000119",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 3709.14,
        "afterTax": 3115.68,
        "revenue": 155.78,
        "date": "2026-08-27"
    },
    {
        "id": "WB0000120",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 4991.29,
        "afterTax": 4192.68,
        "revenue": 188.67,
        "date": "2026-09-25"
    },
    {
        "id": "WB0000121",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 2893.26,
        "afterTax": 2430.34,
        "revenue": 109.37,
        "date": "2026-09-24"
    },
    {
        "id": "WB0000122",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 1027.6,
        "afterTax": 863.18,
        "revenue": 51.79,
        "date": "2026-09-23"
    },
    {
        "id": "WB0000123",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 1897.62,
        "afterTax": 1594.0,
        "revenue": 79.7,
        "date": "2026-09-22"
    },
    {
        "id": "WB0000124",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Zamtel Money",
        "amount": 3181.22,
        "afterTax": 2672.22,
        "revenue": 120.25,
        "date": "2026-09-21"
    },
    {
        "id": "WB0000125",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 1653.2,
        "afterTax": 1388.69,
        "revenue": 69.43,
        "date": "2026-09-20"
    },
    {
        "id": "WB0000126",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 4493.12,
        "afterTax": 3774.22,
        "revenue": 226.45,
        "date": "2026-09-19"
    },
    {
        "id": "WB0000127",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 3264.65,
        "afterTax": 2742.31,
        "revenue": 137.12,
        "date": "2026-09-18"
    },
    {
        "id": "WB0000128",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 650.15,
        "afterTax": 546.13,
        "revenue": 21.85,
        "date": "2026-09-17"
    },
    {
        "id": "WB0000129",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "MTN Money",
        "amount": 853.92,
        "afterTax": 717.29,
        "revenue": 43.04,
        "date": "2026-09-16"
    },
    {
        "id": "WB0000130",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 849.31,
        "afterTax": 713.42,
        "revenue": 28.54,
        "date": "2026-09-15"
    },
    {
        "id": "WB0000131",
        "booth": "Wina2",
        "location": "Libala",
        "service": "MTN Money",
        "amount": 2544.21,
        "afterTax": 2137.14,
        "revenue": 128.23,
        "date": "2026-09-14"
    },
    {
        "id": "WB0000132",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 1232.82,
        "afterTax": 1035.57,
        "revenue": 46.6,
        "date": "2026-09-13"
    },
    {
        "id": "WB0000133",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 4621.93,
        "afterTax": 3882.42,
        "revenue": 135.88,
        "date": "2026-09-12"
    },
    {
        "id": "WB0000134",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 1153.97,
        "afterTax": 969.33,
        "revenue": 58.16,
        "date": "2026-09-11"
    },
    {
        "id": "WB0000135",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Zamtel Money",
        "amount": 3874.24,
        "afterTax": 3254.36,
        "revenue": 146.45,
        "date": "2026-09-10"
    },
    {
        "id": "WB0000136",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Airtel Money",
        "amount": 1976.64,
        "afterTax": 1660.38,
        "revenue": 83.02,
        "date": "2026-09-09"
    },
    {
        "id": "WB0000137",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Airtel Money",
        "amount": 2334.78,
        "afterTax": 1961.22,
        "revenue": 98.06,
        "date": "2026-09-08"
    },
    {
        "id": "WB0000138",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "MTN Money",
        "amount": 4626.67,
        "afterTax": 3886.4,
        "revenue": 233.18,
        "date": "2026-09-07"
    },
    {
        "id": "WB0000139",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Airtel Money",
        "amount": 2803.68,
        "afterTax": 2355.09,
        "revenue": 117.75,
        "date": "2026-09-06"
    },
    {
        "id": "WB0000140",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "MTN Money",
        "amount": 3081.05,
        "afterTax": 2588.08,
        "revenue": 155.28,
        "date": "2026-09-05"
    },
    {
        "id": "WB0000141",
        "booth": "Wina2",
        "location": "Libala",
        "service": "MTN Money",
        "amount": 3070.02,
        "afterTax": 2578.82,
        "revenue": 154.73,
        "date": "2026-09-04"
    },
    {
        "id": "WB0000142",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "FNB",
        "amount": 326.63,
        "afterTax": 274.37,
        "revenue": 10.97,
        "date": "2026-09-03"
    },
    {
        "id": "WB0000143",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Zamtel Money",
        "amount": 1913.59,
        "afterTax": 1607.42,
        "revenue": 72.33,
        "date": "2026-09-02"
    },
    {
        "id": "WB0000144",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 765.35,
        "afterTax": 642.89,
        "revenue": 22.5,
        "date": "2026-09-01"
    },
    {
        "id": "WB0000145",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 3150.92,
        "afterTax": 2646.77,
        "revenue": 119.1,
        "date": "2026-08-31"
    },
    {
        "id": "WB0000146",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 2314.24,
        "afterTax": 1943.96,
        "revenue": 87.48,
        "date": "2026-08-30"
    },
    {
        "id": "WB0000147",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 4026.08,
        "afterTax": 3381.91,
        "revenue": 152.19,
        "date": "2026-08-29"
    },
    {
        "id": "WB0000148",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zamtel Money",
        "amount": 1204.4,
        "afterTax": 1011.7,
        "revenue": 45.53,
        "date": "2026-08-28"
    },
    {
        "id": "WB0000149",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Airtel Money",
        "amount": 3566.03,
        "afterTax": 2995.47,
        "revenue": 149.77,
        "date": "2026-08-27"
    },
    {
        "id": "WB0000150",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 2687.9,
        "afterTax": 2257.84,
        "revenue": 79.02,
        "date": "2026-09-25"
    },
    {
        "id": "WB0000151",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "MTN Money",
        "amount": 3507.8,
        "afterTax": 2946.55,
        "revenue": 176.79,
        "date": "2026-09-24"
    },
    {
        "id": "WB0000152",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Airtel Money",
        "amount": 4295.97,
        "afterTax": 3608.61,
        "revenue": 180.43,
        "date": "2026-09-23"
    },
    {
        "id": "WB0000153",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 4488.93,
        "afterTax": 3770.7,
        "revenue": 169.68,
        "date": "2026-09-22"
    },
    {
        "id": "WB0000154",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 2631.79,
        "afterTax": 2210.7,
        "revenue": 99.48,
        "date": "2026-09-21"
    },
    {
        "id": "WB0000155",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 2354.26,
        "afterTax": 1977.58,
        "revenue": 79.1,
        "date": "2026-09-20"
    },
    {
        "id": "WB0000156",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 2917.17,
        "afterTax": 2450.42,
        "revenue": 147.03,
        "date": "2026-09-19"
    },
    {
        "id": "WB0000157",
        "booth": "Wina4",
        "location": "Mandevu",
        "service": "Zamtel Money",
        "amount": 1496.14,
        "afterTax": 1256.76,
        "revenue": 56.55,
        "date": "2026-09-18"
    },
    {
        "id": "WB0000158",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Airtel Money",
        "amount": 615.55,
        "afterTax": 517.06,
        "revenue": 25.85,
        "date": "2026-09-17"
    },
    {
        "id": "WB0000159",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 1084.05,
        "afterTax": 910.6,
        "revenue": 31.87,
        "date": "2026-09-16"
    },
    {
        "id": "WB0000160",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "Zanaco",
        "amount": 3312.46,
        "afterTax": 2782.47,
        "revenue": 97.39,
        "date": "2026-09-15"
    },
    {
        "id": "WB0000161",
        "booth": "Wina2",
        "location": "Libala",
        "service": "Zamtel Money",
        "amount": 4592.69,
        "afterTax": 3857.86,
        "revenue": 173.6,
        "date": "2026-09-14"
    },
    {
        "id": "WB0000162",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zanaco",
        "amount": 777.52,
        "afterTax": 653.12,
        "revenue": 22.86,
        "date": "2026-09-13"
    },
    {
        "id": "WB0000163",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 4601.15,
        "afterTax": 3864.97,
        "revenue": 154.6,
        "date": "2026-09-12"
    },
    {
        "id": "WB0000164",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 1017.75,
        "afterTax": 854.91,
        "revenue": 42.75,
        "date": "2026-09-11"
    },
    {
        "id": "WB0000165",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "Airtel Money",
        "amount": 773.96,
        "afterTax": 650.13,
        "revenue": 32.51,
        "date": "2026-09-10"
    },
    {
        "id": "WB0000166",
        "booth": "Wina6",
        "location": "Matero East",
        "service": "MTN Money",
        "amount": 2324.42,
        "afterTax": 1952.51,
        "revenue": 117.15,
        "date": "2026-09-09"
    },
    {
        "id": "WB0000167",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zamtel Money",
        "amount": 2052.84,
        "afterTax": 1724.39,
        "revenue": 77.6,
        "date": "2026-09-08"
    },
    {
        "id": "WB0000168",
        "booth": "Wina1",
        "location": "Lusaka CPD",
        "service": "Zanaco",
        "amount": 3618.6,
        "afterTax": 3039.62,
        "revenue": 106.39,
        "date": "2026-09-07"
    },
    {
        "id": "WB0000169",
        "booth": "Wina3",
        "location": "Kabwata",
        "service": "Zanaco",
        "amount": 362.13,
        "afterTax": 304.19,
        "revenue": 10.65,
        "date": "2026-09-06"
    },
    {
        "id": "WB0000170",
        "booth": "Wina5",
        "location": "Woodlands",
        "service": "FNB",
        "amount": 882.69,
        "afterTax": 741.46,
        "revenue": 29.66,
        "date": "2026-09-05"
    }
];
let counter = 171;
function getDashboard(){
    let totalRevenue=0,totalCapital=0; const byService={},byBooth={},freqService={},freqBooth={},used={};
    transactions.forEach(t=>{totalRevenue+=t.revenue;totalCapital+=t.amount;byService[t.service]=(byService[t.service]||0)+t.revenue;byBooth[t.booth]=(byBooth[t.booth]||0)+t.revenue;freqService[t.service]=(freqService[t.service]||0)+1;freqBooth[t.booth]=(freqBooth[t.booth]||0)+1;used[t.service]=(used[t.service]||0)+t.amount;});
    const remaining={}; Object.keys(limits).forEach(s=>remaining[s]=limits[s]-(used[s]||0));
    return {totalRevenue,totalCapital,byService,byBooth,freqService,freqBooth,remaining,used,count:transactions.length,limits};
}
function createTx(booth,service,amount){const afterTax=parseFloat(amount)*(1-0.16); const tx={id:'WB'+String(counter).padStart(7,'0'),booth,location:boothConfig[booth].location,service,amount:parseFloat(amount),afterTax:parseFloat(afterTax.toFixed(2)),revenue:parseFloat((afterTax*rates[service]).toFixed(2)),date:new Date().toISOString().split('T')[0]};transactions.push(tx);counter++;return tx;}
module.exports={boothConfig,rates,limits,transactions,getDashboard,createTx, getAll:()=>transactions};
