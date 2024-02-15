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
    "1": {
        "name": "1A",
        "a": [
            "(L R U R' U' R' F R F' L')"
        ],
        "s": "F' U R' U' R' U' F U' R U F' R' U R U R F"
    },
    "2": {
        "name": "1B",
        "a": [
            "(L F R' F' R U R U' R' L')"
        ],
        "s": "R' U F' U R' F R U R' U' F' U R U2' F U' R"
    },
    "3": {
        "name": "2A",
        "a": [
            "(R U R' U R U R' U2' R U' R')",
            "y2' (R' U' R U' R' U' R U2 R' U R)"
        ],
        "s": "F R' F' R U F' U' F U2 R U' R' U' R U' R'"
    },
    "4": {
        "name": "2B",
        "a": [
            "(R bR R' F R bR' R' F')",
            "y2 (F R U2 R' U' R U' R' F')"
        ],
        "s": "R' U2 R F U2 F' R' U F U2 F' U2' R"
    },
    "5": {
        "name": "2C",
        "a": [
            "(R U2' R' U' R U2' R')",
            "(R' U2 R U R' U2 R)",
            "y (R U2 R' U R U2 R')",
            "y' (R' U2' R U' R' U2' R)"
        ],
        "s": "R U F' R U F U2 R' U' R U' F' U' R' F U' R'"
    },
    "6": {
        "name": "2D",
        "a": [
            "(R' F R bR' R' F' R bR)",
            "(F R U R' U R U2' R' F')",
            "y2' (R2' DR' R U2' R' DR R U2 R)"
        ],
        "s": "R' U' R' U' F U F R F' R' U' F' U F R F' U R"
    },
    "7": {
        "name": "3A+",
        "a": [
            "(R U R' U R U2' R')",
            "y' (R' U2 R U2 R' U R)"
        ],
        "s": "R U F R' U2 F' U' F U F R F' U2' F' U R'"
    },
    "8": {
        "name": "3A-",
        "a": [
            "(R' U' R U' R' U2 R)",
            "y (R U2' R' U2' R U' R')"
        ],
        "s": "R' F' R' F U' R' F' R U R F U F' U2' F U R"
    },
    "9": {
        "name": "3B+",
        "a": [
            "(R U2 R' U' R U' R')",
            "y' (R' U' R U2' R' U2' R)"
        ],
        "s": "F' U F2 R U2 R' U' R U' R' F2' U' F"
    },
    "10": {
        "name": "3B-",
        "a": [
            "(R' U2' R U R' U R)",
            "y (R U R' U2 R U2 R')"
        ],
        "s": "R' U F R' F' R U F' U' F U' R U' R' U2 R"
    },
    "11": {
        "name": "4A",
        "a": [
            "(R U R' U R U' R' U R U2' R')",
            "y2 (R' U' R U' R' U R U' R' U2 R)",
            "y (BL R' U' R U' R' U2 R BL')"
        ],
        "s": "R F R' F' U' F U2 F' U' F U R F' R' U' F U' F' "
    },
    "12": {
        "name": "4B",
        "a": [
            "(R' U2' R U R' U' R U R' U R)",
            "y2' (R U2 R' U' R U R' U' R U' R')",
            "y' (BL R' U2' R U R' U R BL')"
        ],
        "s": "R U' F' U' F U' F' U' R U2' F U F' U R' U' F R' "
    },
    "13": {
        "name": "4C",
        "a": [
            "(R U R' U R U R' U' R U2' R')",
            "(R' U' R U' R' U' R U R' U2 R)"
        ],
        "s": "F' U2 F U F' U2 F U F U2 F' U' F U' F'"
    },
    "14": {
        "name": "4D",
        "a": [
            "(R U2' R' U2' R U2 R' U2' R U' R')",
            "y2' (R' U2 R U2 R' U2' R U2 R' U R)",
            "y2 (R' U2' R U R' U R2 U R' U R U2' R')"
        ],
        "s": "R U2 R' U' R U' R2' U' R U' R' U2 R"
    },
    "15": {
        "name": "4E+",
        "a": [
            "(R' U2 R U R' U' R U R' U2 R)",
            "y2 (R U2 R2' U' R2 U' R2' U2 R)"
        ],
        "s": "R F' U F U' F' U2' R' U2 F U F' R U' F R'"
    },
    "16": {
        "name": "4E-",
        "a": [
            "(R' U2' R2 U R2' U R2 U2' R')"
        ],
        "s": "R U2' F2' U' R2' F2 U' F2' U R2 U F2 U' R'"
    },
    "17": {
        "name": "5+",
        "a": [
            "(R U R' U2 R U2' R' U R U2' R')",
            "y2' (R' U2' R U R' U2' R U2 R' U R)"
        ],
        "s": "F' U' R U2' R' U' R U2' R' U2' F U' F' U2 F "
    },
    "18": {
        "name": "5-",
        "a": [
            "(R U2 R' U' R U2 R' U2' R U' R')",
            "y2' (R' U' R U2' R' U2 R U' R' U2 R)"
        ],
        "s": " R' U2' R F U2 F' U' F R' U R F' U' F U' F' "
    },
    "19": {
        "name": "6A",
        "a": [
            "(R U2' R' F R' F' R U' R U2' R')"
        ],
        "s": " R' U F U F' U' R U F R' U' F' U R U R U' R' "
    },
    "20": {
        "name": "6B",
        "a": [
            "(F R U' R' U2 R U R' F')"
        ],
        "s": " R' F R F U' F R F2 U' F' U F' R' F' U F2'"
    },
    "21": {
        "name": "7A",
        "a": [
            "(R U R' U' R' F R F')"
        ],
        "s": " F R U R' U' R' F R U' R' F R F' R U R' F2'"
    },
    "22": {
        "name": "7B",
        "a": [
            "(F R U R' U' F')",
            "y (R' F' U' F U R)"
        ],
        "s": " R F' R' U' R' U' R U R F R' U' R' F' U F R"
    },
    "23": {
        "name": "8A+",
        "a": [
            "(R' U' R' F R F' U R)"
        ],
        "s": " R' U R U2' F U2 R' U' R2 U R' U2' F' "
    },
    "24": {
        "name": "8A-",
        "a": [
            "(R' U2' F' U F U R)",
            "y2' (R U R bR' R' bR U' R')"
        ],
        "s": " F U' F' U2 R' U2' F U F2' U' F U2 R "
    },
    "25": {
        "name": "8B+",
        "a": [
            "(R U R2' U' R' F R U R U' F')",
            "(R U R' U' BR' R' F R F' BR)"
        ],
        "s": "F U R' U2' F' R F U F R' F' U R F' R U' R' "
    },
    "26": {
        "name": "8B-",
        "a": [
            "(F R U R' U' R U R' U R U2' R' F')",
            "(R' U' R U F R BR' R' BR F')",
            "y2 (F R2 U R' U R' U' R2 U' R2' F')"
        ],
        "s": " R' U F R' F R F' U' F' R U2 F R U R' F' "
    },
    "27": {
        "name": "9A+",
        "a": [
            "(R' F R U R' U' F' U R)"
        ],
        "s": "F U2' F2' U2' F2 U' R' F' R F' U2' F "
    },
    "28": {
        "name": "9A-",
        "a": [
            "(R U R' F' U' F U R U2' R')"
        ],
        "s": " R U R U2 F R U' R' U' R U R' F' R' U2' R' "
    },
    "29": {
        "name": "9B+",
        "a": [
            "(R' U' F' U' F U2 R)",
            "y (BL' R U R' U' R' F R F' BL')"
        ],
        "s": "R' U R' F U2' F' R U F U' R' U2 F' R U2 R "
    },
    "30": {
        "name": "9B-",
        "a": [
            "(F U R U R' U2' F')"
        ],
        "s": "F U' F R' U2 R F' U' R' U F U2' R F' U2' F'"
    },
    "31": {
        "name": "10A+",
        "a": [
            "(R U R' U2 R U' R' U2' R' F R F')"
        ],
        "s": "F U' R U R' F' U2 R U F R' U2' R F' U' R' "
    },
    "32": {
        "name": "10A-",
        "a": [
            "(R' F' U' F U2' R U R' U2 R)"
        ],
        "s": "F' U2 F2 U R' U' F' U F R F2' U2 F"
    },
    "33": {
        "name": "10B+",
        "a": [
            "(R U' R' U2' R' F R F' U2 R U R')"
        ],
        "s": "F' U2 F2 U2 R U' R' U' F' U F' U F"
    },
    "34": {
        "name": "10B-",
        "a": [
            "(R U2 R' U R' F R F' R U2 R')"
        ],
        "s": "F U R U' F' U2 R2' F R F' R U2' F R' F' "
    },
    "35": {
        "name": "11A+",
        "a": [
            "(R' U' F' U' F R2 U R2' U R2 U2' R')",
            "(R' U2' R' F R2 U R' U R U2' R' F' R)"
        ],
        "s": "F U2 R' U' R2 U' R' U R' U' R F' U' R' U2' R"
    },
    "36": {
        "name": "11A-",
        "a": [
            "(R U2 R' U R' F' U' F U R2 U2 R')",
            "y2 (L R' F R U R' U' F' L' U R)"
        ],
        "s": "R' U2' F U F2' U F U' F U F' R U F U2 F' "
    },
    "37": {
        "name": "11B+",
        "a": [
            "(R' U2' R' F R F' R U R' U R)"
        ],
        "s": "R U' F' R' F2 U R U R' U2' F' U F' R F U R'"
    },
    "38": {
        "name": "11B-",
        "a": [
            "(R' U' R' L F R F' L' U R)",
            "y2 (R U2' R' U' R' F R F' U R U2 R')"
        ],
        "s": "F' U R F R2' U' F' U' F U2 R U' R F' R' U' F "
    },
    "39": {
        "name": "12+",
        "a": [
            "(F R U' R' U2 R U R' U R U' R' F')",
            "y (R U2 R' U R U' BR U' BR' U' R')",
            "y2 (R U R' U2' R' F' U' F U R2 U R')"
        ],
        "s": " R F U2' F' U' R' F R' F' R2 F U2' F' R' "
    },
    "40": {
        "name": "12-",
        "a": [
            "(R' U2' R U' R' U F' U F U R)"
        ],
        "s": " F' R U F' U' F U' R' F U2' R U' F R' F' "
    },
    "41": {
        "name": "13+",
        "a": [
            "(R' F R U2 R' F' R F U2' F')"
        ],
        "s": "F' U' R U R' F' U2' F U' R' U' F2 R F' R' U R "
    },
    "42": {
        "name": "13-",
        "a": [
            "(F R' F' U2' F R F' R' U2 R)",
            "y2' (R' F R U2 R' F' R U' F U' F')"
        ],
        "s": "F R U R' U' F' U' F U' R' U R U F' U2 R' U R "
    },
    "43": {
        "name": "14A+",
        "a": [
            "(F R U2 R' U2' F')"
        ],
        "s": "F R' U' F' R F R U' R' U R U' R2' U F' U R "
    },
    "44": {
        "name": "14A-",
        "a": [
            "(BR' R' U2' R U2 BR)",
            "y (R' F' U2' F U2 R)",
            "y2 (F U R U2' R' U' R U R' F')"
        ],
        "s": "R' F U R F' R' F' U F U' F' U F2 U' R U' F' "
    },
    "45": {
        "name": "14B+",
        "a": [
            "(R' U2 R U2 R' F' U F R)"
        ],
        "s": " F R U2' F' R' U F R F' U' F' U F2 R' U F' "
    },
    "46": {
        "name": "14B-",
        "a": [
            "(R' F' U' F R U2' R' U2' R)"
        ],
        "s": " F U R' F R U F' R F R U' R' F' R' U' F' "
    },
    "47": {
        "name": "15A+",
        "a": [
            "(R' F R U R' F' R F U' F')"
        ],
        "s": " F' R U2' F R' U R F R' F' U' R F' U2 R' F "
    },
    "48": {
        "name": "15A-",
        "a": [
            "(F R' F' U' F R F' R' U R)",
            "y' x' (R U' R' F' R U R' U' F U)"
        ],
        "s": " F' U' F R U2' R' F' U F R' F' U' F U R "
    },
    "49": {
        "name": "15B+",
        "a": [
            "(L' F U R U R' U2' F' L)",
            "y2 (R' U2 R U R' F R' F' R U2 R)"
        ],
        "s": " R' F R2 U R' U' F' U R U R' U2 R U R' "
    },
    "50": {
        "name": "15B-",
        "a": [
            "(F R' F' U' F R F' R' U' R U R' U R)",
            "y' (R2' F R F' R U R' F' U' F U' R)",
            "y' (R U2 R' U' R U' R' F R' F' R U R U' R')"
        ],
        "s": " F R' F2' U' F U R U' F' U' F U2' F' U' F "
    },
    "51": {
        "name": "16A+",
        "a": [
            "(R' F R2 U R' U R U2' R2' F' R)"
        ],
        "s": "R' U' R U2' R' F U F' R' F R U' F' U2' R "
    },
    "52": {
        "name": "16A-",
        "a": [
            "(R' U2' R' F R F' R U' R' U2' R)",
            "y' (R bR' R2' U' R U' R' U2 R2 bR R')"
        ],
        "s": "F U F' U2 F R' U' R F R' F' U R U2 F' "
    },
    "53": {
        "name": "16B+",
        "a": [
            "(F R U2 R' U' F R' F' R U' F')"
        ],
        "s": "R U' F' U2' F R' U' F' U2' F U F R F' U2' R'"
    },
    "54": {
        "name": "16B-",
        "a": [
            "(R' U' R U' R' F U R U' R' F' U2 R)",
            "y2 (R' F' U2' F U' R U R' U2 R)"
        ],
        "s": "F' U R U2 R' F U R U2 R' U' R' F' R U2 F "
    },
    "55": {
        "name": "17A+",
        "a": [
            "(R' U2' R' F R F' U2 R)"
        ],
        "s": "R' U F R' U F R' F' R U' F' U' R F' U2' F U R "
    },
    "56": {
        "name": "17A-",
        "a": [
            "(F U R U2' R' U2 R U R' F')",
            "y' (R U2 R BR' R' BR U2' R')",
            "y' (R U2 R' U F R' F' R2 U2 R')"
        ],
        "s": "F R U' R' F' U2' F R' U F R' F' R F' U' F R F' "
    },
    "57": {
        "name": "17B+",
        "a": [
            "(BL' F R U R' U' F' BL)",
            "y (BR' R' F' U' F U R BR)",
            "y2 (R' U2' R U R' F' U' F U2 R)"
        ],
        "s": "R U F R' U2' F' U2' F R F' U2 F U2 F' R' "
    },
    "58": {
        "name": "17B-",
        "a": [
            "(L BR' R' U' R U BR L')",
            "(L F R U R' U' F' L')"
        ],
        "s": "F' U' R' F U2 R U2 R' F' R U2' R' U2' R F"
    },
    "59": {
        "name": "18A",
        "a": [
            "(R' F U R U' R2' F' R2 U R' U' R)"
        ],
        "s": "R' U F' U' R' U2 R U F R' F' U F U R U2' R  "
    },
    "60": {
        "name": "18B",
        "a": [
            "(F R' F' L F R2 U R' U' F' L')",
            "y (R' F' U' F U R2 U2 R' U R U2 R')",
            "y' (R' U2' R F R' F' U2 R U2' R U2 R')"
        ],
        "s": " R' U2' F U F2' R' F2 U' F2' U R U F R "
    },
    "61": {
        "name": "18C",
        "a": [
            "(F U R U' R' U R U' R' F')"
        ],
        "s": " R' U2' F U F U R U' F' U' F' U2' F' U2' F"
    },
    "62": {
        "name": "18D",
        "a": [
            "(R' U2' R U R' F R' F' R U R)"
        ],
        "s": "R U2 F R U R' U' F' R' U' F' U2' F R U' R' "
    },
    "63": {
        "name": "18E+",
        "a": [
            "(R' F' U2' F R U R' U R)",
            "y2 (R' U' R U' R' U F' U F R)"
        ],
        "s": " R' U R U2' R' U2' R U' R' F' U2' F U' R "
    },
    "64": {
        "name": "18E-",
        "a": [
            "(R' F' U' F U' R U R' U R)",
            "y2' (R U R' U R U' BR U' BR' R')"
        ],
        "s": " R' U F U R' U' F' R' F R F' U R U F' U' F R "
    },
    "65": {
        "name": "19A+",
        "a": [
            "(F U R U' R' U R U R' U2' F')",
            "y (BR' U2' R' U R U R' U' R U BR)"
        ],
        "s": "R U2 R' U2' R' U' F U R F' R F R' U' R F' R' "
    },
    "66": {
        "name": "19A-",
        "a": [
            "(F U2 R U' R' U' R U R' U' F')",
            "y (BR' U' R' U R U' R' U' R U2 BR)"
        ],
        "s": "F' U2' F U2 F U R' U' F' R F' R' F U F' R F "
    },
    "67": {
        "name": "19B+",
        "a": [
            "(R U2' R' F' U' F U' R U' R')"
        ],
        "s": "R F' R' U2' F U2' R' F R F' U F' U2' R F R' "
    },
    "68": {
        "name": "19B-",
        "a": [
            "(R' U2' R U R' F' U' F R U R' U R)"
        ],
        "s": "F' R F U2 R' U2 F R' F' R U' R U2 F' R' F  "
    },
    "69": {
        "name": "19C+",
        "a": [
            "y' (R' U2 R BR' R BR R' U2 R' U R)",
            "(F R U' R' U R U2' R' U2' R U R' U' F')",
            "y2 (R U R' U2 R U' R2' F R F' U R U2 R')"
        ],
        "s": " R' F' U F2 U2 F2' U' F2 U' F' U R "
    },
    "70": {
        "name": "19C-",
        "a": [
            "(R U2' R' F R' F' R U2' R U' R')"
        ],
        "s": "R' U' R U F R U2 R' F' U' R' U R F U2' F' "
    },
    "71": {
        "name": "19D+",
        "a": [
            "(F U R U R' U' R U R' U2' F')"
        ],
        "s": "R U2 R2' U' F' U F R U R U R' U' R U2' R' "
    },
    "72": {
        "name": "19D-",
        "a": [
            "(BR' U' R' U' R U R' U' R U2 BR)",
            "y2 (R U R' U R U' R' U' R' F R2 U R' U' F')"
        ],
        "s": "F' U2' F2 U R U' R' F' U' F' U' F U F' U2 F  "
    },
    "73": {
        "name": "19E+",
        "a": [
            "(F U R U' R U R' U R U2' R2' F')",
            "(R U R' U R U' R' U R U' R' U' R' F R F')"
        ],
        "s": "F U2' F' U' F R U' R' F' U' R' U F U' F' U' R "
    },
    "74": {
        "name": "19E-",
        "a": [
            "(R' U' R' F R2 U' R' U2 R U R' F' R)",
            "y' (R' F R U' R' U2' R U R2' F' R U R)"
        ],
        "s": "R' U' F' U' F R' U2' F' U2 F R F' U2' F U' R "
    },
    "75": {
        "name": "19F+",
        "a": [
            "(R U2' R' U2' R U R' U2' R' F R F')",
            "y (R U2 R2' U' R2 U' R' U2 R BR' R' BR)"
        ],
        "s": "R U2' R' F R F' U2' F' U' R' U R U2 F U' R' "
    },
    "76": {
        "name": "19F-",
        "a": [
            "(R' U2' R2 U R2' U R U2' R' F R F')"
        ],
        "s": "F' U2 F R' F' R U2 R U F U' F' U2' R' U F "
    },
    "77": {
        "name": "20A+",
        "a": [
            "(BR' R' U2' R U2 R' U' R U BR)",
            "y (R' F' U' F R2 U2' R2' U2' R2 U' R')",
            "y' (R' U2' F R' F' R F R' F' R U2 R)"
        ],
        "s": "F' U R' U2' F' U F U R U' F U2' R U2' R'"
    },
    "78": {
        "name": "20A-",
        "a": [
            "(F R U2 R' U2' R U R' U' F')"
        ],
        "s": "R U' F U2 R U' R' U' F' U R' U2 F' U2 F "
    },
    "79": {
        "name": "20B+",
        "a": [
            "(R' F' U' F U R U2' R' U2' R U R' U R)",
            "y' (F R U R' U' F' R U R' U2 R U2 R')",
            "y (F R U R' U R U' R' F R' F' R U' F')"
        ],
        "s": "F U2 F R' F' U2' R F' U R' U' F' U2 F R "
    },
    "80": {
        "name": "20B-",
        "a": [
            "(R' F' U' F U R2 U2 R' U' R U' R')"
        ],
        "s": "R' U F U2 F' U' R U F R' F R F' R U' R' U' F' "
    },
    "81": {
        "name": "20C+",
        "a": [
            "(BR' U2' R' U R U' R' U R U BR)",
            "y (R' U2' R F R' F' R U R' U R2 U2' R')"
        ],
        "s": "R' F U F' R F U2 F' R' U F U F' U' F' U F R  "
    },
    "82": {
        "name": "20C-",
        "a": [
            "(F U2 R U' R' U R U' R' U' F')"
        ],
        "s": "F R' U' R F' R' U2' R F U' R' U' R U R U' R' F' "
    },
    "83": {
        "name": "20D+",
        "a": [
            "(R' F R' F' R2 U' R' F' U' F R)",
            "y2 (R U2' R' F R' F' R2 U' R' U' R U' R')"
        ],
        "s": "R' U2 R U' R' F' U F U' R U2 R' F' U' F U R  "
    },
    "84": {
        "name": "20D-",
        "a": [
            "(F R U' R' U R U2' R' U' R U' R' F')",
            "y' (R' U2' R F U R' U R U' R U' R' F')"
        ],
        "s": "F U2' F' U F R U' R' U F' U2' F R U R' U' F' "
    },
    "85": {
        "name": "20E+",
        "a": [
            "(F R U R' U' R U2 R' U' R U' R' F')"
        ],
        "s": " R' F' R U' F' U2' F2 U F' U2' R U' R' U' F "
    },
    "86": {
        "name": "20E-",
        "a": [
            "(R' U2' R F U R' U R2 U2' R' F')"
        ],
        "s": " F R F' U R U2 R2' U' R U2 F' U F U R' "
    },
    "87": {
        "name": "20F+",
        "a": [
            "(R U2' R' U' R U' R' U' R' F R F')",
            "y2 (R U R' U R U2' R2' U' F' U F R)"
        ],
        "s": " F R U F R U R' U' F' U2' R' U' R U R' F'  "
    },
    "88": {
        "name": "20F-",
        "a": [
            "(R' U' R F U' R' U2 R U2 R U' R' F')"
        ],
        "s": " F' U' F2 R U2 R2' F' R2 U' R' F U' F' "
    },
    "89": {
        "name": "21A+",
        "a": [
            "(F U2 R U2' R' U R U' R' F')"
        ],
        "s": "U' F U2 F' U' F U' F' U' R' U' F R' F' R U R "
    },
    "90": {
        "name": "21A-",
        "a": [
            "(BR' U2' R' U2 R U' R' U R BR)"
        ],
        "s": " F' U2 F2 U2 F' R U' R' U F U2' R' F' R "
    },
    "91": {
        "name": "21B+",
        "a": [
            "(R' U2' F' U F U' R U R' U R)"
        ],
        "s": "F U2' F2' U' F U' F U' F' U2 R U' R' F' U F  "
    },
    "92": {
        "name": "21B-",
        "a": [
            "(R' F' U' F R U2' R' U2 R U' R' U2 R)"
        ],
        "s": "R' U2 R2 U R' U R' U R U2' F' U F R U' R'"
    },
    "93": {
        "name": "21C+",
        "a": [
            "(R' F' U2' F2 R U R' U' F' U2 R)",
            "(F U R U' R' U2 R U2' R' U R U' R' F')",
            "y2 (R U2' R' F R' F' U2' R2 U' R2' U2' R)"
        ],
        "s": "F R U2 R' F' U' F U2 F' R F R' U2 R F' R' "
    },
    "94": {
        "name": "21C-",
        "a": [
            "(BR' U' R' U R U2' R' U2 R U' R' U R BR)",
            "y (F R U2 R2' F' U' F U R U2' F')"
        ],
        "s": "R' F' U2' F R U R' U2' R F' R' F U2' F' R F  "
    },
    "95": {
        "name": "21D+",
        "a": [
            "(R' F' U' F U2' R U2 R' U R)",
            "y (F U2 R U2' R' U2 R U2' R' F')"
        ],
        "s": " F' U' F U2' F' U2 R' F U' R' F' R U R F "
    },
    "96": {
        "name": "21D-",
        "a": [
            "(BR' U2' R' U2 R U2' R' U2 R BR)"
        ],
        "s": " F' R U2' F U F' U R' F U F U R U' R' F' "
    },
    "97": {
        "name": "21E+",
        "a": [
            "(BR' R' U' R U R' U2' R U2 BR)"
        ],
        "s": " F U2 R' F2 R F' R U' R' F R' F' R F' U' F'  "
    },
    "98": {
        "name": "21E-",
        "a": [
            "(F R U R' U' R U2 R' U2' F')"
        ],
        "s": "R' U2' F R2' F' R F' U F R' F R F' R U R  "
    },
    "99": {
        "name": "22A",
        "a": [
            "(R U2 R2' F R F' R U2' R')"
        ],
        "s": "R' U' R U' R2' F R U F' U R F R U2' R' F'  "
    },
    "100": {
        "name": "22B",
        "a": [
            "(F R' F' R U R U' R')"
        ],
        "s": "F R F U F' R' F' U R U' F2 U' F2' U2 R' "
    },
    "101": {
        "name": "23A",
        "a": [
            "(R U2 R' U R U' R' U2' R' F R F')"
        ],
        "s": "R U2 R' U2' R U' R' F R' F' R2 U R' F' U' F  "
    },
    "102": {
        "name": "23B",
        "a": [
            "(R U2' R' U' F R' F' R U' R U' R')"
        ],
        "s": "R' U' F' U F R U R F2 U R' U R U2' F2' R' "
    },
    "103": {
        "name": "24A+",
        "a": [
            "(F U R U' R' F')"
        ],
        "s": "F' R F U F' U' F2 U F R' F' U' F' R U' F' R' F "
    },
    "104": {
        "name": "24A-",
        "a": [
            "(R' U' F' U F R)",
            "y' (BR' U' R' U R BR)",
            "y (R' U' F R' F' R U R)"
        ],
        "s": "R' F2' U R U' F U' F' U2 R' U2' F2 U R "
    },
    "105": {
        "name": "24B+",
        "a": [
            "(R U BR' U' R' U R BR R')",
            "y (F U R' U' F' U F R F')"
        ],
        "s": "R' U' R U2' R' F U R' U' F' U R U2 R "
    },
    "106": {
        "name": "24B-",
        "a": [
            "(R' U' F U R U' R' F' R)"
        ],
        "s": "U' F U R' F R F' R' U' R F' R' U' R U R' U R "
    },
    "107": {
        "name": "25A+",
        "a": [
            "(F R U R2' U' F' U F R F')"
        ],
        "s": "R' U F' U R' U2' F R U R' F' U R U' F U2' R  "
    },
    "108": {
        "name": "25A-",
        "a": [
            "(R U R2' F' U' F U R2 U2' R')",
            "y (R' U' L F R' F' R L' U R)",
            "y (R' F' U' F2 U R U' R' F' R)"
        ],
        "s": " F U R U' F' U R U2 R' U F' U F U R' U' "
    },
    "109": {
        "name": "25B+",
        "a": [
            "(R' U2 R U2 R' F R' F' R U R)"
        ],
        "s": "R' U' F' U' R' U F R' F' R F' U' F R U2 F R "
    },
    "110": {
        "name": "25B-",
        "a": [
            "(F R' F' R U2 R U R' U' R U2' R')",
            "y2' (F R U2 R' F' U' F R U' R' F')"
        ],
        "s": "R' U2' F' U F U' F' U F U' R U' R' U2' R  "
    },
    "111": {
        "name": "26A+",
        "a": [
            "(R U R' U R' F R F' U R U2 R')"
        ],
        "s": "U' F R' F' U' F U2' R F' R' F U2 F' U R "
    },
    "112": {
        "name": "26A-",
        "a": [
            "(F R' U2' R F R' F' U2 R F')"
        ],
        "s": "F R' F R F' U R' U2' R U R' U F' U' F U R F'"
    },
    "113": {
        "name": "26B+",
        "a": [
            "(F U R U' BR R' F' R BR' R')",
            "(F U R U2' R' U' R U2 R' U' F')"
        ],
        "s": " R' U' F' R' U' R U' R' U R F R' U F R F' U R  "
    },
    "114": {
        "name": "26B-",
        "a": [
            "(BR' U' R' U F' R BR R' F R)",
            "(BR' U' R' U2 R U R' U2' R U BR)",
            "y (R' U2' R2 U R' U' R' U2 F R F')"
        ],
        "s": " F U R F U F' U F U' F' R' F U' R' F' R U' F'"
    },
    "115": {
        "name": "27A+",
        "a": [
            "(BL' F R' F' R U R U' R' BL)",
            "(F R' F R2 U' R' U' R U R' F2')",
            "y2' (R U2 R' U F' U' F U R U2 R')"
        ],
        "s": "F U R' U' F' U F U R U F' R' U F U2 F' R "
    },
    "116": {
        "name": "27A-",
        "a": [
            "(L BR' R BR R' U' R' U R L')",
            "y2 (R2' U' R F R' U R2 U' R' F' R)"
        ],
        "s": "R' U' F U R U' R' U' F' U' R F U' R' U2' R F' "
    },
    "117": {
        "name": "27B+",
        "a": [
            "(F R' F' R U2' R U' R' U R U2 R')"
        ],
        "s": "F R' F' R U F' U' F U R' U' R U' R' U2 F R F' "
    },
    "118": {
        "name": "27B-",
        "a": [
            "(R' F R F' R' F R F' R U R' U' R U R')",
            "(F R' F' U2 R U R U' R2' U2' R)"
        ],
        "s": "F' U2 F U2' F' R' U R U' F2 U R' U' F' R "
    },
    "119": {
        "name": "28+",
        "a": [
            "x' (DR R2 U' R' U R' DR')"
        ],
        "s": "F R U R' F' U' R' U F R' F R F' U' F' R "
    },
    "120": {
        "name": "28-",
        "a": [
            "(BR' R2' F R F' R BR)",
            "y' x' (L' U2' R U R' U L)"
        ],
        "s": "R U' R' U' F' U' F' U' F U F U2 R' F' R U F "
    },
    "121": {
        "name": "29+",
        "a": [
            "(F U2 R U' R' U R U2' R' F')"
        ],
        "s": "F U R U R' U2' F' U R U2 R' U' R U' R' "
    },
    "122": {
        "name": "29-",
        "a": [
            "(BR' U2' R' U R U' R' U2 R BR)",
            "(R U2' R' U' R U R' F' U' F R U2' R')"
        ],
        "s": "R' U' F' U' F U2 R U' F' U2' F U F' U F "
    },
    "123": {
        "name": "30A+",
        "a": [
            "(F U2 R U2' R' F')"
        ],
        "s": "R' F R U F' U2' F' U2 F R' U2' F U F' U R "
    },
    "124": {
        "name": "30A-",
        "a": [
            "(BR' U2' R' U2 R BR)",
            "y (R' U2' F' U2 F R)"
        ],
        "s": "F' U' F R F U R' U' R F' R' U2 F R' F' R "
    },
    "125": {
        "name": "30B+",
        "a": [
            "(BR' L R' F R' F' R2 L' BR)"
        ],
        "s": "F U R F U R' U R2 U' R' U' F' U2 R' U2 F' "
    },
    "126": {
        "name": "30B-",
        "a": [
            "(R U' R' U R U' R' U' F R' F' R2 U R')",
            "y2 (BL' F R BR' R BR R2' F' BL)"
        ],
        "s": "R U2 F R' F' U2' R' F R2 U R U' R2' F' "
    },
    "127": {
        "name": "31A+",
        "a": [
            "(F R' F' R U2' R U2 R')"
        ],
        "s": " F' U' R F2 U R U R' U2' F2' R' U F "
    },
    "128": {
        "name": "31A-",
        "a": [
            "(BR' R' F R' F' R2 BR)",
            "y (R U2' R' U2 R' F R F')"
        ],
        "s": "F U F R' F2' R U' R' U F U' F' U' R2 U2 R' "
    },
    "129": {
        "name": "31B+",
        "a": [
            "(F U R U R' U' R U' R' F')",
            "(BL' F U R U' R' F' BL)"
        ],
        "s": "F R U R2' F R F2' R F U2' R' U R U F' R' "
    },
    "130": {
        "name": "31B-",
        "a": [
            "(BR' U' R' U' R U R' U R BR)",
            "(L BR' U' R' U R BR L')"
        ],
        "s": "R' F' U' F2 R' F' R2 F' R' U2 F U' F' U' R F "
    },
    "131": {
        "name": "32A+",
        "a": [
            "(R U R' U' R' F R2 U R' U' F')"
        ],
        "s": "R U2 R U R' U' R' F U F R F' U' F' U2' R' "
    },
    "132": {
        "name": "32A-",
        "a": [
            "(R' U' R U R BR' R2' U' R U BR)",
            "y' (R U R' U F' U F U' R U2' R')"
        ],
        "s": "F' U2' F' U' F U F R' U' R' F' R U R U2 F "
    },
    "133": {
        "name": "32B+",
        "a": [
            "(F U F' R' F R U' R' F' R) ",
            "y' (R U R' U R' F R F' R U2' R')"
        ],
        "s": "R' U2' F U R' U' R' F' R2 F' R' U R U F R  "
    },
    "134": {
        "name": "32B-",
        "a": [
            "(R U2' R2' F R F' R U2 R')"
        ],
        "s": "F U2 R' U' F U F R F2' R F U' F' U' R' F' "
    },
    "135": {
        "name": "33A+",
        "a": [
            "(F U R U' R' F' R' U2' R U R' U R)"
        ],
        "s": "R F' U F2 U R' F R' F' R U' R F2' U' F R' "
    },
    "136": {
        "name": "33A-",
        "a": [
            "(R' U' R U' R' U F' U' F R U R' U R)"
        ],
        "s": "F' R U' R2' U' F R' F R F' U F' R2 U R' F  "
    },
    "137": {
        "name": "33B+",
        "a": [
            "(F U R U R' U' R U R' U' R U' R' F')"
        ],
        "s": "F U2 R' U2' R F' R' U F' U' F U F' U F R  "
    },
    "138": {
        "name": "33B-",
        "a": [
            "(BR' U' R' U' R U R' U' R U R' U R BR)"
        ],
        "s": "R' U2' F U2 F' R F U' R U R' U' R U' R' F'  "
    },
    "139": {
        "name": "34A",
        "a": [
            "(F R' F' R U R U R' U R U' R' U R U2 R')",
            "(F R2 U R' U R' U' R U R' U' R2 U' R2' F)",
            "(L' U2 R U2' R2' L F R F' R U2 R')"
        ],
        "s": "F U R' U' F' R U2' R' U2' R2 U R' U' R U' R' "
    },
    "140": {
        "name": "34B",
        "a": [
            "(F R' F' R U2' R U' R' U' R U' R')",
            "y2 (R U2 R' F' U2 F U' R U2 R')",
            "(R' U F' U' F R U R' U R U R' U R)"
        ],
        "s": "R U' R' U2 F U F2' U F U F U2 F' R U R' "
    },
    "141": {
        "name": "34C",
        "a": [
            "(R U R' U R' F R F' U R U2' R' U R U2' R')",
            "(R' U2' R U F R' U R2 U R' U2' F')"
        ],
        "s": "R' U' R U' R' F R' F' R F U2 R U2' R' F' R  "
    },
    "142": {
        "name": "34D",
        "a": [
            "(F R' F' R U R U R' U R U2 R')"
        ],
        "s": "R' U R' F R' U R2' U' R2' F' R U' F R2 F' R' "
    },
    "143": {
        "name": "34E+",
        "a": [
            "(F R' F' R U2 R' U' R2 U' R2' U2 R)"
        ],
        "s": "F U F' U F U2' F' R' F' R' U' R F R' U R2"
    },
    "144": {
        "name": "34E-",
        "a": [
            "(F R' F' R U R U' R2' U2' R U R' U R)",
            "y' (BR' R BR R' U2' R U R2' U R2 U2' R')"
        ],
        "s": "R' U' R U' R' U2 R F R F U F' R' F U' F2'"
    },
    "145": {
        "name": "35A+",
        "a": [
            "x' (DR R U' R U R' U' R U R2' DR')"
        ],
        "s": "R' U' F' U2 R' U' F' U' F R U F R' U R2 "
    },
    "146": {
        "name": "35A-",
        "a": [
            "(F R' F' R U R U R' U' R U' R')"
        ],
        "s": "F U R U2' F U R U R' F' U' R' F U' F2'  "
    },
    "147": {
        "name": "35B+",
        "a": [
            "(R' F R F' U' F R' F' R2 U' R')"
        ],
        "s": "F' U2' F U R U R' U' R U' R' U2 F' U F  "
    },
    "148": {
        "name": "35B-",
        "a": [
            "(R U2' R2' F' U' F R2 U2' R2' U2' R)",
            "x' (DR R2 U' R' U R U' R' U R' DR')",
            "y' (R' U F R' F' R2 U R2' F R F' R)"
        ],
        "s": "R' U2' R U R2' F R U R U' R' F2' U' F U R  "
    },
    "149": {
        "name": "35C+",
        "a": [
            "(R' F R2 BR' R2' F' R2 BR R')"
        ],
        "s": "R' F' U' F U' R F R U R' U' F' R' U2 R "
    },
    "150": {
        "name": "35C-",
        "a": [
            "(R BR' R2' F R2 BR R2' F' R)"
        ],
        "s": "F R U R' U F' R' F' U' F U R F U2' F'  "
    },
    "151": {
        "name": "35D+",
        "a": [
            "(F R U R' U' R U R' U' F')"
        ],
        "s": "R U R' U R' F R2 F' U' R U' R' U F R' F'  "
    },
    "152": {
        "name": "35D-",
        "a": [
            "(BR' R' U' R U R' U' R U BR)",
            "y (R' F' U' F U F' U' F U R)"
        ],
        "s": "F U R U' R' U F R U R' U' F' U R U2' R' F' "
    },
    "153": {
        "name": "35E+",
        "a": [
            "(R' U' R' F R F' R' F R F' U R)",
            "y2' (L BR' R' U' R U R' U' R U BR L')"
        ],
        "s": "F' U' F R U R' F' U F R' F' U' F U F' U' F U R "
    },
    "154": {
        "name": "35E-",
        "a": [
            "(BL' F R U R' U' R U R' U' F' BL)",
            "(F R' F' U2' R U R' U R2 U2' R')"
        ],
        "s": "R U R' F' U' F R U' R' F R U R' U' R U R' U' F'  "
    },
    "155": {
        "name": "35F+",
        "a": [
            "(F' U' F2 R' F' R U' R' F R F')",
            "y (R' U2' F U R U2' R' U2' R U R' F' R)"
        ],
        "s": "F R U2 F' U F U' R' U2' R F' U2 F R' F' "
    },
    "156": {
        "name": "35F-",
        "a": [
            "(R U R2' F R F' U F R' F' R)"
        ],
        "s": "R' F' U2' R U' R' U F U2 F' R U2' R' F R "
    },
    "157": {
        "name": "36A+",
        "a": [
            "(F U2' F' U' R' F R U2' R' F' R)"
        ],
        "s": "R' F U2 R' F' R F U2' F' U2' R U' R' U2' R "
    },
    "158": {
        "name": "36A-",
        "a": [
            "(R U R' U2 R' F R F' R U2 R')"
        ],
        "s": "F R' U2' F R F' R' U2 R U2 F' U F U2 F' "
    },
    "159": {
        "name": "36B+",
        "a": [
            "(F R' F' U' F U R2 U R' U' R U' R' F')",
            "y' (F U2 R U2 R' U' R U2 R' U' F')"
        ],
        "s": "R2' U2 R U2 F' R' F' U F R U F U R "
    },
    "160": {
        "name": "36B-",
        "a": [
            "(BR' U2' R' U2' R U R' U2' R U BR)",
            "y2' (R U R' U R U2' R2' F' U' F U R)"
        ],
        "s": "F2 U2' F' U2' R F R U' R' F' U' R' U' F' "
    },
    "161": {
        "name": "36C+",
        "a": [
            "(R' U' R U2' R' U F' U F U R)"
        ],
        "s": "F U F U F' R' F R U' F' U' R U' R' U' R U R' F' "
    },
    "162": {
        "name": "36C-",
        "a": [
            "(R U R' U2 R U' BR U' BR' U' R')",
            "(R U R' U2 R U' y R U' R' U' F')"
        ],
        "s": " F U2 F' U F U2' R U' R' U R U' R' F' "
    },
    "163": {
        "name": "36D+",
        "a": [
            "(R U2' R' U' F R' F' R2 U2' R')"
        ],
        "s": "F U2 R U' F R' U R U' F' R2' U' F' U F R F' "
    },
    "164": {
        "name": "36D-",
        "a": [
            "(R' U2 R U2 R2' F R F' U R)"
        ],
        "s": "R' U2' F' U R' F U' F' U R F2 U R U' R' F' R  "
    },
    "165": {
        "name": "36E+",
        "a": [
            "(L F R U R' U' R U R' U' F' L')",
            "y' (R U2 R' U R U' R2' F R F' R U2' R')"
        ],
        "s": " F R' F' U2' F R U R U' R' F' R' F' U F U R "
    },
    "166": {
        "name": "36E-",
        "a": [
            "(BL' BR' R' U' R U R' U' R U BR BL)",
            "y2 (R U2' R' U F' U' F U2 R' F R F')"
        ],
        "s": " R' F R U2 R' F' U' F' U F R F R U' R' U' F' "
    },
    "167": {
        "name": "36F+",
        "a": [
            "(R U2' R2' U2' R U' R' U2' F R F')",
            "y' (F R U R' U R U2 R' U2' R U R' F')",
            "y2' (F U R U' R' F' R U2 R' U R U2 R')",
            "y2' (F R2 U R' U R' U' R U R U2' R2' F')"
        ],
        "s": " R' F R U2 F R' F' R U2' F' U2' R U' R'  "
    },
    "168": {
        "name": "36F-",
        "a": [
            "(F' R U2' R2' F R F' R U2 R' F)"
        ],
        "s": " F R' F' U2' R' F R F' U2 R U2 F' U F "
    },
    "169": {
        "name": "37A+",
        "a": [
            "(R' U2' F R' F' R2 U R' U R)"
        ],
        "s": "F' U2' F R U2' R' U' F R' U' F' U R U' F U F' "
    },
    "170": {
        "name": "37A-",
        "a": [
            "(R U2' R2' F R F' U2' R U' R')",
            "(R U2 BR' R BR R2' U' R U' R')",
            "y2 (R U2' R2' F' U' F U R U2' R U' R')"
        ],
        "s": "R U2 R' F' U2 F U R' F U R U' F' U R' U' R "
    },
    "171": {
        "name": "37B+",
        "a": [
            "(F R' F' R U2 R U' R' U R U2' R')"
        ],
        "s": "R' F R F' R U2 R' U' F' U2' F U' F' U2 F"
    },
    "172": {
        "name": "37B-",
        "a": [
            "(R U2 R' U' R U R' U2' R' F R F')",
            "y (R U2' R' F' U' F U2' R' F R F')"
        ],
        "s": "F R' F' R F' U2' F U R U2 R' U R U2' R' "
    },
    "173": {
        "name": "37C+",
        "a": [
            "(R U R' U2 F R' F' R2 U2 R')",
            "(R U R' U R2 BR' R' BR U2' R')",
            "y2 (BR' R' U2' R U2 R' U2' R U2 BR)"
        ],
        "s": "R U2' R' U' R U2' R2' F R F' U2 F' U2' F "
    },
    "174": {
        "name": "37C-",
        "a": [
            "(R' U' R U' R2' F R F' U2 R)",
            "y2' (F R U2 R' U2' R U2 R' U2' F')"
        ],
        "s": "F' U2 F U F' U2 F2 R' F' R U2' R U2 R' "
    },
    "175": {
        "name": "37D+",
        "a": [
            "(F R' F' U' R U2' R U2 R2' U R)"
        ],
        "s": "F R U' R' U' R' F' R U2 R U2 F U' F' U2 R'"
    },
    "176": {
        "name": "37D-",
        "a": [
            "(R U2 R' U' R U2 R' F' U' F R U2' R')"
        ],
        "s": "R' F' U F U F R F' U2' F' U2' R' U R U2' F "
    },
    "177": {
        "name": "37E+",
        "a": [
            "(F R' F' R U2' R U2' R' U R U2' R')"
        ],
        "s": "F R' F' R U' F' U2' F U' R U2 R' U2' R U' R'"
    },
    "178": {
        "name": "37E-",
        "a": [
            "(R' U' R U' R' U F' U' F U2 R)",
            "(R U2' R' U F' U' F U2' R U' R')-"
        ],
        "s": "R' F R F' U R U2 R' U F' U2' F U2 F' U F "
    }
}


