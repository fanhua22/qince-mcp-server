import { getUtils, getUtilsExample } from "./getUtils/index.js";
import { getPages, getPagesExample } from "./getPages/index.js";
import { getComponents, getComponentsExample } from "./getComponents/index.js";

const batchRegistryTools = (server) => {
  [
    getPages,
    getUtils,
    getComponents,
    getPagesExample,
    getUtilsExample,
    getComponentsExample,
  ].forEach((registryFunc) => {
    return registryFunc(server);
  });
};

export default batchRegistryTools;
