"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Play,
  Square,
  Loader2,
  CheckCircle,
  Monitor,
  Code2,
  Database,
  Search,
  ShoppingCart,
  Newspaper,
} from "lucide-react"

const exampleCommands = [
  "Search for 'AI automation tools' on Google and extract the top 5 results",
  "Navigate to Amazon, search for 'wireless headphones', and get the first 3 product details",
  "Go to GitHub, find trending JavaScript repositories, and extract their star counts",
  "Visit a news website and collect headlines from the technology section",
]

const mockSteps = [
  { id: 1, action: "Opening browser", status: "completed", time: "0.5s" },
  { id: 2, action: "Navigating to target website", status: "completed", time: "1.2s" },
  { id: 3, action: "Analyzing page structure", status: "completed", time: "0.8s" },
  { id: 4, action: "Executing search query", status: "running", time: "2.1s" },
  { id: 5, action: "Extracting results", status: "pending", time: "-" },
  { id: 6, action: "Formatting output", status: "pending", time: "-" },
]

export default function DemoInterface() {
  const [command, setCommand] = useState("")
  const [searchType, setSearchType] = useState("web")
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleRunDemo = async () => {
    if (!command.trim()) return

    setIsRunning(true)
    setShowResults(false)
    setCurrentStep(0)
    setResults(null)

    try {
      console.log("[v0] Starting automation demo with command:", command)

      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= mockSteps.length - 1) {
            clearInterval(stepInterval)
            return prev
          }
          return prev + 1
        })
      }, 1200)

      const response = await fetch("/api/automation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          command,
          options: { type: searchType },
        }),
      })

      const data = await response.json()
      console.log("[v0] Automation API response:", data)

      if (data.success) {
        setResults(data.result)
        setShowResults(true)
      } else {
        console.error("[v0] Automation failed:", data.error)
      }
    } catch (error) {
      console.error("[v0] Demo execution error:", error)
    } finally {
      setIsRunning(false)
    }
  }

  const handleStop = () => {
    setIsRunning(false)
    setCurrentStep(0)
    setShowResults(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Natural Language Command</label>
          <Textarea
            placeholder="Describe what you want to automate..."
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Automation Type</label>
          <Select value={searchType} onValueChange={setSearchType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select automation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Web Search & Extraction
                </div>
              </SelectItem>
              <SelectItem value="ecommerce">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  E-commerce Data Mining
                </div>
              </SelectItem>
              <SelectItem value="news">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4" />
                  News & Content Analysis
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Try these examples:</span>
          {exampleCommands.map((example, index) => (
            <Button key={index} variant="outline" size="sm" onClick={() => setCommand(example)} className="text-xs">
              {example.slice(0, 30)}...
            </Button>
          ))}
        </div>

        <div className="flex gap-3">
          <Button onClick={handleRunDemo} disabled={!command || isRunning} className="flex-1">
            {isRunning ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Running Automation...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Execute Command
              </>
            )}
          </Button>
          {isRunning && (
            <Button variant="outline" onClick={handleStop}>
              <Square className="w-4 h-4 mr-2" />
              Stop
            </Button>
          )}
        </div>
      </div>

      {(isRunning || showResults) && (
        <Card className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Monitor className="w-5 h-5 mr-2" />
            Execution Progress
          </h3>

          <div className="space-y-3">
            {mockSteps.map((step, index) => {
              let status = "pending"
              if (index < currentStep) status = "completed"
              else if (index === currentStep && isRunning) status = "running"

              return (
                <div key={step.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    {status === "completed" && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {status === "running" && <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />}
                    {status === "pending" && (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                    <span className={status === "pending" ? "text-muted-foreground" : ""}>{step.action}</span>
                  </div>
                  <Badge variant={status === "completed" ? "default" : status === "running" ? "secondary" : "outline"}>
                    {step.time}
                  </Badge>
                </div>
              )
            })}
          </div>
        </Card>
      )}

      {showResults && results && (
        <Card className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Database className="w-5 h-5 mr-2" />
            Automation Results
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Task Completed Successfully</span>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                {results.metadata?.execution_time}
              </Badge>
            </div>

            {results.data && (
              <div className="bg-muted/50 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">{JSON.stringify(results.data, null, 2)}</pre>
              </div>
            )}

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">{results.metadata?.pages_visited || 0}</div>
                <div className="text-xs text-muted-foreground">Pages Visited</div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-accent">{results.metadata?.elements_extracted || 0}</div>
                <div className="text-xs text-muted-foreground">Elements Extracted</div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-chart-3">{results.metadata?.execution_time || "0s"}</div>
                <div className="text-xs text-muted-foreground">Execution Time</div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm">
              <Code2 className="w-4 h-4 mr-2" />
              Export JSON
            </Button>
            <Button variant="outline" size="sm">
              <Database className="w-4 h-4 mr-2" />
              Save Results
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
