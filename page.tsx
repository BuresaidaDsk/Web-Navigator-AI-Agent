import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe,
  Code,
  Users,
  ChevronRight,
  Play,
  Download,
  Github,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import DemoInterface from "@/components/demo-interface"
import LiveMetrics from "@/components/live-metrics"
import CodeExamples from "@/components/code-examples"
import EnhancedResultsDisplay from "@/components/enhanced-results-display"
import RealTimeSearch from "@/components/real-time-search"
import DocumentationSection from "@/components/documentation-section"
import GitHubIntegration from "@/components/github-integration"
import GetStartedApps from "@/components/get-started-apps"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">NeuralNav</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Live Demo
              </Link>
              <Link href="#apps" className="text-muted-foreground hover:text-foreground transition-colors">
                Applications
              </Link>
              <Link href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="w-3 h-3 mr-1" />
              Autonomous AI Navigation
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              The fastest and most powerful
              <span className="block text-primary">platform for AI web automation</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Convert natural language commands into precise browser actions with privacy-focused local AI. Navigate,
              extract, and automate any web task seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="pulse-glow">
                <Play className="w-5 h-5 mr-2" />
                Try Live Demo
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics Section */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Real-time Platform Stats
            </Badge>
            <h2 className="text-2xl font-bold">Live System Performance</h2>
          </div>
          <LiveMetrics />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-12">Trusted by automation engineers at</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold">TechCorp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">DataFlow</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">AutoSys</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">WebAI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">NavBot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Play className="w-3 h-3 mr-1" />
              Interactive Demo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try NeuralNav in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of natural language web automation. Enter a command and watch AI navigate the web for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div>
              <DemoInterface />
            </div>
            <div>
              <RealTimeSearch />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <EnhancedResultsDisplay />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered web automation with privacy-first architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Language Execution</h3>
              <p className="text-muted-foreground mb-4">
                Convert plain English commands into precise browser actions without manual intervention
              </p>
              <div className="flex items-center text-primary text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy-Focused Local LLM</h3>
              <p className="text-muted-foreground mb-4">
                Runs models locally using Ollama and LangChain, ensuring complete data privacy and responsiveness
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dynamic Web Interaction</h3>
              <p className="text-muted-foreground mb-4">
                Real-time browser automation with Playwright/Selenium for modern JavaScript-heavy websites
              </p>
              <div className="flex items-center text-chart-3 text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Step Task Planning</h3>
              <p className="text-muted-foreground mb-4">
                AI plans complex sequences of interactions with reasoning and adaptability for targeted data extraction
              </p>
              <div className="flex items-center text-chart-4 text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-chart-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Structured Output Generation</h3>
              <p className="text-muted-foreground mb-4">
                Returns user-friendly, structured results in JSON and tables ready for analysis or workflow integration
              </p>
              <div className="flex items-center text-chart-5 text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Feedback Loop</h3>
              <p className="text-muted-foreground mb-4">
                Human-in-the-loop supervision and correction during navigation enhances reliability and learning
              </p>
              <div className="flex items-center text-primary text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Applications */}
      <GetStartedApps />

      {/* Code Examples Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Code className="w-3 h-3 mr-1" />
              Developer Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with just a few lines of code. Multiple language bindings and API options available.
            </p>
          </div>

          <CodeExamples />
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local LLM</h3>
              <p className="text-sm text-muted-foreground mb-3">Ollama, LangChain</p>
              <p className="text-xs text-muted-foreground">Understands and plans tasks</p>
            </Card>

            <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Browser Automation</h3>
              <p className="text-sm text-muted-foreground mb-3">Playwright, Selenium</p>
              <p className="text-xs text-muted-foreground">Executes browsing and scraping</p>
            </Card>

            <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-semibold mb-2">Orchestration</h3>
              <p className="text-sm text-muted-foreground mb-3">Python/Node.js</p>
              <p className="text-xs text-muted-foreground">Coordinates AI and browser</p>
            </Card>

            <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-chart-4/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-chart-4" />
              </div>
              <h3 className="font-semibold mb-2">Output Formatting</h3>
              <p className="text-sm text-muted-foreground mb-3">JSON, Pandas</p>
              <p className="text-xs text-muted-foreground">Structures data for use/export</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <DocumentationSection />

      {/* GitHub Integration */}
      <GitHubIntegration />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your web workflows?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses using NeuralNav to streamline their web automation tasks with
            AI-powered precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="pulse-glow">
              <Play className="w-5 h-5 mr-2" />
              Start Building Now
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">NeuralNav</span>
              </div>
              <p className="text-muted-foreground text-sm">Autonomous AI-powered web navigation for the modern web.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 NeuralNav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
