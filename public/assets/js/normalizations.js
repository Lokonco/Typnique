/* Regex rules to apply to inputted Typst math.

  Normalizations should only cover visually and semantically equivalent input.
  Most Typst aliases render identically already, so this starts intentionally
  small and can grow as we find fair shortcuts during playtesting.
*/

let normalizations = [
  {
    "rule": /\binfinity\b/g,
    "replacement": "oo"
  },
  {
    "rule": /\\"/g,
    "replacement": "\""
  },
  {
    "rule": /\\+\//g,
    "replacement": "/"
  },
  {
    "rule": /\btriangle\b(?!\.)/g,
    "replacement": "triangle.stroked.t"
  },
  {
    "rule": /([A-Za-z0-9_)\]}])\s*:\s*([A-Za-z0-9_({[])/g,
    "replacement": "$1 colon $2"
  },
  {
    "rule": /,\s+(?=forall\b|exists\b|[A-Z]_[A-Za-z])/g,
    "replacement": " comma "
  },
  {
    "rule": /(integral(?:_\([^)]*\)|_[^\s^]+)?(?:\^\([^)]*\)|\^[^\s_]+)?)\s*(?=[A-Za-z"])/g,
    "replacement": "$1 "
  },
  {
    "rule": /"d"\s+(?=[A-Za-z])/g,
    "replacement": "\"d\""
  }
];