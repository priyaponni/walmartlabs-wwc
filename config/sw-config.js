module.exports = {
  cache: {
    cacheId: "walmartlabs-wwc",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "walmartlabs-wwc",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
