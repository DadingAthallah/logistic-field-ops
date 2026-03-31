"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from "recharts"
import { ArrowDown, ArrowUp, Calendar, Download, FileText, LayoutPanelLeft, TrendingUp, Users } from "lucide-react"

const kpiData = [
   { label: "Deliveries Today", value: "142", trend: "+12.5%", positive: true, icon: TrendingUp },
   { label: "On-Time Rate", value: "94.2%", trend: "+2.1%", positive: true, icon: LayoutPanelLeft },
   { label: "Avg Delivery Time", value: "24m", trend: "-1.5m", positive: true, icon: TrendingUp },
   { label: "Failed Deliveries", value: "3", trend: "+1", positive: false, icon: Users },
]

const chartData = [
  { name: "Mon", deliveries: 120, target: 100 },
  { name: "Tue", deliveries: 145, target: 100 },
  { name: "Wed", deliveries: 132, target: 100 },
  { name: "Thu", deliveries: 160, target: 100 },
  { name: "Fri", deliveries: 175, target: 100 },
  { name: "Sat", deliveries: 90, target: 80 },
  { name: "Sun", deliveries: 65, target: 80 },
]

const leaderboard = [
   { name: "Sarah Connor", jobs: 145, rating: 4.9, onTime: "98%" },
   { name: "Mike Jenkins", jobs: 132, rating: 4.8, onTime: "96%" },
   { name: "Bruce Wayne", jobs: 128, rating: 4.7, onTime: "94%" },
   { name: "Ellen Ripley", jobs: 115, rating: 5.0, onTime: "100%" },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Operational performance and efficiency benchmarks.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm">
              <Calendar className="size-4 mr-2" />
              Last 7 Days
           </Button>
           <Button size="sm">
              <Download className="size-4 mr-2" />
              Generate PDF Report
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {kpiData.map((kpi) => (
            <Card key={kpi.label} className="border-border/40 shadow-xl shadow-black/5 bg-background/50 backdrop-blur-sm">
               <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{kpi.label}</span>
                     <div className="size-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                        <kpi.icon className="size-4 text-primary" />
                     </div>
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                     <h2 className="text-3xl font-bold tracking-tight">{kpi.value}</h2>
                     <div className={`flex items-center text-[10px] font-bold ${kpi.positive ? 'text-emerald-500' : 'text-red-500'}`}>
                        {kpi.positive ? <ArrowUp className="size-3 mr-0.5" /> : <ArrowDown className="size-3 mr-0.5" />}
                        {kpi.trend}
                     </div>
                  </div>
               </CardContent>
            </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <Card className="lg:col-span-8 border-border/40 shadow-xl shadow-black/5 overflow-hidden">
            <CardHeader className="bg-muted/5 border-b border-border/30">
               <CardTitle className="text-lg">Delivery Performance</CardTitle>
               <CardDescription>Daily job volume vs operational targets.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
               <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#888' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#888' }} />
                        <Tooltip 
                           contentStyle={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                           cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                        />
                        <Bar 
                           dataKey="deliveries" 
                           fill="var(--primary)" 
                           radius={[4, 4, 0, 0]} 
                           barSize={40}
                        />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
         </Card>

         <Card className="lg:col-span-4 border-border/40 shadow-xl shadow-black/5 flex flex-col">
            <CardHeader className="bg-muted/5 border-b border-border/30">
               <CardTitle className="text-lg">Top Drivers</CardTitle>
               <CardDescription>Leaders by completion volume.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex-1">
               <div className="space-y-6">
                  {leaderboard.map((driver, i) => (
                     <div key={driver.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <span className={`size-5 rounded flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-amber-400 text-amber-900' : 'bg-muted text-muted-foreground'}`}>{i+1}</span>
                           <div>
                              <p className="text-sm font-bold">{driver.name}</p>
                              <p className="text-[10px] text-muted-foreground">{driver.onTime} On-Time Rate</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-black text-primary">{driver.jobs}</p>
                           <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">Jobs</p>
                        </div>
                     </div>
                  ))}
               </div>
               
               <div className="mt-10 p-4 rounded-xl border border-dashed border-primary/30 bg-primary/5">
                  <div className="flex items-center gap-2 mb-2">
                     <FileText className="size-3 text-primary" />
                     <h4 className="text-[10px] font-bold uppercase text-primary">Summary Insight</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                     Friday (Today) is trending 18% higher than historical volume averages. Recommend activation of standby fleet.
                  </p>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}
