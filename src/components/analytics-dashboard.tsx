"use client"
import { Eye, MousePointer, TrendingUp, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, XAxis, YAxis } from "recharts"

// Mock analytics data - in a real app, this would come from Vercel Analytics API
const analyticsData = {
  totalVisitors: 12389,
  pageViews: 45672,
  bounceRate: 34.2,
  avgSessionDuration: "2m 34s",
  topPages: [
    { page: "/", visitors: 5432, percentage: 43.8 },
    { page: "/about", visitors: 2341, percentage: 18.9 },
    { page: "/projects", visitors: 1876, percentage: 15.1 },
    { page: "/contact", visitors: 1234, percentage: 10.0 },
    { page: "/blog", visitors: 987, percentage: 8.0 },
  ],
  topReferrers: [
    { source: "google.com", visitors: 4321, percentage: 34.9 },
    { source: "twitter.com", visitors: 2134, percentage: 17.2 },
    { source: "github.com", visitors: 1876, percentage: 15.1 },
    { source: "linkedin.com", visitors: 1234, percentage: 10.0 },
    { source: "direct", visitors: 2824, percentage: 22.8 },
  ],
  browsers: [
    { browser: "Chrome", visitors: 6789, percentage: 54.8 },
    { browser: "Safari", visitors: 2456, percentage: 19.8 },
    { browser: "Firefox", visitors: 1543, percentage: 12.5 },
    { browser: "Edge", visitors: 987, percentage: 8.0 },
    { browser: "Other", visitors: 614, percentage: 4.9 },
  ],
  weeklyData: [
    { day: "Mon", visitors: 1234, pageViews: 4567 },
    { day: "Tue", visitors: 1456, pageViews: 5234 },
    { day: "Wed", visitors: 1789, pageViews: 6123 },
    { day: "Thu", visitors: 2123, pageViews: 7456 },
    { day: "Fri", visitors: 2456, pageViews: 8234 },
    { day: "Sat", visitors: 1876, pageViews: 6789 },
    { day: "Sun", visitors: 1455, pageViews: 5432 },
  ],
}

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
  pageViews: {
    label: "Page Views",
    color: "hsl(var(--chart-2))",
  },
}

export function AnalyticsDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your website performance and user engagement</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.pageViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.bounceRate}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+2.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.avgSessionDuration}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5.4%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Traffic</CardTitle>
            <CardDescription>Visitors and page views over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <AreaChart data={analyticsData.weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stackId="1"
                  stroke="var(--color-visitors)"
                  fill="var(--color-visitors)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="pageViews"
                  stackId="1"
                  stroke="var(--color-pageViews)"
                  fill="var(--color-pageViews)"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browser Usage</CardTitle>
            <CardDescription>Most popular browsers among your visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={analyticsData.browsers}>
                <XAxis dataKey="browser" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="visitors" fill="var(--color-visitors)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages and Referrers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{page.page}</p>
                      <p className="text-sm text-muted-foreground">{page.percentage}% of traffic</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{page.visitors.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">visitors</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Referrers</CardTitle>
            <CardDescription>Sources driving traffic to your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.topReferrers.map((referrer, index) => (
                <div key={referrer.source} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{referrer.source}</p>
                      <p className="text-sm text-muted-foreground">{referrer.percentage}% of traffic</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{referrer.visitors.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">visitors</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
