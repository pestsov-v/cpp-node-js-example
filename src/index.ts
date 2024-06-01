import * as path from "node:path";

const addon = require(path.resolve(__dirname, '../../build/Release/x-fiber-addon.node'));


console.log(addon)
export {addon}