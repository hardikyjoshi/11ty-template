const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = "style.css";

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `./css/${fileName}`);
    return {
      permalink: `css/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      // require('postcss-comment'),
      //   require('precss'),
      require("postcss-import"),
      require("autoprefixer"),
      require("postcss-nested"),
      require("postcss-simple-vars"),
      //   require('postcss-mixins'),
      //   require('postcss-color-mix'),
      require("cssnano"),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};
