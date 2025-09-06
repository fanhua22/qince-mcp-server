import { z } from "zod";
import {
  readSeedsUIComponentDoc,
  readSeedsUIComponentExample,
  readSeedsUIComponentDocIndex,
} from "../../utils/readDoc.js";

const getAllComponents = (server) => {
  server.registerTool(
    "getAllComponents",
    {
      title: "getAllComponents",
      description: `
          获取 seedsui-react 全部可用组件的索引文档: 
          - 适用场景:
            1.用户需求模糊, 不确定用哪些组件
            2.用户需要查看全部可用组件的索引文档
            3.用户输入图片后，需要根据图片生成组件代码
      `,
      inputSchema: {},
    },
    async ({}) => {
      const componentDocsIndex = await readSeedsUIComponentDocIndex();
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的可用组件文档是: ${componentDocsIndex}}`,
          },
        ],
      };
    }
  );
};

const getComponents = (server) => {
  server.registerTool(
    "getComponents",
    {
      title: "getComponents",
      description: `
          获取 seedsui-react 特定组件的详细文档: 
          - 适用场景:
            1.用户询问如何使用特定组件
            2.用户需要查看该组件的api属性
            3.用户输入图片后，需要根据图片生成组件代码
      `,
      inputSchema: { componentName: z.string() },
    },
    async ({ componentName }) => {
      const componentDocs = await readSeedsUIComponentDoc(componentName);
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的${componentName}的文档是: ${componentDocs}}`,
          },
        ],
      };
    }
  );
};

const getComponentsExample = (server) => {
  server.registerTool(
    "getComponentsExample",
    {
      title: "getComponentsExample",
      description: `
          当用户请求一个新的用户界面 UI 使用 seedsui-react 组件时使用此工具。
          此工具仅返回可用的组件列表。
          调用此工具后，你必须编辑或添加文件，以便将代码片段集成到代码库中
      `,
      inputSchema: { componentName: z.string() },
    },
    async ({ componentName }) => {
      const componentDocs = await readSeedsUIComponentExample(componentName);
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的${componentName}的文档是: ${componentDocs}}`,
          },
        ],
      };
    }
  );
};

export { getComponents, getAllComponents, getComponentsExample };
