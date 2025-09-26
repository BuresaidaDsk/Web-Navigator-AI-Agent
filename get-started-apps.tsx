"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  ShoppingCart,
  BarChart3,
  Mail,
  Calendar,
  FileText,
  Download,
  Play,
  ExternalLink,
  RefreshCw,
  CheckCircle,
} from "lucide-react"

export default function GetStartedApps() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [isInstalling, setIsInstalling] = useState<string | null>(null)

  const handleInstallApp = (appId: string) => {
    setIsInstalling(appId)
    setTimeout(() => {
      setIsInstalling(null)
      setSelectedApp(appId)
    }, 3000)
  }

  const applications = [
    {
      id: "ecommerce-monitor",
      title: "E-commerce Price Monitor",
      description: "Monitor product prices across multiple stores and get alerts on price drops",
      icon: ShoppingCart,
      category: "E-commerce",
      difficulty: "Beginner",
      time: "10 min setup",
      features: ["Multi-store tracking", "Price alerts", "Historical data", "Export reports"],
      code: `nav.monitor_prices([
  "amazon.com/product/123",
  "bestbuy.com/product/456"
], alert_threshold=0.15)`,
    },
    {
      id: "lead-generator",
      title: "Lead Generation Tool",
      description: "Extract contact information from company websites and social profiles",
      icon: Mail,
      category: "Sales",
      difficulty: "Intermediate",
      time: "15 min setup",
      features: ["Contact extraction", "Email validation", "CRM integration", "Bulk processing"],
      code: `nav.extract_contacts(
  urls=company_urls,
  fields=["email", "phone", "linkedin"],
  validate_emails=True
)`,
    },
    {
      id: "market-research",
      title: "Market Research Dashboard",
      description: "Gather competitor data, pricing, and market trends automatically",
      icon: BarChart3,
      category: "Analytics",
      difficulty: "Advanced",
      time: "20 min setup",
      features: ["Competitor analysis", "Trend tracking", "Custom dashboards", "API integration"],
      code: `nav.research_market(
  competitors=["comp1.com", "comp2.com"],
  metrics=["pricing", "features", "reviews"],
  schedule="daily"
)`,
    },
    {
      id: "content-aggregator",
      title: "Content Aggregator",
      description: "Collect and organize content from multiple sources for research",
      icon: FileText,
      category: "Content",
      difficulty: "Beginner",
      time: "8 min setup",
      features: ["Multi-source collection", "Auto-categorization", "Duplicate detection", "Export options"],
      code: `nav.aggregate_content(
  sources=["news-site.com", "blog.com"],
  keywords=["AI", "automation"],
  format="structured"
)`,
    },
    {
      id: "event-tracker",
      title: "Event & News Tracker",
      description: "Track industry events, news, and announcements automatically",
      icon: Calendar,
      category: "Monitoring",
      difficulty: "Intermediate",
      time: "12 min setup",
      features: ["Real-time monitoring", "Custom filters", "Notifications", "Calendar integration"],
      code: `nav.track_events(
  sources=["eventbrite.com", "meetup.com"],
  keywords=["tech conference", "AI summit"],
  notify=True
)`,
    },
    {
      id: "social-insights",
      title: "Social Media Insights",
      description: "Analyze social media mentions, sentiment, and engagement metrics",
      icon: Rocket,
      category: "Social",
      difficulty: "Advanced",
      time: "25 min setup",
      features: ["Sentiment analysis", "Engagement tracking", "Competitor monitoring", "Report generation"],
      code: `nav.analyze_social(
  platforms=["twitter", "linkedin"],
  keywords=["your-brand"],
  sentiment=True,
  competitors=["competitor1", "competitor2"]
)`,
    },
  ]

  const categories = ["All", "E-commerce", "Sales", "Analytics", "Content", "Monitoring", "Social"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredApps =
    activeCategory === "All" ? applications : applications.filter((app) => app.category === activeCategory)

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Rocket className="w-3 h-3 mr-1" />
            Ready-to-Use Applications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started with Pre-built Apps</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jump-start your automation journey with our collection of ready-to-deploy applications for common use cases
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredApps.map((app) => (
            <Card
              key={app.id}
              className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <app.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{app.title}</h3>
                    <Badge variant="outline" className="text-xs mt-1">
                      {app.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{app.description}</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>{app.difficulty}</span>
                <span>{app.time}</span>
              </div>

              <div className="space-y-2 mb-4">
                {app.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center text-xs">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => handleInstallApp(app.id)}
                  disabled={isInstalling === app.id}
                >
                  {isInstalling === app.id ? (
                    <>
                      <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                      Installing...
                    </>
                  ) : selectedApp === app.id ? (
                    <>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Installed
                    </>
                  ) : (
                    <>
                      <Download className="w-3 h-3 mr-1" />
                      Install
                    </>
                  )}
                </Button>
                <Button size="sm" variant="outline">
                  <Play className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected App Details */}
        {selectedApp && (
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {applications.find((app) => app.id === selectedApp)?.title} - Ready to Use!
              </h3>
              <p className="text-muted-foreground">
                Your application has been installed and configured. Here's the code to get started:
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
                <code>{applications.find((app) => app.id === selectedApp)?.code}</code>
              </pre>
            </div>

            <div className="flex justify-center space-x-4">
              <Button>
                <Play className="w-4 h-4 mr-2" />
                Run Application
              </Button>
              <Button variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="ghost" onClick={() => setSelectedApp(null)}>
                Close
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
