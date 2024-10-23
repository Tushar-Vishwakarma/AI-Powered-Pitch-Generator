import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChevronRight, BarChart, PieChart, TrendingUp, Zap } from 'lucide-react'

export default function PitchGenerator() {
  const [clientName, setClientName] = useState('')
  const [website, setWebsite] = useState('')
  const [industry, setIndustry] = useState('')
  const [objective, setObjective] = useState('')
  const [budget, setBudget] = useState([50000])
  const [generated, setGenerated] = useState(false)

  const handleGenerate = () => {
    // In a real application, this would trigger the AI generation process
    setGenerated(true)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Google AI-Powered Pitch Generator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Input Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clientName">Client Name</Label>
                <Input id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Enter client name" />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="www.example.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="industry">Industry Vertical</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">Technology</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="objective">Campaign Objective</Label>
              <Select value={objective} onValueChange={setObjective}>
                <SelectTrigger id="objective">
                  <SelectValue placeholder="Select objective" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="awareness">Brand Awareness</SelectItem>
                  <SelectItem value="traffic">Website Traffic</SelectItem>
                  <SelectItem value="leads">Lead Generation</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Slider
                id="budget"
                min={10000}
                max={1000000}
                step={10000}
                value={budget}
                onValueChange={setBudget}
                className="mt-2"
              />
              <div className="text-right mt-1 text-sm text-muted-foreground">
                ${budget[0].toLocaleString()}
              </div>
            </div>
          </div>
          <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700" onClick={handleGenerate}>
            Generate Pitch <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {generated && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-4 w-4" /> Auto-generated Pitch Deck
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Your customized pitch deck is ready. Click to view or download.</p>
              <Button variant="outline" className="mt-4">View Pitch Deck</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-4 w-4" /> Customized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Increase mobile ad spend by 20%</li>
                <li>Focus on video content for higher engagement</li>
                <li>Implement retargeting for cart abandoners</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2 h-4 w-4" /> Competitive Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Analysis of top 5 competitors in your industry. Click to explore detailed report.</p>
              <Button variant="outline" className="mt-4">View Competitor Analysis</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4" /> Industry Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Your performance compared to industry standards. Click to view detailed metrics.</p>
              <Button variant="outline" className="mt-4">View Benchmarks</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
