import {
  getComponents,
  getAllComponents,
  getComponentsExample,
} from "./getComponents/index.js";
import { getUtils, getUtilsExample } from "./getUtils/index.js";
import { getPages, getPagesExample } from "./getPages/index.js";

const batchRegistryTools = (server) => {
  [
    getPages,
    getUtils,
    getComponents,
    getPagesExample,
    getUtilsExample,
    getAllComponents,
    getComponentsExample,
  ].forEach((registryFunc) => {
    return registryFunc(server);
  });
};

export default batchRegistryTools;
