import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["index.js"],
});

const client = new Client({
  name: "test-client",
  version: "1.0.0",
});

await client.connect(transport);

// 测试：增强prompt
const prompt = await client.getPrompt({
  name: "generateComp",
});
console.log(prompt);

// 测试：工具调用
const seedComp = await client.callTool({
  name: "getUtilsExample",
  arguments: {
    utilName: "Request",
  },
});
console.log(seedComp);
