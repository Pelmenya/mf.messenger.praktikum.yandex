const PATTERNS = (() => {
  const PATTERN_PHONE: string =
    "^(\\+7|8)\\s?(\\(\\d{3}\\)|\\d{3})\\s?[\\-]?\\d{3}[\\-]?\\d{2}[\\-]?\\d{2}$";
  const PATTERN_EMAIL: string =
    "^[A-Za-z]((\\.|-)?[A-Za-z0-9]+)+@[A-Za-z0-9](-?[A-Za-z0-9]+)+(\\.[A-Za-z]{2,})+$";

    return { PATTERN_EMAIL, PATTERN_PHONE }
})();
