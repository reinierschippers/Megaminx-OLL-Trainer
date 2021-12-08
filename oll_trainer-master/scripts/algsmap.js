var ollMap = {
  1: [
    "U' F' U R' U' R' U' F U' R U F' R' U R U R F U'",
  ],
  2: [
    "U R' U F' U R' F R U R' U' F' U R U2' F U' R",
  ],
  3: [
    "F R' F' R U F' U' F U2 R U' R' U' R U' R' U2 ",
  ],
  4: [
    "R' U2 R F U2 F' R' U F U2 F' U2' R U2' ",
  ],
  5: [
    "R U F' R U F U2 R' U' R U' F' U' R' F U' R' U",
  ],
  6: [
    "R' U' R' U' F U F R F' R' U' F' U F R F' U R U' ",
  ],
  7: [
    "U R U F R' U2 F' U' F U F R F' U2' F' U R'",
  ],
  8: [
    "R' F' R' F U' R' F' R U R F U F' U2' F U R U' ",
  ],
  9: [
    "U F' U F2 R U2 R' U' R U' R' F2' U' F U2 ",
  ],
  10: [
    "U' R' U F R' F' R U F' U' F U' R U' R' U2 R U' ",
  ],
  11: [
    "R F R' F' U' F U2 F' U' F U R F' R' U' F U' F' ",
  ],
  12: [
    "R U' F' U' F U' F' U' R U2' F U F' U R' U' F R' ",
  ],
  13: [
    "F' U2 F U F' U2 F U F U2 F' U' F U' F' U' ",
  ],
  14: [
    "R U R' F2' U2' F2 R U' R2' F2' U2' F2 U2 R",
  ],
  15: [
    "R F' U F U' F' U2' R' U2 F U F' R U' F R' U' ",
  ],
  16: [
    "R U2' F2' U' R2' F2 U' F2' U R2 U F2 U' R'",
  ],
  17: [
    "F' U' R U2' R' U' R U2' R' U2' F U' F' U2 F ",
  ],
  18: [
    "U' R' U2' R F U2 F' U' F R' U R F' U' F U' F' ",
  ],
  19: [
    "U' R' U F U F' U' R U F R' U' F' U R U R U' R' ",
  ],
  20: [
    "U' R' F R F U' F R F2 U' F' U F' R' F' U F2'",
  ],
  21: [
    "U' F R U R' U' R' F R U' R' F R F' R U R' F2'",
  ],
  22: [
    "U' R F' R' U' R' U' R U R F R' U' R' F' U F R U'",
  ],
  23: [
    "U' R' U R U2' F U2 R' U' R2 U R' U2' F' U' ",
  ],
  24: [
    "U F U' F' U2 R' U2' F U F2' U' F U2 R U ",
  ],
  25: [
    "F U R' U2' F' R F U F R' F' U R F' R U' R' U ",
  ],
  26: [
    "U' R' U F R' F R F' U' F' R U2 F R U R' F' U' ",
  ],
  27: [
    "F U2' F2' U2' F2 U' R' F' R F' U2' F U2 ",
  ],
  28: [
    "U R U R U2 F R U' R' U' R U R' F' R' U2' R' ",
  ],
  29: [
    "R' U R' F U2' F' R U F U' R' U2 F' R U2 R ",
  ],
  30: [
    "F U' F R' U2 R F' U' R' U F U2' R F' U2' F'",
  ],
  31: [
    "U' F U' R U R' F' U2 R U F R' U2' R F' U' R' ",
  ],
  32: [
    "F' U2 F2 U R' U' F' U F R F2' U2 F",
  ],
  33: [
    "U F' U2 F2 U2 R U' R' U' F' U F' U F U2'",
  ],
  34: [
    "U' F U R U' F' U2 R2' F R F' R U2' F R' F' ",
  ],
  35: [
    "F U2 R' U' R2 U' R' U R' U' R F' U' R' U2' R",
  ],
  36: [
    "R' U2' F U F2' U F U' F U F' R U F U2 F' ",
  ],
  37: [
    "R U' F' R' F2 U R U R' U2' F' U F' R F U R'",
  ],
  38: [
    "F' U R F R2' U' F' U' F U2 R U' R F' R' U' F ",
  ],
  39: [
    "U2' R F U2' F' U' R' F R' F' R2 F U2' F' R' ",
  ],
  40: [
    "U2' F' R U F' U' F U' R' F U2' R U' F R' F' U'",
  ],
  41: [
    "F' U' R U R' F' U2' F U' R' U' F2 R F' R' U R ",
  ],
  42: [
    "F R U R' U' F' U' F U' R' U R U F' U2 R' U R ",
  ],
  43: [
    "F R' U' F' R F R U' R' U R U' R2' U F' U R U ",
  ],
  44: [
    "R' F U R F' R' F' U F U' F' U F2 U' R U' F' U' ",
  ],
  45: [
    "U F R U2' F' R' U F R F' U' F' U F2 R' U F' ",
  ],
  46: [
    "U2' F U R' F R U F' R F R U' R' F' R' U' F' U' ",
  ],
  47: [
    "U' F' R U2' F R' U R F R' F' U' R F' U2 R' F ",
  ],
  48: [
    "U F' U' F R U2' R' F' U F R' F' U' F U R U2 ",
  ],
  49: [
    "U2' R' F R2 U R' U' F' U R U R' U2 R U R' ",
  ],
  50: [
    "U2 F R' F2' U' F U R U' F' U' F U2' F' U' F ",
  ],
  51: [
    "R' U' R U2' R' F U F' R' F R U' F' U2' R U2 ",
  ],
  52: [
    "F U F' U2 F R' U' R F R' F' U R U2 F' U2' ",
  ],
  53: [
    "R U' F' U2' F R' U' F' U2' F U F R F' U2' R'",
  ],
  54: [
    "F' U R U2 R' F U R U2 R' U' R' F' R U2 F ",
  ],
  55: [
    "R' U F R' U F R' F' R U' F' U' R F' U2' F U R ",
  ],
  56: [
    "F R U' R' F' U2' F R' U F R' F' R F' U' F R F' ",
  ],
  57: [
    "R U F R' U2' F' U2' F R F' U2 F U2 F' R' ",
  ],
  58: [
    "F' U' R' F U2 R U2 R' F' R U2' R' U2' R F",
  ],
  59: [
    "R' U F' U' R' U2 R U F R' F' U F U R U2' R  ",
  ],
  60: [
    "U R' U2' F U F2' R' F2 U' F2' U R U F R ",
  ],
  61: [
    "U R' U2' F U F U R U' F' U' F' U2' F' U2' F",
  ],
  62: [
    "R U2 F R U R' U' F' R' U' F' U2' F R U' R' U ",
  ],
  63: [
    "U2 R' U R U2' R' U2' R U' R' F' U2' F U' R ",
  ],
  64: [
    "U' R' U F U R' U' F' R' F R F' U R U F' U' F R ",
  ],
  65: [
    "R U2 R' U2' R' U' F U R F' R F R' U' R F' R' ",
  ],
  66: [
    "F' U2' F U2 F U R' U' F' R F' R' F U F' R F ",
  ],
  67: [
    "R F' R' U2' F U2' R' F R F' U F' U2' R F R' ",
  ],
  68: [
    "F' R F U2 R' U2 F R' F' R U' R U2 F' R' F  ",
  ],
  69: [
    "U2 R' F' U F2 U2 F2' U' F2 U' F' U R U'  ",
  ],
  70: [
    "R' U' R U F R U2 R' F' U' R' U R F U2' F' U' ",
  ],
  71: [
    "R U2 R2' U' F' U F R U R U R' U' R U2' R'  ",
  ],
  72: [
    "F' U2' F2 U R U' R' F' U' F' U' F U F' U2 F  ",
  ],
  73: [
    "F U2' F' U' F R U' R' F' U' R' U F U' F' U' R U",
  ],
  74: [
    "R' U' F' U' F R' U2' F' U2 F R F' U2' F U' R  ",
  ],
  75: [
    "R U2' R' F R F' U2' F' U' R' U R U2 F U' R' ",
  ],
  76: [
    "F' U2 F R' F' R U2 R U F U' F' U2' R' U F ",
  ],
  77: [
    "F' U R' U2' F' U F U R U' F U2' R U2' R' U ",
  ],
  78: [
    "R U' F U2 R U' R' U' F' U R' U2 F' U2 F U' ",
  ],
  79: [
    "F U2 F R' F' U2' R F' U R' U' F' U2 F R U'  ",
  ],
  80: [
    "R' U F U2 F' U' R U F R' F R F' R U' R' U' F' ",
  ],
  81: [
    "R' F U F' R F U2 F' R' U F U F' U' F' U F R  ",
  ],
  82: [
    "F R' U' R F' R' U2' R F U' R' U' R U R U' R' F' ",
  ],
  83: [
    "R' U2 R U' R' F' U F U' R U2 R' F' U' F U R  ",
  ],
  84: [
    "F U2' F' U F R U' R' U F' U2' F R U R' U' F' ",
  ],
  85: [
    "U' R' F' R U' F' U2' F2 U F' U2' R U' R' U' F ",
  ],
  86: [
    "U F R F' U R U2 R2' U' R U2 F' U F U R'  ",
  ],
  87: [
    "U2' F R U F R U R' U' F' U2' R' U' R U R' F'  ",
  ],
  88: [
    "U2 F' U' F2 R U2 R2' F' R2 U' R' F U' F' ",
  ],
  89: [
    "U' F U2 F' U' F U' F' U' R' U' F R' F' R U R U  ",
  ],
  90: [
    "U' F' U2 F2 U2 F' R U' R' U F U2' R' F' R ",
  ],
  91: [
    "F U2' F2' U' F U' F U' F' U2 R U' R' F' U F  ",
  ],
  92: [
    "R' U2 R2 U R' U R' U R U2' F' U F R U' R'",
  ],
  93: [
    "F R U2 R' F' U' F U2 F' R F R' U2 R F' R' ",
  ],
  94: [
    "R' F' U2' F R U R' U2' R F' R' F U2' F' R F  ",
  ],
  95: [
    "U2 F' U' F U2' F' U2 R' F U' R' F' R U R F ",
  ],
  96: [
    "U F' R U2' F U F' U R' F U F U R U' R' F' U' ",
  ],
  97: [
    "U' F U2 R' F2 R F' R U' R' F R' F' R F' U' F'  ",
  ],
  98: [
    "U R' U2' F R2' F' R F' U F R' F R F' R U R  ",
  ],
  99: [
    "U' R' U' R U' R2' F R U F' U R F R U2' R' F'  ",
  ],
  100: [
    "U' F R F U F' R' F' U R U' F2 U' F2' U2 R' ",
  ],
  101: [
    "R U2 R' U2' R U' R' F R' F' R2 U R' F' U' F  ",
  ],
  102: [
    "R' U' F' U F R U R F2 U R' U R U2' F2' R' ",
  ],
  103: [
    "F' R F U F' U' F2 U F R' F' U' F' R U' F' R' F ",
  ],
  104: [
    "U' R' F2' U R U' F U' F' U2 R' U2' F2 U R ",
  ],
  105: [
    "U R' U' R U2' R' F U R' U' F' U R U2 R U2 ",
  ],
  106: [
    "U' F U R' F R F' R' U' R F' R' U' R U R' U R U ",
  ],
  107: [
    "R' U F' U R' U2' F R U R' F' U R U' F U2' R  ",
  ],
  108: [
    "U2' F U R U' F' U R U2 R' U F' U F U R' U' ",
  ],
  109: [
    "R' U' F' U' R' U F R' F' R F' U' F R U2 F R U ",
  ],
  110: [
    "R' U2' F' U F U' F' U F U' R U' R' U2' R U2'  ",
  ],
  111: [
    "U' F R' F' U' F U2' R F' R' F U2 F' U R U2  ",
  ],
  112: [
    "F R' F R F' U R' U2' R U R' U F' U' F U R F'",
  ],
  113: [
    "U R' U' F' R' U' R U' R' U R F R' U F R F' U R  ",
  ],
  114: [
    "U' F U R F U F' U F U' F' R' F U' R' F' R U' F'",
  ],
  115: [
    "U F U R' U' F' U F U R U F' R' U F U2 F' R ",
  ],
  116: [
    "U' R' U' F U R U' R' U' F' U' R F U' R' U2' R F' ",
  ],
  117: [
    "F R' F' R U F' U' F U R' U' R U' R' U2 F R F' ",
  ],
  118: [
    "F' U2 F U2' F' R' U R U' F2 U R' U' F' R U ",
  ],
  119: [
    "U' F R U R' F' U' R' U F R' F R F' U' F' R U2 ",
  ],
  120: [
    "U R U' R' U' F' U' F' U' F U F U2 R' F' R U F ",
  ],
  121: [
    "U2 F U R U R' U2' F' U R U2 R' U' R U' R' ",
  ],
  122: [
    "U2' R' U' F' U' F U2 R U' F' U2' F U F' U F ",
  ],
  123: [
    "R' F R U F' U2' F' U2 F R' U2' F U F' U R ",
  ],
  124: [
    "F' U' F R F U R' U' R F' R' U2 F R' F' R U2 ",
  ],
  125: [
    "F U R F U R' U R2 U' R' U' F' U2 R' U2 F' ",
  ],
  126: [
    "R U2 F R' F' U2' R' F R2 U R U' R2' F' U ",
  ],
  127: [
    "U2 F' U' R F2 U R U R' U2' F2' R' U F U' ",
  ],
  128: [
    "F U F R' F2' R U' R' U F U' F' U' R2 U2 R' ",
  ],
  129: [
    "F R U R2' F R F2' R F U2' R' U R U F' R' ",
  ],
  130: [
    "R' F' U' F2 R' F' R2 F' R' U2 F U' F' U' R F ",
  ],
  131: [
    "R U2 R U R' U' R' F U F R F' U' F' U2' R' U'",
  ],
  132: [
    "F' U2' F' U' F U F R' U' R' F' R U R U2 F U ",
  ],
  133: [
    "F U2 R' U' F U F R F2' R F U' F' U' R' F' U' ",
  ],
  134: [
    "R' U2' F U R' U' R' F' R2 F' R' U R U F R U  ",
  ],
  135: [
    "R F' U F2 U R' F R' F' R U' R F2' U' F R' U ",
  ],
  136: [
    "F' R U' R2' U' F R' F R F' U F' R2 U R' F U'  ",
  ],
  137: [
    "U' F U2 R' U2' R F' R' U F' U' F U F' U F R  ",
  ],
  138: [
    "U R' U2' F U2 F' R F U' R U R' U' R U' R' F'  ",
  ],
  139: [
    "F U R' U' F' R U2' R' U2' R2 U R' U' R U' R' ",
  ],
  140: [
    "R U' R' U2 F U F2' U F U F U2 F' R U R' ",
  ],
  141: [
    "R' U' R U' R' F R' F' R F U2 R U2' R' F' R U'  ",
  ],
  142: [
    "R' U R' F R' U R2' U' R2' F' R U' F R2 F' R' ",
  ],
  143: [
    "F U F' U F U2' F' R' F' R' U' R F R' U R2",
  ],
  144: [
    "R' U' R U' R' U2 R F R F U F' R' F U' F2'",
  ],
  145: [
    "U R' U' F' U2 R' U' F' U' F R U F R' U R2 U' ",
  ],
  146: [
    "U' F U R U2' F U R U R' F' U' R' F U' F2' U  ",
  ],
  147: [
    "U2' F' U2' F U R U R' U' R U' R' U2 F' U F  ",
  ],
  148: [
    "R' U2' R U R2' F R U R U' R' F2' U' F U R  ",
  ],
  149: [
    "U R' F' U' F U' R F R U R' U' F' R' U2 R U2 ",
  ],
  150: [
    "U' F R U R' U F' R' F' U' F U R F U2' F' U2' ",
  ],
  151: [
    "U R U R' U R' F R2 F' U' R U' R' U F R' F' U'  ",
  ],
  152: [
    "F U R U' R' U F R U R' U' F' U R U2' R' F' U' ",
  ],
  153: [
    "F' U' F R U R' F' U F R' F' U' F U F' U' F U R ",
  ],
  154: [
    "R U R' F' U' F R U' R' F R U R' U' R U R' U' F'  ",
  ],
  155: [
    "U' F R U2 F' U F U' R' U2' R F' U2 F R' F' ",
  ],
  156: [
    "U R' F' U2' R U' R' U F U2 F' R U2' R' F R ",
  ],
  157: [
    "R' F U2 R' F' R F U2' F' U2' R U' R' U2' R ",
  ],
  158: [
    "F R' U2' F R F' R' U2 R U2 F' U F U2 F' ",
  ],
  159: [
    "R2' U2 R U2 F' R' F' U F R U F U R U2 ",
  ],
  160: [
    "F2 U2' F' U2' R F R U' R' F' U' R' U' F' U2' ",
  ],
  161: [
    "F U F U F' R' F R U' F' U' R U' R' U' R U R' F'  ",
  ],
  162: [
    "U2 F U2 F' U F U2' R U' R' U R U' R' F' U' ",
  ],
  163: [
    "F U2 R U' F R' U R U' F' R2' U' F' U F R F' ",
  ],
  164: [
    "R' U2' F' U R' F U' F' U R F2 U R U' R' F' R  ",
  ],
  165: [
    "U F R' F' U2' F R U R U' R' F' R' F' U F U R ",
  ],
  166: [
    "U' R' F R U2 R' F' U' F' U F R F R U' R' U' F' ",
  ],
  167: [
    "U2' R' F R U2 F R' F' R U2' F' U2' R U' R'  ",
  ],
  168: [
    "U2 F R' F' U2' R' F R F' U2 R U2 F' U F ",
  ],
  169: [
    "F' U2' F R U2' R' U' F R' U' F' U R U' F U F' ",
  ],
  170: [
    "R U2 R' F' U2 F U R' F U R U' F' U R' U' R ",
  ],
  171: [
    "R' F R F' R U2 R' U' F' U2' F U' F' U2 F",
  ],
  172: [
    "F R' F' R F' U2' F U R U2 R' U R U2' R' ",
  ],
  173: [
    "R U2' R' U' R U2' R2' F R F' U2 F' U2' F ",
  ],
  174: [
    "F' U2 F U F' U2 F2 R' F' R U2' R U2 R' ",
  ],
  175: [
    "F R U' R' U' R' F' R U2 R U2 F U' F' U2 R'",
  ],
  176: [
    "R' F' U F U F R F' U2' F' U2' R' U R U2' F ",
  ],
  177: [
    "F R' F' R U' F' U2' F U' R U2 R' U2' R U' R'",
  ],
  178: [
    "R' F R F' U R U2 R' U F' U2' F U2 F' U F ",
  ]
};
