const { Asset } = require('parcel-bundler')
const MoonCompiler = require("moon-compiler");

class MoonAsset extends Asset {
  constructor() {
    console.log("...")
    this.type = 'js';
  }

  generate() {
    console.log(this.contents)

    const compiledContent = MoonCompiler.compile(this.contents)
    return {
      js: compiledContent
    }
  }
}

module.exports = MoonAsset;