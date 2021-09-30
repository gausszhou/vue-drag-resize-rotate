// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",
  htmlWhitespaceSensitivity: "ignore",
  parsers: {
    ".jsx": "flow",
    ".scss": "scss",
    ".ts": "typescript",
    ".less": "css",
    ".vue": "vue",
    ".nvue": "vue",
    ".ux": "vue",
    ".yml": "yaml"
  }
};
