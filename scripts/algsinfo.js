const timesArrayKey = "ollTimesArray";
const selectionArrayKey = "ollSelection";

var selCases = [];

var algsGroups = {
    "Group 1" : [1,2],
    "Group 2" : [3,4,5,6],
    "Group 3" : [7,8,9,10],
    "Group 4" : [11,12,13,14,15,16],
    "Group 5" : [17,18],
    "Group 6" : [19,20],
    "Group 7" : [21,22],
    "Group 8" : [23,24,25,26],
    "Group 9" : [27,28,29,30],
    "Group 10" : [31,32,33,34],
    "Group 11" : [35,36,37,38],
    "Group 12" : [39,40],
    "Group 13" : [41,42],
    "Group 14" : [43,44,45,46],
    "Group 15" : [47,48,49,50],
    "Group 16" : [51,52,53,54],
    "Group 17" : [55,56,57,58],
    "Group 18" : [59,60,61,62,63,64],
    "Group 19" : [65,66,67,68,69,70,71,72,73,74,75,76],
    "Group 20" : [77,78,79,80,81,82,83,84,85,86,87,88],
    "Group 21" : [89,90,91,92,93,94,95,96,97,98],
    "Group 22" : [99,100],
    "Group 23" : [101,102],
    "Group 24" : [103,104,105,106],
    "Group 25" : [107,108,109,110],
    "Group 26" : [111,112,113,114],
    "Group 27" : [115,116,117,118],
    "Group 28" : [119,120],
    "Group 29" : [121,122],
    "Group 30" : [123,124,125,126],
    "Group 31" : [127,128,129,130],
    "Group 32" : [131,132,133,134],
    "Group 33" : [135,136,137,138],
    "Group 34" : [139,140,141,142,143,144],
    "Group 35" : [145,146,147,148,149,150,151,152,153,154,155,156],
    "Group 36" : [157,158,159,160,161,162,163,164,165,166,167,168],
    "Group 37" : [169,170,171,172,173,174,175,176,177,178],

};

var algsInfo = {
    1: {
        "name": "1A",
        "a": "(L R U R' U' R' F R F' L')",
        "a2": "(L R U R' U' R' F R F' L')",
    },
    2: {
        "name": "1B",
        "a": "F (R U R' U') F' f (R U R' U') f'",
        "a2": "y (r U r') U2 R U2' R' U2 (r U' r')",
    },
    3: {
        "name": "2A",
        "a": "f (R U R' U') f' U' F (R U R' U') F'",
        "a2": "",
    },
    4: {
        "name": "2B",
        "a": "f (R U R' U') f' U F (R U R' U') F'",
        "a2": "",
    },
    5: {
        "name": "2C",
        "a": "(r' U2' R U R' U r)",
        "a2": "",
    },
    6: {
        "name": "2D",
        "a": "(r U2 R' U' R U' r')",
        "a2": "",
    },
    7: {
        "name": "3A+",
        "a": "(r U R' U R U2' r')",
        "a2": "",
    },
    8: {
        "name": "3A-",
        "a": "(r' U' R U' R' U2 r)",
        "a2": "y2 l' U' L U' L' U2 l",
    },
    9: {
        "name": "3B+",
        "a": "(R U R' U') R' F (R2 U R' U') F'",
        "a2": "(R' U' R) y r U' r' U r U r'",
    },
    10: {
        "name": "3B-",
        "a": "(R U R' U) (R' F R F') (R U2' R')",
        "a2": "(R U R') y (R' F R U') (R' F' R)",
    },
    11: {
        "name": "4A",
        "a": "r' (R2 U R' U R U2 R') U M'",
        "a2": "",
    },
    12: {
        "name": "4B",
        "a": "M' (R' U' R U' R' U2 R) U' M",
        "a2": "y F (R U R' U') F' U F (R U R' U') F'",
    },
    13: {
        "name": "4C",
        "a": "(r U' r') (U' r U r') y' (R' U R)",
        "a2": "F U R U' R2' F' R U (R U' R')",
    },
    14: {
        "name": "4D",
        "a": "(R' F R) (U R' F' R) (F U' F')",
        "a2": "",
    },
    15: {
        "name": "4E+",
        "a": "(r' U' r) (R' U' R U) (r' U r)",
        "a2": "",
    },
    16: {
        "name": "4E-",
        "a": "(r U r') (R U R' U') (r U' r')",
        "a2": "",
    },
    17: {
        "name": "5+",
        "a": "(R U R' U) (R' F R F') U2' (R' F R F')",
        "a2": "",
    },
    18: {
        "name": "5-",
        "a": "y R U2' (R2' F R F') U2' M' (U R U' r')",
        "a2": "(r U R' U R U2 r') (r' U' R U' R' U2 r)",
    },
    19: {
        "name": "6A",
        "a": "M U (R U R' U') M' (R' F R F')",
        "a2": "",
    },
    20: {
        "name": "6B",
        "a": "M U (R U R' U') M2' (U R U' r')",
        "a2": "(r U R' U') M2' (U R U' R') U' M'",
    },
    21: {
        "name": "7A",
        "a": "(R U2 R') (U' R U R') (U' R U' R')",
        "a2": "y (R U R' U) (R U' R' U) (R U2' R')",
    },
    22: {
        "name": "7B",
        "a": "R U2' R2' U' R2 U' R2' U2' R",
        "a2": "",
    },
    23: {
        "name": "8A+",
        "a": "R2 D (R' U2 R) D' (R' U2 R')",
        "a2": "y2 R2' D' (R U2 R') D (R U2 R)",
    },
    24: {
        "name": "8A-",
        "a": "(r U R' U') (r' F R F')",
        "a2": "y (R U R D) (R' U' R D') R2'",
    },
    25: {
        "name": "8B+",
        "a": "y F' (r U R' U') r' F R",
        "a2": "x (R' U R) D' (R' U' R) D x'",
    },
    26: {
        "name": "8B-",
        "a": "R U2 R' U' R U' R'",
        "a2": "y' R' U' R U' R' U2 R",
    },
    27: {
        "name": "9A+",
        "a": "R U R' U R U2' R'",
        "a2": "y' R' U2' R U R' U R",
    },
    28: {
        "name": "9A-",
        "a": "(r U R' U') M (U R U' R')",
        "a2": "",
    },
    29: {
        "name": "9B+",
        "a": "y (R U R' U') (R U' R') (F' U' F) (R U R')",
        "a2": "M U (R U R' U')(R' F R F') M'",
    },
    30: {
        "name": "9B-",
        "a": "y' F U (R U2 R' U') (R U2 R' U') F'",
        "a2": "y' (F R' F) (R2 U' R' U') (R U R') F2",
    },
    31: {
        "name": "10A+",
        "a": "(R' U' F) (U R U' R') F' R",
        "a2": "",
    },
    32: {
        "name": "10A-",
        "a": "R U B' (U' R' U) (R B R')",
        "a2": "S (R U R' U') (R' F R f')",
    },
    33: {
        "name": "10B+",
        "a": "(R U R' U') (R' F R F')",
        "a2": "",
    },
    34: {
        "name": "10B-",
        "a": "(R U R2' U') (R' F R U) R U' F'",
        "a2": "",
    },
    35: {
        "name": "11A+",
        "a": "(R U2') (R2' F R F') (R U2' R')",
        "a2": "",
    },
    36: {
        "name": "11A-",
        "a": "(R' U' R U') (R' U R U) l U' R' U x",
        "a2": "y2 (R U R' F') (R U R' U') (R' F R U') (R' F R F')",
    },
    37: {
        "name": "11B+",
        "a": "F (R U' R' U') (R U R' F')",
        "a2": "",
    },
    38: {
        "name": "11B-",
        "a": "(R U R' U) (R U' R' U') (R' F R F')",
        "a2": "",
    },
    39: {
        "name": "12+",
        "a": "(L F') (L' U' L U) F U' L'",
        "a2": "F (R U R' U') F' (R' U' R U' R' U2 R)",
    },
    40: {
        "name": "12-",
        "a": "(R' F) (R U R' U') F' U R",
        "a2": "",
    },
    41: {
        "name": "13+",
        "a": "(R U R' U R U2' R') F (R U R' U') F'",
        "a2": "",
    },
    42: {
        "name": "13-",
        "a": "(R' U' R U' R' U2 R) F (R U R' U') F'",
        "a2": "y (R' F R F') (R' F R F') (R U R' U') (R U R')",
    },
    43: {
        "name": "14A+",
        "a": "y R' U' F' U F R",
        "a2": "f' (L' U' L U) f",
    },
    44: {
        "name": "14A-",
        "a": "f (R U R' U') f'",
        "a2": "y2 F (U R U' R') F'",
    },
    45: {
        "name": "14B+",
        "a": "F (R U R' U') F'",
        "a2": "",
    },
    46: {
        "name": "14B-",
        "a": "R' U' (R' F R F') U R",
        "a2": "",
    },
    47: {
        "name": "15A+",
        "a": "F' (L' U' L U) (L' U' L U) F",
        "a2": "R' U' (R' F R F') (R' F R F') U R",
    },
    48: {
        "name": "15A-",
        "a": "F (R U R' U') (R U R' U') F'",
        "a2": "",
    },
    49: {
        "name": "15B+",
        "a": "r U' r2' U r2 U r2' U' r",
        "a2": "",
    },
    50: {
        "name": "15B-",
        "a": "r' U r2 U' r2' U' r2 U r'",
        "a2": "y' (R U2 R' U' R U' R') F (R U R' U') F'",
    },
    51: {
        "name": "16A+",
        "a": "f (R U R' U') (R U R' U') f'",
        "a2": "y2 F (U R U' R') (U R U' R') F'",
    },
    52: {
        "name": "16A-",
        "a": "(R' U' R U' R' U) y' (R' U R) B",
        "a2": "(R U R' U R U') y (R U' R') F'",
    },
    53: {
        "name": "16B+",
        "a": "(r' U' R U') (R' U R U') R' U2 r",
        "a2": "y r' U2' R (U R' U' R) (U R' U r)",
    },
    54: {
        "name": "16B-",
        "a": "(r U R' U) (R U' R' U) R U2' r'",
        "a2": "y' (r U2 R' U') (R U R' U') R U' r'",
    },
    55: {
        "name": "17A+",
        "a": "y (R' F R U) (R U' R2' F') R2 U' R' (U R U R')",
        "a2": "",
    },
    56: {
        "name": "17A-",
        "a": "r' U' r (U' R' U R) (U' R' U R) r' U r",
        "a2": "",
    },
    57: {
        "name": "17B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    58: {
        "name": "17B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    59: {
        "name": "18A",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    60: {
        "name": "18B",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    61: {
        "name": "18C",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    62: {
        "name": "18D",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    63: {
        "name": "18E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    64: {
        "name": "18E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    65: {
        "name": "19A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    66: {
        "name": "19A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    67: {
        "name": "19B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    68: {
        "name": "19B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    69: {
        "name": "19C+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    70: {
        "name": "19C-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    71: {
        "name": "19D+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    72: {
        "name": "19D-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    73: {
        "name": "19E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    74: {
        "name": "19E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    75: {
        "name": "19F+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    76: {
        "name": "19F-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    77: {
        "name": "20A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    78: {
        "name": "20A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    79: {
        "name": "20B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    80: {
        "name": "20B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    81: {
        "name": "20C+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    82: {
        "name": "20C-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    83: {
        "name": "20D+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    84: {
        "name": "20D-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    85: {
        "name": "20E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    86: {
        "name": "20E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    87: {
        "name": "20F+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    88: {
        "name": "20F-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    89: {
        "name": "21A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    90: {
        "name": "21A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    91: {
        "name": "21B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    92: {
        "name": "21B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    93: {
        "name": "21C+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    94: {
        "name": "21C-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    95: {
        "name": "21D+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    96: {
        "name": "21D-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    97: {
        "name": "21E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    98: {
        "name": "21E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    99: {
        "name": "22A",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    100: {
        "name": "22B",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    101: {
        "name": "23A",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    102: {
        "name": "23B",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    103: {
        "name": "24A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    104: {
        "name": "24A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    105: {
        "name": "24B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    106: {
        "name": "24B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    107: {
        "name": "25A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    108: {
        "name": "25A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    109: {
        "name": "25B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    110: {
        "name": "25B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    111: {
        "name": "26A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    112: {
        "name": "26A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    113: {
        "name": "26B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    114: {
        "name": "26B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    115: {
        "name": "27A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    116: {
        "name": "27A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    117: {
        "name": "27B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    118: {
        "name": "27B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    119: {
        "name": "28+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    120: {
        "name": "28-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    121: {
        "name": "29+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    122: {
        "name": "29-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    123: {
        "name": "30A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    124: {
        "name": "30A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    125: {
        "name": "30B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    126: {
        "name": "30B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    127: {
        "name": "31A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    128: {
        "name": "31A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    129: {
        "name": "31B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    130: {
        "name": "31B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    131: {
        "name": "32A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    132: {
        "name": "32A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    133: {
        "name": "32B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    134: {
        "name": "32B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    135: {
        "name": "33A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    136: {
        "name": "33A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    137: {
        "name": "33B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    138: {
        "name": "33B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    139: {
        "name": "34A",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    140: {
        "name": "34B",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    141: {
        "name": "34C",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    142: {
        "name": "34D",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    143: {
        "name": "34E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    144: {
        "name": "34E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    145: {
        "name": "35A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    146: {
        "name": "35A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    147: {
        "name": "35B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    148: {
        "name": "35B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    149: {
        "name": "35C+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    150: {
        "name": "35C-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    151: {
        "name": "35D+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    152: {
        "name": "35D-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    153: {
        "name": "35E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    154: {
        "name": "35E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    155: {
        "name": "35F+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    156: {
        "name": "35F-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    157: {
        "name": "36A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    158: {
        "name": "36A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    159: {
        "name": "36B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    160: {
        "name": "36B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    161: {
        "name": "36C+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    162: {
        "name": "36C-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    163: {
        "name": "36D+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    164: {
        "name": "36D-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    165: {
        "name": "36E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    166: {
        "name": "36E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    167: {
        "name": "36F+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    168: {
        "name": "36F-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    169: {
        "name": "37A+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    170: {
        "name": "37A-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    171: {
        "name": "37B+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    172: {
        "name": "37B-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    173: {
        "name": "37C+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    174: {
        "name": "37C-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    175: {
        "name": "37D+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    176: {
        "name": "37D-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    177: {
        "name": "37E+",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
    178: {
        "name": "37E-",
        "a": "(R U R' U') M' (U R U' r')",
        "a2": "",
    },
};
