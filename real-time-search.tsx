"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink, Star, Globe } from "lucide-react"

interface SearchResult {
  title: string
  url: string
  description: string
  rating?: number
  domain: string
  snippet?: string
  price?: string
}

export default function RealTimeSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchType, setSearchType] = useState("web")

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsSearching(true)
    console.log("[v0] Executing real-time search for:", query)

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          type: searchType,
        }),
      })

      const data = await response.json()
      console.log("[v0] Search results received:", data)

      if (data.success) {
        setResults(data.results)
      }
    } catch (error) {
      console.error("[v0] Search error:", error)
    } finally {
      setIsSearching(false)
    }
  }

  // Auto-search on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Real-Time Web Search</h3>
          <Badge variant="secondary">Live API</Badge>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Enter search query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSearch} disabled={isSearching || !query.trim()}>
            <Search className="w-4 h-4 mr-2" />
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>

        {results.length > 0 && (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <div
                key={index}
                className="p-4 border border-border/50 rounded-lg bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm line-clamp-2">{result.title}</h4>
                  {result.rating && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {result.rating}
                    </div>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{result.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{result.domain}</span>
                    {result.price && (
                      <>
                        <span>•</span>
                        <span className="text-green-600 font-medium">{result.price}</span>
                      </>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {isSearching && (
          <div className="text-center py-8">
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Searching the web...</p>
          </div>
        )}
      </div>
    </Card>
  )
}
