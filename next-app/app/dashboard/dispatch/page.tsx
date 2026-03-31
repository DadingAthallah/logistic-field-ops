import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPlaceholder } from "@/components/map-placeholder"
import { AlertCircle, ChevronRight, Clock, MoreHorizontal, PlusCircle, Search, Truck, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const activeJobs = [
  { id: "JOB-4291", customer: "Acme Logistics", status: "In Transit", eta: "12 mins", driver: "Mike Jenkins", p: "Urgent" },
  { id: "JOB-4292", customer: "Globex Corp", status: "Pending", eta: "--", driver: "Sarah Connor", p: "Normal" },
  { id: "JOB-4289", customer: "Stark Ind.", status: "Failed", eta: "DELAYED", driver: "Tony S.", p: "Urgent" },
  { id: "JOB-4295", customer: "Wayland Yutani", status: "In Transit", eta: "45 mins", driver: "Ellen Ripley", p: "Normal" },
  { id: "JOB-4298", customer: "Cyberdyne", status: "Delivered", eta: "JUST NOW", driver: "T-800", p: "Normal" },
]

export default function DispatchPage() {
  return (
    <div className="flex flex-col gap-6 lg:h-[calc(100vh-160px)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dispatch Command Center</h1>
          <p className="text-muted-foreground mt-1">Real-time driver tracking and job orchestration.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm" className="hidden sm:flex">
              <Zap className="size-4 mr-2 text-primary" />
              Auto-Assign Jobs
           </Button>
           <Button size="sm">
              <PlusCircle className="size-4 mr-2" />
              New Job
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden">
        {/* Map Panel (60%) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
           <div className="flex-1 min-h-[500px]">
              <MapPlaceholder 
                className="h-full"
                markers={[
                   { lat: 40, lng: 30, type: "driver", status: "active", label: "MIKE-01" },
                   { lat: 60, lng: 70, type: "driver", status: "transit", label: "ELLEN-04" },
                   { lat: 55, lng: 45, type: "job", status: "pending", label: "JOB-4292" },
                   { lat: 25, lng: 80, type: "job", status: "failed", label: "JOB-4289" },
                   { lat: 45, lng: 15, type: "office", label: "HQ" },
                ]}
              />
           </div>
        </div>

        {/* Jobs List Panel (40%) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 h-full">
           <Card className="flex flex-col h-full border-border/40 shadow-xl shadow-black/5 bg-background/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                 <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Job Queue</CardTitle>
                    <Badge variant="secondary" className="font-mono">{activeJobs.length} Active</Badge>
                 </div>
                 <CardDescription>Track status and real-time ETAs.</CardDescription>
                 <div className="relative mt-4">
                    <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                    <Input placeholder="Search job ID or customer..." className="pl-9 h-10 bg-muted/30 border-none ring-1 ring-border/20 focus-visible:ring-primary/40" />
                 </div>
              </CardHeader>
              <ScrollArea className="flex-1 px-1">
                 <div className="flex flex-col gap-3 p-4 pt-0">
                    {activeJobs.map((job) => (
                       <div key={job.id} className="group p-4 rounded-xl border border-border/40 bg-card hover:bg-accent/5 transition-all cursor-pointer shadow-sm hover:shadow-md">
                          <div className="flex items-start justify-between gap-3">
                             <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                   <span className="font-mono text-xs font-bold text-primary">{job.id}</span>
                                   {job.p === "Urgent" && <Badge variant="destructive" className="h-4 px-1.5 text-[8px] uppercase tracking-tighter">Urgent</Badge>}
                                </div>
                                <h3 className="font-semibold text-sm leading-none mt-1">{job.customer}</h3>
                             </div>
                             <div className="flex flex-col items-end gap-1">
                                <Badge variant={job.status === "In Transit" ? "default" : job.status === "Pending" ? "secondary" : job.status === "Failed" ? "destructive" : "outline"} className="h-5 text-[10px]">
                                   {job.status}
                                </Badge>
                                <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                                   <Clock className="size-3" />
                                   {job.eta}
                                </div>
                             </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                <div className="size-6 rounded-full bg-muted flex items-center justify-center">
                                   <Truck className="size-3 text-muted-foreground" />
                                </div>
                                <span className="text-[11px] font-medium text-muted-foreground">{job.driver}</span>
                             </div>
                             <Button variant="ghost" size="icon" className="size-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreHorizontal className="size-4" />
                             </Button>
                          </div>
                       </div>
                    ))}
                 </div>
              </ScrollArea>
              <div className="p-4 border-t border-border/30 bg-muted/10">
                 <Button className="w-full h-11 shadow-lg shadow-primary/20" gap-2>
                    Assign New Dispatch
                    <ChevronRight className="size-4" />
                 </Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  )
}
