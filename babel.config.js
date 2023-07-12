const presets = [
  [
    "@babel/env",
    {
      targets: { node: true },
      corejs: "3",
      useBuiltIns: "usage",
    },
  ],
];

const plugins = [
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  ["@babel/plugin-proposal-class-properties", { loose: true }],
  ["@babel/plugin-syntax-dynamic-import"]
];

module.exports = {
  presets,
  plugins,
};
