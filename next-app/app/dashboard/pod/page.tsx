import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Eye, Filter, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const pods = [
  { id: "POD-9901", job: "JOB-4298", driver: "T-800", customer: "Cyberdyne", time: "10:15 AM", recipient: "Sarah C.", type: "Signature + Photo" },
  { id: "POD-9902", job: "JOB-4285", driver: "Bruce Wayne", customer: "Wayne Ent.", time: "04:20 PM", recipient: "Alfred P.", type: "Photo Only" },
  { id: "POD-9903", job: "JOB-4281", driver: "Lex Luthor", customer: "LexCorp", time: "Yesterday", recipient: "Mercy G.", type: "Signature + Photo" },
  { id: "POD-9904", job: "JOB-4275", driver: "Mike Jenkins", customer: "Acme Logistics", time: "2 days ago", recipient: "Wile E.", type: "Signature Only" },
  { id: "POD-9905", job: "JOB-4270", driver: "Sarah Connor", customer: "Globex", time: "3 days ago", recipient: "Hank S.", type: "Photo Only" },
  { id: "POD-9906", job: "JOB-4265", driver: "Ellen Ripley", customer: "Wayland", time: "last week", recipient: "Bishop", type: "Full Pack" },
]

export default function PodGalleryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">POD Gallery</h1>
          <p className="text-muted-foreground mt-1">Review and manage proof-of-delivery records.</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="size-4 mr-2" />
          Export All PODs
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
           <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
           <Input placeholder="Search POD ID, Job, or Driver..." className="pl-10 h-11 bg-background" />
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="h-11 px-4">
              <Filter className="size-4 mr-2" />
              Filter by Date
           </Button>
           <Button variant="outline" className="h-11 px-4">
              <User className="size-4 mr-2" />
              Driver
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pods.map((pod) => (
          <Card key={pod.id} className="group border-border/40 hover:border-primary/30 transition-all shadow-xl shadow-black/5 hover:shadow-primary/5 overflow-hidden">
             <div className="aspect-video bg-muted relative overflow-hidden flex items-center justify-center border-b border-border/40">
                {/* Simulated POD Photo with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground border-none text-[8px] h-4">VERIFIED</Badge>
                      <span className="text-[10px] text-white/70 font-mono">{pod.time}</span>
                   </div>
                   <p className="text-xs font-bold text-white uppercase tracking-wider">{pod.type}</p>
                </div>
                
                {/* SVG Mock of a package/signature */}
                <svg className="size-24 text-white/10 group-hover:text-primary/20 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                   <path d="M21 8l-9-4-9 4v8l9 4 9-4V8zM12 12L12 22M12 12L21 8M12 12L3 8" />
                   <path d="M12 4L12 12" strokeDasharray="2 2" />
                </svg>
                
                <Button className="absolute right-4 top-4 size-8 opacity-0 group-hover:opacity-100 transition-opacity" variant="secondary" size="icon">
                   <Eye className="size-4" />
                </Button>
             </div>
             
             <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                   <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-sm flex items-center gap-2">
                         <span className="text-primary font-mono">{pod.id}</span>
                         <span className="text-muted-foreground font-normal">for</span>
                         {pod.customer}
                      </h3>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-1">
                         <User className="size-3" />
                         Driver: {pod.driver}
                      </p>
                   </div>
                   <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Recipient</span>
                      <span className="text-xs font-bold">{pod.recipient}</span>
                   </div>
                </div>
                
                <div className="mt-5 grid grid-cols-2 gap-2">
                   <Button variant="outline" size="sm" className="h-9 text-[10px] uppercase font-bold">Resend to Customer</Button>
                   <Button variant="secondary" size="sm" className="h-9 text-[10px] uppercase font-bold">Download ZIP</Button>
                </div>
             </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
         <Button variant="ghost" className="text-muted-foreground">Load 12 more records...</Button>
      </div>
    </div>
  )
}
