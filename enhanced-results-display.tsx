"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Copy,
  ExternalLink,
  FileText,
  Database,
  BarChart3,
  Table,
  ImageIcon,
  MapPin,
  Star,
  TrendingUp,
  Eye,
  Filter,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

interface ResultItem {
  id: string
  command: string
  status: "success" | "error" | "running"
  timestamp: string
  duration: string
  data?: any
  url?: string
  actions: number
  dataType: "table" | "json" | "chart" | "image" | "text"
  confidence: number
}

const enhancedResults: ResultItem[] = [
  {
    id: "1",
    command: "Find all product prices on Amazon for 'wireless headphones'",
    status: "success",
    timestamp: "2 minutes ago",
    duration: "12.3s",
    actions: 8,
    url: "amazon.com",
    dataType: "table",
    confidence: 95,
    data: {
      products: [
        {
          name: "Sony WH-1000XM4",
          price: "$279.99",
          rating: "4.5/5",
          reviews: "12,543",
          availability: "In Stock",
          image: "/sony-headphones.png",
        },
        {
          name: "Bose QuietComfort 45",
          price: "$329.00",
          rating: "4.3/5",
          reviews: "8,921",
          availability: "In Stock",
          image: "/bose-headphones.jpg",
        },
        {
          name: "Apple AirPods Pro",
          price: "$249.00",
          rating: "4.4/5",
          reviews: "15,672",
          availability: "Limited Stock",
          image: "/airpods-pro-lifestyle.png",
        },
        {
          name: "Sennheiser HD 450BT",
          price: "$199.95",
          rating: "4.2/5",
          reviews: "3,456",
          availability: "In Stock",
          image: "/sennheiser-headphones.jpg",
        },
      ],
      totalFound: 47,
      avgPrice: "$264.49",
      priceRange: "$149.99 - $399.99",
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
    dataType: "json",
    confidence: 88,
    data: {
      contacts: [
        { department: "Sales", email: "sales@techcorp.com", phone: "+1-555-0123", location: "New York, NY" },
        { department: "Support", email: "support@techcorp.com", phone: "+1-555-0124", location: "Austin, TX" },
        { department: "Engineering", email: "eng@techcorp.com", phone: "+1-555-0125", location: "San Francisco, CA" },
      ],
      headquarters: "123 Tech Street, Silicon Valley, CA 94000",
      founded: "2018",
      employees: "500-1000",
    },
  },
  {
    id: "3",
    command: "Monitor stock prices for AAPL, GOOGL, MSFT",
    status: "success",
    timestamp: "Just now",
    duration: "6.8s",
    actions: 12,
    url: "finance.yahoo.com",
    dataType: "chart",
    confidence: 92,
    data: {
      stocks: [
        { symbol: "AAPL", price: "$182.52", change: "+2.34", changePercent: "+1.30%", trend: "up" },
        { symbol: "GOOGL", price: "$138.21", change: "-1.45", changePercent: "-1.04%", trend: "down" },
        { symbol: "MSFT", price: "$378.85", change: "+5.67", changePercent: "+1.52%", trend: "up" },
      ],
      marketCap: "$8.2T combined",
      lastUpdated: "2 minutes ago",
    },
  },
  {
    id: "4",
    command: "Scrape job listings from LinkedIn for 'AI Engineer'",
    status: "error",
    timestamp: "8 minutes ago",
    duration: "15.1s",
    actions: 12,
    url: "linkedin.com",
    dataType: "table",
    confidence: 0,
  },
]

export default function EnhancedResultsDisplay() {
  const [selectedResult, setSelectedResult] = useState<ResultItem | null>(null)
  const [expandedResults, setExpandedResults] = useState<Set<string>>(new Set())
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedResults)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedResults(newExpanded)
  }

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

  const getDataTypeIcon = (dataType: string) => {
    switch (dataType) {
      case "table":
        return <Table className="w-4 h-4" />
      case "json":
        return <FileText className="w-4 h-4" />
      case "chart":
        return <BarChart3 className="w-4 h-4" />
      case "image":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <Database className="w-4 h-4" />
    }
  }

  const renderProductTable = (products: any[], metadata: any) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Found {metadata.totalFound} products</span>
          <span>•</span>
          <span>Avg: {metadata.avgPrice}</span>
          <span>•</span>
          <span>Range: {metadata.priceRange}</span>
        </div>
      </div>

      <div className="grid gap-3">
        {products.map((product: any, idx: number) => (
          <div key={idx} className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border border-border/30">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover bg-muted"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">{product.name}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{product.rating}</span>
                </div>
                <span>•</span>
                <span>{product.reviews} reviews</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-green-600">{product.price}</div>
              <div className={`text-xs ${product.availability === "In Stock" ? "text-green-500" : "text-orange-500"}`}>
                {product.availability}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContactData = (contacts: any[], metadata: any) => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-1">
          <span className="text-muted-foreground">Headquarters</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{metadata.headquarters}</span>
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground">Founded</span>
          <div className="text-xs">
            {metadata.founded} • {metadata.employees} employees
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        {contacts.map((contact: any, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/30"
          >
            <div>
              <div className="font-medium text-sm">{contact.department}</div>
              <div className="text-xs text-muted-foreground">{contact.location}</div>
            </div>
            <div className="text-right text-xs">
              <div className="text-blue-600">{contact.email}</div>
              <div className="text-muted-foreground">{contact.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderStockData = (stocks: any[], metadata: any) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Market Cap: {metadata.marketCap}</span>
        <span className="text-muted-foreground">Updated: {metadata.lastUpdated}</span>
      </div>

      <div className="grid gap-2">
        {stocks.map((stock: any, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/30"
          >
            <div className="flex items-center gap-3">
              <div className="font-bold text-lg">{stock.symbol}</div>
              <div className="flex items-center gap-1">
                <TrendingUp className={`w-4 h-4 ${stock.trend === "up" ? "text-green-500" : "text-red-500"}`} />
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">{stock.price}</div>
              <div className={`text-sm ${stock.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stock.change} ({stock.changePercent})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const filteredResults =
    filterStatus === "all" ? enhancedResults : enhancedResults.filter((result) => result.status === filterStatus)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Automation Results</h3>
          <p className="text-sm text-muted-foreground">Real-time task outputs with structured data</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <Button
          variant={filterStatus === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilterStatus("all")}
        >
          All ({enhancedResults.length})
        </Button>
        <Button
          variant={filterStatus === "success" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilterStatus("success")}
        >
          Success ({enhancedResults.filter((r) => r.status === "success").length})
        </Button>
        <Button
          variant={filterStatus === "error" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilterStatus("error")}
        >
          Errors ({enhancedResults.filter((r) => r.status === "error").length})
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredResults.map((result) => (
          <Card
            key={result.id}
            className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200"
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 flex-1">
                  {getStatusIcon(result.status)}
                  <span className="font-medium text-sm">{result.command}</span>
                </div>
                <div className="flex items-center gap-2">
                  {result.status === "success" && (
                    <Badge variant="outline" className="text-xs">
                      {result.confidence}% confidence
                    </Badge>
                  )}
                  {getStatusBadge(result.status)}
                </div>
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
                <span>•</span>
                <span className="flex items-center gap-1">
                  {getDataTypeIcon(result.dataType)}
                  {result.dataType}
                </span>
              </div>

              {result.status === "success" && result.data && (
                <div className="bg-muted/30 rounded-lg p-4 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Extracted Data</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => toggleExpanded(result.id)} className="h-6 px-2">
                      {expandedResults.has(result.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  {expandedResults.has(result.id) ? (
                    <div>
                      {result.data.products && renderProductTable(result.data.products, result.data)}
                      {result.data.contacts && renderContactData(result.data.contacts, result.data)}
                      {result.data.stocks && renderStockData(result.data.stocks, result.data)}
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {result.data.products && `${result.data.products.length} products found`}
                      {result.data.contacts && `${result.data.contacts.length} contacts extracted`}
                      {result.data.stocks && `${result.data.stocks.length} stocks monitored`}
                      <span className="ml-2 text-xs">Click to expand</span>
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
                    <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                      <Eye className="w-3 h-3 mr-1" />
                      Preview
                    </Button>
                  </>
                )}
                {result.status === "error" && (
                  <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                    Retry Task
                  </Button>
                )}
              </div>
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
