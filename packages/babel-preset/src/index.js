module.exports = (api) => {
  api.cache(() => (process.env.NODE_ENV || "").toLowerCase() === "production");

  return ({
    presets: [
      '@babel/preset-env',
      '@babel/preset-stage-0',
      '@babel/preset-flow',
      '@babel/preset-react',
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ]
  });
};
