# NotebookLM Integration Guide

Based on the "Antigravity + NotebookLM" concept, here is how you can use this portal with your NotebookLM data.

## 1. Manual Linking (Easiest)
You can manually add links to your Notebooks and resources in `src/data.js`.
1.  Open your Notebook in NotebookLM.
2.  Copy the URL.
3.  Edit `src/data.js` and update the `notebookLink` field for the relevant subject.

## 2. Advanced Integration (MCP Server)
The video describes running a local "Model Context Protocol" (MCP) server that connects your local development environment (Antigravity/Cursor) to NotebookLM via a browser session.

To set this up, you would typically need to:
1.  Install the `notebooklm-mcp` server (requires Python/Node).
2.  Configure your editor (Antigravity) to use this MCP server.
3.  Once connected, you can ask Antigravity to "List my notebooks" and it will fetch them automatically.

*Note: As an AI agent, I cannot install system-level servers or access your browser data directly without this bridge. If you set up the MCP server, let me know, and I can auto-populate the portal!*

## 3. Only Publishing Needed Pages
To control what subjects appear on the portal:
1.  Open `src/config.js`.
2.  Edit the `publishedSubjects` array.
3.  Only the IDs listed there will be displayed on the landing page.
