"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Code, Terminal, FileCode } from "lucide-react"

const codeExamples = {
  python: {
    title: "Python Integration",
    language: "python",
    code: `from neuralnav import AutomationAgent
import asyncio

# Initialize the agent with local LLM
agent = AutomationAgent(
    llm_provider="ollama",
    model="llama3.1",
    browser="playwright"
)

async def extract_product_data():
    # Natural language command
    command = """
    Go to Amazon, search for 'wireless headphones',
    and extract the top 5 products with their prices,
    ratings, and review counts
    """
    
    # Execute automation
    result = await agent.execute(command)
    
    # Get structured output
    products = result.get_structured_data()
    
    for product in products:
        print(f"Product: {product['name']}")
        print(f"Price: {product['price']}")
        print(f"Rating: {product['rating']}")
        print("---")

# Run the automation
asyncio.run(extract_product_data())`,
  },
  javascript: {
    title: "Node.js Integration",
    language: "javascript",
    code: `import { NeuralNavAgent } from 'neuralnav-js';

// Initialize agent
const agent = new NeuralNavAgent({
  llmProvider: 'ollama',
  model: 'llama3.1',
  browser: 'playwright',
  headless: true
});

// Define automation task
async function automateDataCollection() {
  try {
    const result = await agent.execute(\`
      Navigate to GitHub trending page,
      filter by JavaScript repositories,
      and collect the top 10 repos with their
      star counts, descriptions, and last update dates
    \`);
    
    // Process results
    const repos = result.getStructuredData();
    
    // Export to JSON
    await result.exportToJSON('./github-trending.json');
    
    console.log(\`Collected \${repos.length} repositories\`);
    return repos;
    
  } catch (error) {
    console.error('Automation failed:', error);
  }
}

// Execute
automateDataCollection();`,
  },
  api: {
    title: "REST API Usage",
    language: "bash",
    code: `# Start NeuralNav API server
curl -X POST http://localhost:8080/api/v1/execute \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "command": "Search for AI automation tools on Google and extract top 5 results",
    "options": {
      "output_format": "json",
      "include_screenshots": true,
      "timeout": 30000
    }
  }'

# Response
{
  "status": "success",
  "execution_time": "4.2s",
  "results": [
    {
      "title": "Best AI Automation Tools 2025",
      "url": "https://example.com/ai-tools",
      "description": "Comprehensive guide to AI automation...",
      "screenshot": "base64_encoded_image"
    }
  ],
  "metadata": {
    "pages_visited": 1,
    "elements_extracted": 15,
    "success_rate": "100%"
  }
}`,
  },
}

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState("python")
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  const copyToClipboard = async (code: string, key: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedStates((prev) => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }))
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {Object.entries(codeExamples).map(([key, example]) => (
          <Button
            key={key}
            variant={activeTab === key ? "default" : "outline"}
            onClick={() => setActiveTab(key)}
            className="flex items-center gap-2"
          >
            {key === "python" && <Code className="w-4 h-4" />}
            {key === "javascript" && <FileCode className="w-4 h-4" />}
            {key === "api" && <Terminal className="w-4 h-4" />}
            {example.title}
          </Button>
        ))}
      </div>

      <Card className="relative">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{codeExamples[activeTab as keyof typeof codeExamples].language}</Badge>
            <span className="font-medium">{codeExamples[activeTab as keyof typeof codeExamples].title}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(codeExamples[activeTab as keyof typeof codeExamples].code, activeTab)}
          >
            {copiedStates[activeTab] ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>

        <div className="p-4">
          <pre className="text-sm overflow-x-auto">
            <code className="language-python">{codeExamples[activeTab as keyof typeof codeExamples].code}</code>
          </pre>
        </div>
      </Card>
    </div>
  )
}
