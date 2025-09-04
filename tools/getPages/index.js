import { z } from "zod";
import {
  readSeedsUIPageDoc,
  readSeedsUIPageExample,
} from "../../utils/readDoc.js";

const getPages = (server) => {
  server.registerTool(
    "getPages",
    {
      title: "getPages",
      description: `
          获取 seedsui-react 特定模板页面的详细文档: 
          - 适用场景:
            1.用户询问如何使用特定模板页面
            2.用户需要查看该模板页面的api属性
            3.用户输入图片后，需要根据图片生成模板页面代码
      `,
      inputSchema: { pageName: z.string() },
    },
    async ({ pageName }) => {
      const pageDocs = await readSeedsUIPageDoc(pageName);
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的${pageName}的文档是: ${pageDocs}}`,
          },
        ],
      };
    }
  );
};

const getPagesExample = (server) => {
  server.registerTool(
    "getPagesExample",
    {
      title: "getPagesExample",
      description: `
          当用户请求一个新的用户界面 UI 使用 seedsui-react 组件时使用此工具。
          此工具仅返回可用的模板页面列表。
          调用此工具后，你必须编辑或添加文件，以便将代码片段集成到代码库中
      `,
      inputSchema: { pageName: z.string() },
    },
    async ({ pageName }) => {
      const pageDocs = await readSeedsUIPageExample(pageName);
      return {
        content: [
          {
            type: "text",
            text: `seedsui-react的${pageName}的文档是: ${pageDocs}}`,
          },
        ],
      };
    }
  );
};

export { getPages, getPagesExample };
