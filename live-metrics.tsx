"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, Shield, Globe, TrendingUp } from "lucide-react"

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    activeAutomations: 247,
    successRate: 98.7,
    avgResponseTime: 1.2,
    dataPrivacy: 100,
    tasksCompleted: 15420,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        activeAutomations: prev.activeAutomations + Math.floor(Math.random() * 3) - 1,
        successRate: Math.max(95, Math.min(100, prev.successRate + (Math.random() - 0.5) * 0.2)),
        avgResponseTime: Math.max(0.8, Math.min(2.0, prev.avgResponseTime + (Math.random() - 0.5) * 0.1)),
        dataPrivacy: 100,
        tasksCompleted: prev.tasksCompleted + Math.floor(Math.random() * 5),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <Card className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Activity className="w-5 h-5 text-primary mr-2" />
          <Badge variant="secondary" className="animate-pulse">
            Live
          </Badge>
        </div>
        <div className="text-2xl font-bold">{metrics.activeAutomations}</div>
        <div className="text-sm text-muted-foreground">Active Automations</div>
      </Card>

      <Card className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
        </div>
        <div className="text-2xl font-bold">{metrics.successRate.toFixed(1)}%</div>
        <div className="text-sm text-muted-foreground">Success Rate</div>
      </Card>

      <Card className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Zap className="w-5 h-5 text-yellow-500 mr-2" />
        </div>
        <div className="text-2xl font-bold">{metrics.avgResponseTime.toFixed(1)}s</div>
        <div className="text-sm text-muted-foreground">Avg Response</div>
      </Card>

      <Card className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Shield className="w-5 h-5 text-blue-500 mr-2" />
        </div>
        <div className="text-2xl font-bold">{metrics.dataPrivacy}%</div>
        <div className="text-sm text-muted-foreground">Data Privacy</div>
      </Card>

      <Card className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Globe className="w-5 h-5 text-purple-500 mr-2" />
        </div>
        <div className="text-2xl font-bold">{metrics.tasksCompleted.toLocaleString()}</div>
        <div className="text-sm text-muted-foreground">Tasks Completed</div>
      </Card>
    </div>
  )
}
