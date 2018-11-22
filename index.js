const YAML = require('yaml');

function toCodeDotGov(ymlString) {
  const parsed = YAML.parse(ymlString);
  console.log("parsed:", parsed);
}

module.exports = {
  toCodeDotGov
}