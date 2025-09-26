# Web-Navigator-AI-Agent
🌐 Web Navigator AI Agent
📌 Problem Statement: HACXPB002

Build an AI Agent that can take natural language instructions and autonomously drive the web on a local computer. The system should combine a locally running LLM (for understanding and planning) with a browser automation setup such as Chrome Headless or a browser inside a local VM. Users should be able to give simple commands (e.g., “search for laptops under 50k and list top 5”) and the agent should execute them by controlling the browser, extracting results, and returning structured outputs.

📝 Project Summary
🔹 Problem

Today, users spend a lot of time manually browsing websites, applying filters, and copying results into structured formats. This process is repetitive, time-consuming, and often requires technical knowledge. Existing assistants (like voice bots) are limited to APIs and cannot fully navigate and interact with any website.

🔹 Solution

Web Navigator AI Agent is an autonomous browser-driving AI powered by a local LLM and browser automation tools. Users can provide simple natural language commands, and the agent will:

Plan the steps using an LLM

Execute them via browser automation (Playwright/Selenium)

Extract structured outputs (tables, JSON, text)

Return results clearly to the user

🔹 Uniqueness

Unlike API-only assistants, this system can navigate ANY website.

Runs on a local LLM (privacy & offline capability).

Combines planning + execution: AI decides and performs steps automatically.

Scalable to multiple use cases — shopping, research, government portals, automation tasks.

🔹 Impact

Saves users time and effort in browsing.

Makes the web accessible to non-technical users.

Can evolve into an enterprise automation tool (RPA + AI).

✨ Features

✅ Accepts natural language instructions (English).

✅ Uses local LLM (Ollama/LangChain) for planning and parsing.

✅ Autonomous browser control using Playwright/Selenium.

✅ Extracts and formats results (JSON, table, text).

✅ Works for multiple domains (shopping, search, research).

✅ Future ready: voice commands, multi-tab workflows, enterprise deployment.

🛠️ Tech Stack

Orchestration: Python / Node.js

Instruction Parsing: LangChain, Ollama, or other local LLMs

Browser Automation: Playwright / Selenium / Puppeteer

Frontend (Demo UI): Next.js / React (deployed on Vercel)

Hosting: Vercel (frontend), Local runtime (agent execution)

👥 Team Contributions

Member 1 – AI/LLM Developer

Integrated local LLM (Ollama/LangChain)

Implemented instruction parsing & planning logic

Member 2 – Automation Engineer

Built browser automation flow (Playwright/Selenium)

Designed structured output extraction pipeline

Member 3 – Frontend & Integration Developer

Developed demo interface (Next.js/Vercel)

Integrated backend agent with user-facing app

🚀 Demo Link

🔗 Web Navigator AI Agent  https://v0-autonomous-web-agent.vercel.app/
