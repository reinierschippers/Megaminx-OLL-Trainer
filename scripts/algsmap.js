var scramblesMap = {
    "1": [
        "F' U R' U' R' U' F U' R U F' R' U R U R F "
    ],
    "2": [
        "R' U F' U R' F R U R' U' F' U R U2' F U' R"
    ],
    "3": [
        "F R' F' R U F' U' F U2 R U' R' U' R U' R'"
    ],
    "4": [
        "R' U2 R F U2 F' R' U F U2 F' U2' R"
    ],
    "5": [
        "R U F' R U F U2 R' U' R U' F' U' R' F U' R'"
    ],
    "6": [
        "R' U' R' U' F U F R F' R' U' F' U F R F' U R"
    ],
    "7": [
        " R U F R' U2 F' U' F U F R F' U2' F' U R'"
    ],
    "8": [
        "R' F' R' F U' R' F' R U R F U F' U2' F U R"
    ],
    "9": [
        " F' U F2 R U2 R' U' R U' R' F2' U' F"
    ],
    "10": [
        " R' U F R' F' R U F' U' F U' R U' R' U2 R"
    ],
    "11": [
        "R F R' F' U' F U2 F' U' F U R F' R' U' F U' F' "
    ],
    "12": [
        "R U' F' U' F U' F' U' R U2' F U F' U R' U' F R' "
    ],
    "13": [
        "F' U2 F U F' U2 F U F U2 F' U' F U' F'"
    ],
    "14": [
        "R U2 R' U' R U' R2' U' R U' R' U2 R"
    ],
    "15": [
        "R F' U F U' F' U2' R' U2 F U F' R U' F R'"
    ],
    "16": [
        "R U2' F2' U' R2' F2 U' F2' U R2 U F2 U' R'"
    ],
    "17": [
        "F' U' R U2' R' U' R U2' R' U2' F U' F' U2 F "
    ],
    "18": [
        " R' U2' R F U2 F' U' F R' U R F' U' F U' F' "
    ],
    "19": [
        " R' U F U F' U' R U F R' U' F' U R U R U' R' "
    ],
    "20": [
        " R' F R F U' F R F2 U' F' U F' R' F' U F2'"
    ],
    "21": [
        " F R U R' U' R' F R U' R' F R F' R U R' F2'"
    ],
    "22": [
        " R F' R' U' R' U' R U R F R' U' R' F' U F R"
    ],
    "23": [
        " R' U R U2' F U2 R' U' R2 U R' U2' F' "
    ],
    "24": [
        " F U' F' U2 R' U2' F U F2' U' F U2 R "
    ],
    "25": [
        "F U R' U2' F' R F U F R' F' U R F' R U' R' "
    ],
    "26": [
        " R' U F R' F R F' U' F' R U2 F R U R' F' "
    ],
    "27": [
        "F U2' F2' U2' F2 U' R' F' R F' U2' F "
    ],
    "28": [
        " R U R U2 F R U' R' U' R U R' F' R' U2' R' "
    ],
    "29": [
        "R' U R' F U2' F' R U F U' R' U2 F' R U2 R "
    ],
    "30": [
        "F U' F R' U2 R F' U' R' U F U2' R F' U2' F'"
    ],
    "31": [
        " F U' R U R' F' U2 R U F R' U2' R F' U' R' "
    ],
    "32": [
        "F' U2 F2 U R' U' F' U F R F2' U2 F"
    ],
    "33": [
        " F' U2 F2 U2 R U' R' U' F' U F' U F"
    ],
    "34": [
        " F U R U' F' U2 R2' F R F' R U2' F R' F' "
    ],
    "35": [
        "F U2 R' U' R2 U' R' U R' U' R F' U' R' U2' R"
    ],
    "36": [
        "R' U2' F U F2' U F U' F U F' R U F U2 F' "
    ],
    "37": [
        "R U' F' R' F2 U R U R' U2' F' U F' R F U R'"
    ],
    "38": [
        "F' U R F R2' U' F' U' F U2 R U' R F' R' U' F "
    ],
    "39": [
        " R F U2' F' U' R' F R' F' R2 F U2' F' R' "
    ],
    "40": [
        " F' R U F' U' F U' R' F U2' R U' F R' F' "
    ],
    "41": [
        "F' U' R U R' F' U2' F U' R' U' F2 R F' R' U R "
    ],
    "42": [
        "F R U R' U' F' U' F U' R' U R U F' U2 R' U R "
    ],
    "43": [
        "F R' U' F' R F R U' R' U R U' R2' U F' U R "
    ],
    "44": [
        "R' F U R F' R' F' U F U' F' U F2 U' R U' F' "
    ],
    "45": [
        " F R U2' F' R' U F R F' U' F' U F2 R' U F' "
    ],
    "46": [
        " F U R' F R U F' R F R U' R' F' R' U' F' "
    ],
    "47": [
        " F' R U2' F R' U R F R' F' U' R F' U2 R' F "
    ],
    "48": [
        " F' U' F R U2' R' F' U F R' F' U' F U R "
    ],
    "49": [
        " R' F R2 U R' U' F' U R U R' U2 R U R' "
    ],
    "50": [
        " F R' F2' U' F U R U' F' U' F U2' F' U' F "
    ],
    "51": [
        "R' U' R U2' R' F U F' R' F R U' F' U2' R "
    ],
    "52": [
        "F U F' U2 F R' U' R F R' F' U R U2 F' "
    ],
    "53": [
        "R U' F' U2' F R' U' F' U2' F U F R F' U2' R'"
    ],
    "54": [
        "F' U R U2 R' F U R U2 R' U' R' F' R U2 F "
    ],
    "55": [
        "R' U F R' U F R' F' R U' F' U' R F' U2' F U R "
    ],
    "56": [
        "F R U' R' F' U2' F R' U F R' F' R F' U' F R F' "
    ],
    "57": [
        "R U F R' U2' F' U2' F R F' U2 F U2 F' R' "
    ],
    "58": [
        "F' U' R' F U2 R U2 R' F' R U2' R' U2' R F"
    ],
    "59": [
        "R' U F' U' R' U2 R U F R' F' U F U R U2' R  "
    ],
    "60": [
        " R' U2' F U F2' R' F2 U' F2' U R U F R "
    ],
    "61": [
        " R' U2' F U F U R U' F' U' F' U2' F' U2' F"
    ],
    "62": [
        "R U2 F R U R' U' F' R' U' F' U2' F R U' R' "
    ],
    "63": [
        " R' U R U2' R' U2' R U' R' F' U2' F U' R "
    ],
    "64": [
        " R' U F U R' U' F' R' F R F' U R U F' U' F R "
    ],
    "65": [
        "R U2 R' U2' R' U' F U R F' R F R' U' R F' R' "
    ],
    "66": [
        "F' U2' F U2 F U R' U' F' R F' R' F U F' R F "
    ],
    "67": [
        "R F' R' U2' F U2' R' F R F' U F' U2' R F R' "
    ],
    "68": [
        "F' R F U2 R' U2 F R' F' R U' R U2 F' R' F  "
    ],
    "69": [
        " R' F' U F2 U2 F2' U' F2 U' F' U R "
    ],
    "70": [
        "R' U' R U F R U2 R' F' U' R' U R F U2' F' "
    ],
    "71": [
        "R U2 R2' U' F' U F R U R U R' U' R U2' R' "
    ],
    "72": [
        "F' U2' F2 U R U' R' F' U' F' U' F U F' U2 F  "
    ],
    "73": [
        "F U2' F' U' F R U' R' F' U' R' U F U' F' U' R "
    ],
    "74": [
        "R' U' F' U' F R' U2' F' U2 F R F' U2' F U' R "
    ],
    "75": [
        "R U2' R' F R F' U2' F' U' R' U R U2 F U' R' "
    ],
    "76": [
        "F' U2 F R' F' R U2 R U F U' F' U2' R' U F "
    ],
    "77": [
        "F' U R' U2' F' U F U R U' F U2' R U2' R'"
    ],
    "78": [
        "R U' F U2 R U' R' U' F' U R' U2 F' U2 F "
    ],
    "79": [
        "F U2 F R' F' U2' R F' U R' U' F' U2 F R "
    ],
    "80": [
        "R' U F U2 F' U' R U F R' F R F' R U' R' U' F' "
    ],
    "81": [
        "R' F U F' R F U2 F' R' U F U F' U' F' U F R  "
    ],
    "82": [
        "F R' U' R F' R' U2' R F U' R' U' R U R U' R' F' "
    ],
    "83": [
        "R' U2 R U' R' F' U F U' R U2 R' F' U' F U R  "
    ],
    "84": [
        "F U2' F' U F R U' R' U F' U2' F R U R' U' F' "
    ],
    "85": [
        " R' F' R U' F' U2' F2 U F' U2' R U' R' U' F "
    ],
    "86": [
        " F R F' U R U2 R2' U' R U2 F' U F U R' "
    ],
    "87": [
        " F R U F R U R' U' F' U2' R' U' R U R' F'  "
    ],
    "88": [
        " F' U' F2 R U2 R2' F' R2 U' R' F U' F' "
    ],
    "89": [
        "U' F U2 F' U' F U' F' U' R' U' F R' F' R U R "
    ],
    "90": [
        " F' U2 F2 U2 F' R U' R' U F U2' R' F' R "
    ],
    "91": [
        "F U2' F2' U' F U' F U' F' U2 R U' R' F' U F  "
    ],
    "92": [
        "R' U2 R2 U R' U R' U R U2' F' U F R U' R'"
    ],
    "93": [
        "F R U2 R' F' U' F U2 F' R F R' U2 R F' R' "
    ],
    "94": [
        "R' F' U2' F R U R' U2' R F' R' F U2' F' R F  "
    ],
    "95": [
        " F' U' F U2' F' U2 R' F U' R' F' R U R F "
    ],
    "96": [
        " F' R U2' F U F' U R' F U F U R U' R' F' "
    ],
    "97": [
        " F U2 R' F2 R F' R U' R' F R' F' R F' U' F'  "
    ],
    "98": [
        "R' U2' F R2' F' R F' U F R' F R F' R U R  "
    ],
    "99": [
        "R' U' R U' R2' F R U F' U R F R U2' R' F'  "
    ],
    "100": [
        "F R F U F' R' F' U R U' F2 U' F2' U2 R' "
    ],
    "101": [
        "R U2 R' U2' R U' R' F R' F' R2 U R' F' U' F  "
    ],
    "102": [
        "R' U' F' U F R U R F2 U R' U R U2' F2' R' "
    ],
    "103": [
        "F' R F U F' U' F2 U F R' F' U' F' R U' F' R' F "
    ],
    "104": [
        "R' F2' U R U' F U' F' U2 R' U2' F2 U R "
    ],
    "105": [
        "R' U' R U2' R' F U R' U' F' U R U2 R "
    ],
    "106": [
        "U' F U R' F R F' R' U' R F' R' U' R U R' U R "
    ],
    "107": [
        "R' U F' U R' U2' F R U R' F' U R U' F U2' R  "
    ],
    "108": [
        "F U R U' F' U R U2 R' U F' U F U R'"
    ],
    "109": [
        "R' U' F' U' R' U F R' F' R F' U' F R U2 F R "
    ],
    "110": [
        "R' U2' F' U F U' F' U F U' R U' R' U2' R  "
    ],
    "111": [
        "U' F R' F' U' F U2' R F' R' F U2 F' U R "
    ],
    "112": [
        "F R' F R F' U R' U2' R U R' U F' U' F U R F'"
    ],
    "113": [
        " R' U' F' R' U' R U' R' U R F R' U F R F' U R  "
    ],
    "114": [
        " F U R F U F' U F U' F' R' F U' R' F' R U' F'"
    ],
    "115": [
        "F U R' U' F' U F U R U F' R' U F U2 F' R "
    ],
    "116": [
        "R' U' F U R U' R' U' F' U' R F U' R' U2' R F' "
    ],
    "117": [
        "F R' F' R U F' U' F U R' U' R U' R' U2 F R F' "
    ],
    "118": [
        "F' U2 F U2' F' R' U R U' F2 U R' U' F' R "
    ],
    "119": [
        "F R U R' F' U' R' U F R' F R F' U' F' R "
    ],
    "120": [
        "R U' R' U' F' U' F' U' F U F U2 R' F' R U F "
    ],
    "121": [
        "F U R U R' U2' F' U R U2 R' U' R U' R' "
    ],
    "122": [
        "R' U' F' U' F U2 R U' F' U2' F U F' U F "
    ],
    "123": [
        "R' F R U F' U2' F' U2 F R' U2' F U F' U R "
    ],
    "124": [
        "F' U' F R F U R' U' R F' R' U2 F R' F' R "
    ],
    "125": [
        "F U R F U R' U R2 U' R' U' F' U2 R' U2 F' "
    ],
    "126": [
        "R U2 F R' F' U2' R' F R2 U R U' R2' F' "
    ],
    "127": [
        " F' U' R F2 U R U R' U2' F2' R' U F "
    ],
    "128": [
        "F U F R' F2' R U' R' U F U' F' U' R2 U2 R' "
    ],
    "129": [
        "F R U R2' F R F2' R F U2' R' U R U F' R' "
    ],
    "130": [
        "R' F' U' F2 R' F' R2 F' R' U2 F U' F' U' R F "
    ],
    "131": [
        "R U2 R U R' U' R' F U F R F' U' F' U2' R' "
    ],
    "132": [
        "F' U2' F' U' F U F R' U' R' F' R U R U2 F "
    ],
    "133": [
        "R' U2' F U R' U' R' F' R2 F' R' U R U F R  "
    ],
    "134": [
        "F U2 R' U' F U F R F2' R F U' F' U' R' F' "
    ],
    "135": [
        "R F' U F2 U R' F R' F' R U' R F2' U' F R' "
    ],
    "136": [
        "F' R U' R2' U' F R' F R F' U F' R2 U R' F  "
    ],
    "137": [
        "F U2 R' U2' R F' R' U F' U' F U F' U F R  "
    ],
    "138": [
        "R' U2' F U2 F' R F U' R U R' U' R U' R' F'  "
    ],
    "139": [
        "F U R' U' F' R U2' R' U2' R2 U R' U' R U' R' "
    ],
    "140": [
        "R U' R' U2 F U F2' U F U F U2 F' R U R' "
    ],
    "141": [
        "R' U' R U' R' F R' F' R F U2 R U2' R' F' R  "
    ],
    "142": [
        "R' U R' F R' U R2' U' R2' F' R U' F R2 F' R' "
    ],
    "143": [
        "F U F' U F U2' F' R' F' R' U' R F R' U R2"
    ],
    "144": [
        "R' U' R U' R' U2 R F R F U F' R' F U' F2'"
    ],
    "145": [
        "R' U' F' U2 R' U' F' U' F R U F R' U R2 "
    ],
    "146": [
        "F U R U2' F U R U R' F' U' R' F U' F2'  "
    ],
    "147": [
        "F' U2' F U R U R' U' R U' R' U2 F' U F  "
    ],
    "148": [
        "R' U2' R U R2' F R U R U' R' F2' U' F U R  "
    ],
    "149": [
        " R' F' U' F U' R F R U R' U' F' R' U2 R "
    ],
    "150": [
        "F R U R' U F' R' F' U' F U R F U2' F'  "
    ],
    "151": [
        " R U R' U R' F R2 F' U' R U' R' U F R' F'  "
    ],
    "152": [
        "F U R U' R' U F R U R' U' F' U R U2' R' F' "
    ],
    "153": [
        "F' U' F R U R' F' U F R' F' U' F U F' U' F U R "
    ],
    "154": [
        "R U R' F' U' F R U' R' F R U R' U' R U R' U' F'  "
    ],
    "155": [
        " F R U2 F' U F U' R' U2' R F' U2 F R' F' "
    ],
    "156": [
        " R' F' U2' R U' R' U F U2 F' R U2' R' F R "
    ],
    "157": [
        "R' F U2 R' F' R F U2' F' U2' R U' R' U2' R "
    ],
    "158": [
        "F R' U2' F R F' R' U2 R U2 F' U F U2 F' "
    ],
    "159": [
        "R2' U2 R U2 F' R' F' U F R U F U R "
    ],
    "160": [
        "F2 U2' F' U2' R F R U' R' F' U' R' U' F' "
    ],
    "161": [
        "F U F U F' R' F R U' F' U' R U' R' U' R U R' F' "
    ],
    "162": [
        " F U2 F' U F U2' R U' R' U R U' R' F' "
    ],
    "163": [
        "F U2 R U' F R' U R U' F' R2' U' F' U F R F' "
    ],
    "164": [
        "R' U2' F' U R' F U' F' U R F2 U R U' R' F' R  "
    ],
    "165": [
        " F R' F' U2' F R U R U' R' F' R' F' U F U R "
    ],
    "166": [
        " R' F R U2 R' F' U' F' U F R F R U' R' U' F' "
    ],
    "167": [
        " R' F R U2 F R' F' R U2' F' U2' R U' R'  "
    ],
    "168": [
        " F R' F' U2' R' F R F' U2 R U2 F' U F "
    ],
    "169": [
        "F' U2' F R U2' R' U' F R' U' F' U R U' F U F' "
    ],
    "170": [
        "R U2 R' F' U2 F U R' F U R U' F' U R' U' R "
    ],
    "171": [
        "R' F R F' R U2 R' U' F' U2' F U' F' U2 F"
    ],
    "172": [
        "F R' F' R F' U2' F U R U2 R' U R U2' R' "
    ],
    "173": [
        "R U2' R' U' R U2' R2' F R F' U2 F' U2' F "
    ],
    "174": [
        "F' U2 F U F' U2 F2 R' F' R U2' R U2 R' "
    ],
    "175": [
        "F R U' R' U' R' F' R U2 R U2 F U' F' U2 R'"
    ],
    "176": [
        "R' F' U F U F R F' U2' F' U2' R' U R U2' F "
    ],
    "177": [
        "F R' F' R U' F' U2' F U' R U2 R' U2' R U' R'"
    ],
    "178": [
        "R' F R F' U R U2 R' U F' U2' F U2 F' U F "
    ],
    "179": [
        "F U2 F R' F' U' R2 U' R2' U2 R U2' F'"
    ],
    "180": [
        "R U2' R2' U' F U2 F2' U' F2 U' R F' R U2' R'"
    ],
    "181": [
        "R' U2' F U2' F2' U2' F2' R' F' R U' F' U' R"
    ],
    "182": [
        "F U2' F U2 R' U2' F' U2 R2 U R' U' F'"
    ],
    "183": [
        "R' U2 R' U2' F U2 R U2' F2' U' F U R"
    ],
    "184": [
        "F U' R' U' F R' F' R2' U2' R2' U2' R U2' F'"
    ],
    "185": [
        "F R U2' R' U2' F' U F U R U' R' U2' F'"
    ],
    "186": [
        "R' U2' F U2 R F' U' F R U' R' F2' U F"
    ],
    "187": [
        "F U R U R' U2' R' F' U' F U R U' F'"
    ],
    "188": [
        "F U R U' R' F' U F U2 R U' R' U' F'"
    ],
    "189": [
        "R' U2' R' F R U F2' U F R F U2' F'"
    ],
    "190": [
        "F U R U R2' U2' F' U F U R U' F'"
    ],
    "191": [
        "F U R' F R2 F2 U F2' R' F2 U' F2 U' F'"
    ],
    "192": [
        "F U R U' R' F2' U' F R U2' R' F' U F"
    ],
    "193": [
        "R' U' R' U' F R F2' R' U R F U R"
    ],
    "194": [
        "F R2 U' R2' F R' F' R2 U2' R U2' R2' U2' F'"
    ],
    "195": [
        "R' U2' R' F' U2' F2 U2 R2 U2' R' F2' U' F R "
    ],
    "196": [
        "F U R U' R' U2' F' U2' F U R U2' R' F'"
    ],
    "197": [
        "F R U R' U' F' U2 R' U2 F' U2 F R"
    ],
    "198": [
        "F R2' U2' R2' F R' F' R2' F R' F' U2 R2 F'"
    ],
    "199": [
        "F U R U R' U2' F' R' F' U' F U R"
    ],
    "200": [
        "F' U2' F R U' R2' F R F' U2' F R' F' R"
    ],
    "201": [
        "F R' F' U' F U R2 U R' F' U F U2 F'"
    ],
    "202": [
        "R' F2' U2 F R F U F' R' U' F' U2' F2 R"
    ],
    "203": [
        "R' U2' F R U R' F2' U F R U' F U' F'"
    ],
    "204": [
        "F' U2' F R U2 R' F' U F2 R' F' R"
    ],
    "205": [
        "R' U2 F R U R' U' F2' U2' F R"
    ],
    "206": [
        "F' U' F U2' F U R U' R2' F' R F' U2' F"
    ],
    "207": [
        "R U2' R2' F R F2' U2' F R U2' R' F' U2' F"
    ],
    "208": [
        "R' U2' F U R' F R F' U' F2' U F U R"
    ],
    "209": [
        "F' U' F U R U2' R2' F R F' U2' F' U' F"
    ],
    "210": [
        "F R U2' F2 U2 F R2' F2' R2 F U2' F2' R' F'"
    ],
    "211": [
        "F U2' F2' U2' F2 U' R' F' R2 U R' F' U2 F"
    ],
    "212": [
        "F' U2' F R U2' R' F R U R' U' F2' U' F"
    ],
    "213": [
        "R U R' U2 F R2' F2' R2' U2 R2 F2 R F' R"
    ],
    "214": [
        "F R U' R' U' F R' F' R U2' R U2' R' F'"
    ],
    "215": [
        "F2' U2 F R' F2 R2 U F2 U2 F2' U2' R' U' F'"
    ],
    "216": [
        "R' U2' F2' U2' F U' F' U2' F2' R' F' R U R"
    ],
    "217": [
        "F R U R2' F' R U R' F R U2' F2' U2' F"
    ],
    "218": [
        "F' U2' F R' F R U R U R' U2' F2' U2' F"
    ],
    "219": [
        "F2' U2' F' U2' F R U' R2' F2' R F U2' F2'"
    ],
    "220": [
        "F U' R U R' F' U2' F U' R U' R' F'"
    ],
    "221": [
        "F R' F2' U2' F U2 F R U R U' R2' F' R"
    ],
    "222": [
        "R U2' R2' F R F' U F' U2' F U' R U' R'"
    ],
    "223": [
        "R2 F U2' R2 U' R U F R F' R2 U2 F' R2'"
    ],
    "224": [
        "F U' R U' R' U2' F' U2' F U2' R' F R F2'"
    ],
    "225": [
        "R' F' U F2 U2' F2' U2' F2 R U' R' F' U2 R"
    ],
    "226": [
        "R U R' F' U2' F R' F' U2' F U2 R2 U2 R'"
    ],
    "227": [
        "F U R U' R' U F R U R' U' F' U' F'"
    ],
    "228": [
        "R' U F' U' F R U2' R2' F R F' U R "
    ],
    "229": [
        "R' U2' F U R' U' F2' U F R U R"
    ],
    "230": [
        "F U R U' R2' F' R U F' U2' F R U' R'"
    ],
    "231": [
        "R' U' F' U F R F U F R' F' R U' F' "
    ],
    "232": [
        "F U2 R U2 R2' U' F' U F R2 U2 R' U' F'"
    ],
    "233": [
        "R' U2' F' U F U R U' F R U2 R' U2' F'"
    ],
    "234": [
        "F' U' F R U2' R' U F R' F2' U' F U R"
    ],
    "235": [
        "R' U' F R' F2' U F U' F' U' F R U2 R"
    ],
    "236": [
        "R U2 R' U F R' F2' U' F R2 U2' R2' U2' R"
    ],
    "237": [
        "F R U R' U2' R' U' F R' F' R U R F' "
    ],
    "238": [
        "R' U F R' F2' U' F U R U2' F' U' F R"
    ],
    "239": [
        "R' U2 R U F R U R2' F' U F R U2' F'"
    ],
    "240": [
        "R U R2' F' U' F R F' U' F R U' R2' U2' R"
    ],
    "241": [
        "F R' F' U2' F R F' U2' R' F' U F U' R"
    ],
    "242": [
        "R' F' U F U2' F R U R' U' F2' U' F R"
    ],
    "243": [
        "F R U R' U' F' U2' R' U' F' U F R"
    ],
    "244": [
        "F U F R U R2' U' F' U R U2' F'"
    ],
    "245": [
        "F R U R' U R' F R F' U2' F' "
    ],
    "246": [
        "F U R U R' U2' R' F' U2' F U2 R U2' F'"
    ],
    "247": [
        "F R' F' U R U R U' R2' F' U2' F U' R"
    ],
    "248": [
        "R U2 R2' F R F2' U2' F R U' R2' F R F'"
    ],
    "249": [
        "R U2 R2' F R F2' U2 F U2 R U' R'"
    ],
    "250": [
        "R' F2 U F2' U R' F R F2' U' F2' U' F2' R"
    ],
    "251": [
        "F R' F' U2 R U2' R U2 R2' U F R' F' R2"
    ],
    "252": [
        "F' U2 F U R U' R2' F R F2' U2' F"
    ],
    "253": [
        "F R' F' R U2' R U2' R' F' U F R U' R'"
    ],
    "254": [
        "F' R U2' R2' F R F2' U F U R' F2 R F'"
    ],
    "255": [
        "R F' U2 F2 R' F' R2 U' R' U' F R2' F' R "
    ],
    "256": [
        "R' U2' R' F R F2' U2' F U2' F' U2' F U R"
    ],
    "257": [
        "R U R' U F R2' F2' R2' U2' R2 F2 R F' R"
    ],
    "258": [
        "F' U2' F U R U' R' U2' R' F R F2' U2' F"
    ],
    "259": [
        "F' U2 R2 U2' R' F2 R2' F2 R2' U2 R2 F R F"
    ]
};