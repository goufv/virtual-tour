const path = require('path');
const { Namer } = require("@parcel/plugin");

// Remove the hash when building index.tsx
exports.default = new Namer({
  async name({ bundle, bundleGraph, logger, options }) {
    if (path.basename(bundle.getMainEntry().filePath) === 'index.tsx') {
      // const filePath = bundle.getMainEntry().filePath
      // let name = path.basename(filePath, path.extname(filePath))
      // return name + "." + bundle.type;
      return 'index.js'
    }
    else {
      // Fall through to default namer.
      return null
    }
  },
});