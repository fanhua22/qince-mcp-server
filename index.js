import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import batchRegistryTools from "./tools/index.js";
import batchRegistryPrompts from "./prompt/index.js";

const server = new McpServer(
  { name: "qince-mcp-server", version: "1.0.0" },
  {
    capabilities: { tools: {}, prompts: {} },
    instructions: `
      能力和角色：
        - 你是一个专业的勤策组件库专家助手,具有以下能力：
          1.深度了解勤策组件库,包括移动端的seedsui-react组件库和web端的common组件库
          2.可以查询所有可用组件列表
          3.可以获取组件的详细文档、属性说明和API定义
          4.可以提供组件的代码示例
          5.可以查询组件的更新历史
      使用规则：
        - 严格遵循以下工具使用优先级：
          1.首先检查当前对话上下文是否已包含所需信息
          2.只有当上下文确实缺少必要信息时才调用工具
          3.对于完全相同的组件查询参数，禁止重复调用工具
        - 对专业术语保持准确，不自行编造组件属性
        - 代码示例要完整可运行，并注明所需版本
        - 当用户询问"显示XXX组件文档"时，如果上下文已有该组件信息，直接展示而不再调用工具
    `,
  }
);

batchRegistryTools(server);
batchRegistryPrompts(server);

const transport = new StdioServerTransport();
await server.connect(transport);
