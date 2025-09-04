import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

import Cache from "./cache.js";

const docCache = new Cache();

const getCacheName = (module, type) => `${module}/${type}`;

// 加载文档索引json
const loadDocList = async (module, type) => {
  try {
    const cacheDocList = docCache.get(getCacheName(module, type));
    if (cacheDocList) {
      return cacheDocList;
    }
    const docList = await readFile(
      new URL(`../docs/${module}/${type}.json`, import.meta.url),
      "utf-8"
    );
    const docListJson = JSON.parse(docList);
    docCache.set("componentsList", docListJson);
    return docListJson;
  } catch (error) {
    console.error(`加载${module}/${type}列表错误: ${error.message}`);
    return [];
  }
};

// 加载文档
const loadDocByName = async (name, module, type) => {
  const docIndexJson = await loadDocList(module, type);
  return docIndexJson.find((docItem) => {
    return (
      docItem.name.toLowerCase() === name.toLowerCase() ||
      docItem.dirName.toLowerCase() === name.toLowerCase()
    );
  });
};

// 读取文档
const readDoc = async (name, module, type, fileName) => {
  const docJson = await loadDocByName(name, module, type);
  const docPath = new URL(
    `../docs/${module}/${type}/${docJson.dirName}/${fileName}`,
    import.meta.url
  );
  try {
    const cacheDoc = docCache.get(getCacheName(module, type)) || {};
    if (cacheDoc?.[docJson.name]) {
      return cacheDoc[docJson.name];
    }

    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");

      cacheDoc[docJson.name] = docResult;
      docCache.set(getCacheName(module, type), cacheDoc);

      return docResult;
    }

    return `${docJson.name} 文档不存在`;
  } catch (error) {
    console.error(`获取 ${docJson.name} 文档错误: ${error.message}`);
    return `获取 ${docJson.name} 文档错误: ${error.message}`;
  }
};

// 读取：seedsui组件说明文档
const readSeedsUIComponentDoc = async (name) => {
  return await readDoc(name, "seedsui-react", "components", "docs.md");
};
// 读取：seedsui组件示例文档
const readSeedsUIComponentExample = async (name) => {
  return await readDoc(name, "seedsui-react", "components", "examples.md");
};
// 读取：seedsui工具说明文档
const readSeedsUIUtilDoc = async (name) => {
  return await readDoc(name, "seedsui-react", "utils", "docs.md");
};
// 读取：seedsui工具示例文档
const readSeedsUIUtilExample = async (name) => {
  return await readDoc(name, "seedsui-react", "utils", "examples.md");
};
// 读取：seedsui页面演示说明文档
const readSeedsUIPageDoc = async (name) => {
  return await readDoc(name, "seedsui-react", "pages", "docs.md");
};
// 读取：seedsui页面演示示例文档
const readSeedsUIPageExample = async (name) => {
  return await readDoc(name, "seedsui-react", "pages", "examples.md");
};

export {
  readSeedsUIPageDoc,
  readSeedsUIUtilDoc,
  readSeedsUIUtilExample,
  readSeedsUIPageExample,
  readSeedsUIComponentDoc,
  readSeedsUIComponentExample,
};
