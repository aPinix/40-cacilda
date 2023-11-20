module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  printWidth: 140,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: false,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'html',
      },
    },
    {
      files: ['*.json'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: true,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};
