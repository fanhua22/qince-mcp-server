import { z } from "zod";
import {
  readSeedsUIUtilDoc,
  readSeedsUIUtilExample,
} from "../../utils/readDoc.js";

const getUtils = (server) => {
  server.registerTool(
    "getUtils",
    {
      title: "getUtils",
      description: `
          获取 seedsui-react 特定工具函数的详细文档: 
          - 适用场景:
            1.用户询问如何使用特定工具函数
            2.用户需要查看该工具函数的api属性
            3.用户输入图片后，需要根据图片生成工具函数代码
      `,
      inputSchema: { utilName: z.string() },
    },
    async ({ utilName }) => {
      const utilDocs = await readSeedsUIUtilDoc(utilName);
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的${utilName}的文档是: ${utilDocs}}`,
          },
        ],
      };
    }
  );
};

const getUtilsExample = (server) => {
  server.registerTool(
    "getUtilsExample",
    {
      title: "getUtilsExample",
      description: `
          当用户请求一个新的用户界面 UI 使用 seedsui-react 组件时使用此工具。
          此工具仅返回可用的工具函数列表。
          调用此工具后，你必须编辑或添加文件，以便将代码片段集成到代码库中
      `,
      inputSchema: { utilName: z.string() },
    },
    async ({ utilName }) => {
      const utilDocs = await readSeedsUIUtilExample(utilName);
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的${utilName}的文档是: ${utilDocs}}`,
          },
        ],
      };
    }
  );
};

export { getUtils, getUtilsExample };
