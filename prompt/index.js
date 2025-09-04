import generateComp from "./generateComp/index.js";
import generatePage from "./generatePage/index.js";

const batchRegistryPrompts = (server) => {
  [generateComp, generatePage].forEach((registryFunc) => registryFunc(server));
};

export default batchRegistryPrompts;
