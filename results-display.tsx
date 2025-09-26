"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Clock, Download, Copy, ExternalLink, FileText, Database } from "lucide-react"

interface ResultItem {
  id: string
  command: string
  status: "success" | "error" | "running"
  timestamp: string
  duration: string
  data?: any
  url?: string
  actions: number
}

const sampleResults: ResultItem[] = [
  {
    id: "1",
    command: "Find all product prices on Amazon for 'wireless headphones'",
    status: "success",
    timestamp: "2 minutes ago",
    duration: "12.3s",
    actions: 8,
    url: "amazon.com",
    data: {
      products: [
        { name: "Sony WH-1000XM4", price: "$279.99", rating: "4.5/5" },
        { name: "Bose QuietComfort 45", price: "$329.00", rating: "4.3/5" },
        { name: "Apple AirPods Pro", price: "$249.00", rating: "4.4/5" },
      ],
    },
  },
  {
    id: "2",
    command: "Extract contact information from company website",
    status: "success",
    timestamp: "5 minutes ago",
    duration: "8.7s",
    actions: 5,
    url: "techcorp.com",
    data: {
      contacts: [
        { department: "Sales", email: "sales@techcorp.com", phone: "+1-555-0123" },
        { department: "Support", email: "support@techcorp.com", phone: "+1-555-0124" },
      ],
    },
  },
  {
    id: "3",
    command: "Monitor stock prices for AAPL, GOOGL, MSFT",
    status: "running",
    timestamp: "Just now",
    duration: "3.2s",
    actions: 2,
    url: "finance.yahoo.com",
  },
  {
    id: "4",
    command: "Scrape job listings from LinkedIn for 'AI Engineer'",
    status: "error",
    timestamp: "8 minutes ago",
    duration: "15.1s",
    actions: 12,
    url: "linkedin.com",
  },
]

export default function ResultsDisplay() {
  const [selectedResult, setSelectedResult] = useState<ResultItem | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "running":
        return <Clock className="w-4 h-4 text-blue-500 animate-spin" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
            Success
          </Badge>
        )
      case "error":
        return (
          <Badge variant="secondary" className="bg-red-500/10 text-red-500 border-red-500/20">
            Error
          </Badge>
        )
      case "running":
        return (
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            Running
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Recent Results</h3>
          <p className="text-sm text-muted-foreground">Latest automation task outputs</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export All
        </Button>
      </div>

      <div className="grid gap-4">
        {sampleResults.map((result) => (
          <Card
            key={result.id}
            className="p-4 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(result.status)}
                <span className="font-medium text-sm">{result.command}</span>
              </div>
              {getStatusBadge(result.status)}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span>{result.timestamp}</span>
              <span>•</span>
              <span>{result.duration}</span>
              <span>•</span>
              <span>{result.actions} actions</span>
              {result.url && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    {result.url}
                  </span>
                </>
              )}
            </div>

            {result.status === "success" && result.data && (
              <div className="bg-muted/30 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Extracted Data</span>
                </div>

                {result.data.products && (
                  <div className="space-y-2">
                    {result.data.products.slice(0, 2).map((product: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-foreground">{product.name}</span>
                        <div className="flex gap-2">
                          <span className="font-medium text-green-600">{product.price}</span>
                          <span className="text-muted-foreground">{product.rating}</span>
                        </div>
                      </div>
                    ))}
                    {result.data.products.length > 2 && (
                      <div className="text-xs text-muted-foreground">+{result.data.products.length - 2} more items</div>
                    )}
                  </div>
                )}

                {result.data.contacts && (
                  <div className="space-y-2">
                    {result.data.contacts.map((contact: any, idx: number) => (
                      <div key={idx} className="text-sm">
                        <div className="font-medium">{contact.department}</div>
                        <div className="text-muted-foreground text-xs">
                          {contact.email} • {contact.phone}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {result.status === "error" && (
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-500">Error Details</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Rate limited by target site. Retrying with different approach...
                </p>
              </div>
            )}

            {result.status === "running" && (
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-blue-500 animate-spin" />
                  <span className="text-sm font-medium text-blue-500">In Progress</span>
                </div>
                <p className="text-xs text-muted-foreground">Navigating to target pages and extracting data...</p>
              </div>
            )}

            <div className="flex gap-2">
              {result.status === "success" && (
                <>
                  <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                    <Copy className="w-3 h-3 mr-1" />
                    Copy Data
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                    <FileText className="w-3 h-3 mr-1" />
                    View JSON
                  </Button>
                </>
              )}
              {result.status === "error" && (
                <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                  Retry Task
                </Button>
              )}
              {result.status === "running" && (
                <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                  Cancel
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">Load More Results</Button>
      </div>
    </div>
  )
}
