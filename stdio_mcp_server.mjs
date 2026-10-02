#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "golangprojects",
  boardId: "golangprojects-official",
  domain: "golangprojects.com",
  npmName: "zc-golangprojects-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
