module.exports = function (eleventyConfig) {
  //Allow CSS file and watch
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
