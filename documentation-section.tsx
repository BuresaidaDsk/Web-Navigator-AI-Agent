"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Book,
  Code,
  Terminal,
  FileText,
  ExternalLink,
  Copy,
  CheckCircle,
  ArrowRight,
  Play,
  RefreshCw,
} from "lucide-react"

export default function DocumentationSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const quickStartSteps = [
    {
      title: "Install NeuralNav",
      code: "pip install neuralnav\n# or\nnpm install @neuralnav/sdk",
      description: "Install the NeuralNav SDK for your preferred language",
    },
    {
      title: "Initialize Client",
      code: `from neuralnav import NeuralNav

# Initialize with local LLM
nav = NeuralNav(
    model="ollama/llama2",
    browser="playwright"
)`,
      description: "Set up the client with your preferred LLM and browser engine",
    },
    {
      title: "Execute Commands",
      code: `# Natural language automation
result = nav.execute(
    "Find the top 5 laptops under $1000 on Amazon",
    output_format="json"
)

print(result.data)`,
      description: "Start automating with simple natural language commands",
    },
  ]

  const apiExamples = [
    {
      title: "Web Search & Extract",
      code: `nav.execute(
  "Search for 'best restaurants in NYC' and get the top 10 with ratings",
  filters={"min_rating": 4.0},
  output_format="structured"
)`,
      language: "python",
    },
    {
      title: "E-commerce Automation",
      code: `nav.execute(
  "Compare prices for iPhone 15 across 3 different stores",
  stores=["amazon", "bestbuy", "apple"],
  include_shipping=True
)`,
      language: "python",
    },
    {
      title: "Data Collection",
      code: `nav.execute(
  "Collect contact information from company about pages",
  urls=["company1.com", "company2.com"],
  fields=["email", "phone", "address"]
)`,
      language: "python",
    },
  ]

  return (
    <section id="docs" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Book className="w-3 h-3 mr-1" />
            Documentation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in Minutes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guides, API references, and examples to help you build powerful web automation workflows
          </p>
        </div>

        <Tabs defaultValue="quickstart" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
          </TabsList>

          <TabsContent value="quickstart" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {quickStartSteps.map((step, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 relative">
                    <pre className="text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(step.code, `step-${index}`)}
                    >
                      {copiedCode === `step-${index}` ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="api" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Core Methods
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <code className="text-sm font-mono">nav.execute(command, **options)</code>
                    <p className="text-xs text-muted-foreground mt-1">Execute natural language commands</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <code className="text-sm font-mono">nav.batch(commands[])</code>
                    <p className="text-xs text-muted-foreground mt-1">Execute multiple commands in sequence</p>
                  </div>
                  <div className="border-l-2 border-chart-3 pl-4">
                    <code className="text-sm font-mono">nav.monitor(url, conditions)</code>
                    <p className="text-xs text-muted-foreground mt-1">Monitor websites for changes</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Configuration Options
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-chart-4 pl-4">
                    <code className="text-sm font-mono">output_format: "json" | "csv" | "structured"</code>
                    <p className="text-xs text-muted-foreground mt-1">Choose output format</p>
                  </div>
                  <div className="border-l-2 border-chart-5 pl-4">
                    <code className="text-sm font-mono">browser: "playwright" | "selenium"</code>
                    <p className="text-xs text-muted-foreground mt-1">Select browser engine</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <code className="text-sm font-mono">model: "ollama/llama2" | "local/gpt"</code>
                    <p className="text-xs text-muted-foreground mt-1">Choose LLM model</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="mt-8">
            <div className="space-y-6">
              {apiExamples.map((example, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{example.title}</h3>
                    <Badge variant="outline">{example.language}</Badge>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 relative">
                    <pre className="text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(example.code, `example-${index}`)}
                    >
                      {copiedCode === `example-${index}` ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Setting up Local LLM", icon: Terminal, time: "5 min" },
                { title: "Browser Configuration", icon: Code, time: "3 min" },
                { title: "Output Formatting", icon: FileText, time: "4 min" },
                { title: "Error Handling", icon: RefreshCw, time: "6 min" },
                { title: "Performance Optimization", icon: Play, time: "8 min" },
                { title: "Advanced Workflows", icon: ArrowRight, time: "12 min" },
              ].map((guide, index) => (
                <Card
                  key={index}
                  className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center mb-3">
                    <guide.icon className="w-5 h-5 text-primary mr-2" />
                    <Badge variant="secondary" className="text-xs">
                      {guide.time}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <div className="flex items-center text-primary text-sm">
                    Read guide <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
