module.exports = function (bundler) {
  bundler.addAssetType('js', require.resolve('./moon-asset'));
};