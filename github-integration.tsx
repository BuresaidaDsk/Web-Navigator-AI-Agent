"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Download, ExternalLink, Code, FileText, Users, Activity, RefreshCw } from "lucide-react"

export default function GitHubIntegration() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const repositories = [
    {
      name: "neuralnav-core",
      description: "Core NeuralNav engine with LLM integration",
      language: "Python",
      stars: 2847,
      forks: 312,
      updated: "2 hours ago",
    },
    {
      name: "neuralnav-js",
      description: "JavaScript/Node.js SDK for NeuralNav",
      language: "TypeScript",
      stars: 1523,
      forks: 189,
      updated: "5 hours ago",
    },
    {
      name: "neuralnav-examples",
      description: "Example implementations and use cases",
      language: "Python",
      stars: 892,
      forks: 156,
      updated: "1 day ago",
    },
  ]

  const stats = [
    { label: "Total Stars", value: "5.2K", icon: Star },
    { label: "Contributors", value: "47", icon: Users },
    { label: "Releases", value: "23", icon: Download },
    { label: "Issues Closed", value: "156", icon: Activity },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Github className="w-3 h-3 mr-1" />
            Open Source
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built in the Open</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NeuralNav is open source and community-driven. Contribute, customize, and extend the platform to fit your
            needs.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Repository Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {repositories.map((repo, index) => (
            <Card
              key={index}
              className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-muted-foreground mr-2" />
                  <h3 className="font-semibold">{repo.name}</h3>
                </div>
                <Badge variant="outline" className="text-xs">
                  {repo.language}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{repo.description}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {repo.stars.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-3 h-3 mr-1" />
                    {repo.forks}
                  </div>
                </div>
                <span>Updated {repo.updated}</span>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Code className="w-3 h-3 mr-1" />
                  View Code
                </Button>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="pulse-glow">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-5 h-5 mr-2" />
              Download Release
            </Button>
            <Button size="lg" variant="ghost" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`w-5 h-5 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Refreshing..." : "Refresh Stats"}
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              MIT License
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              47 Contributors
            </div>
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-1" />
              Active Development
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
