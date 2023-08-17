const prettierConfigStandard = await import("prettier-config-standard");

module.export = Object.assign({}, prettierConfigStandard, {
  arrowParens: "always",
  bracketSameLine: true,
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "es5",
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  proseWrap: "preserve",
  insertPragma: false,
  printWidth: 80,
  requirePragma: true,
  tabWidth: 4,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
});
