import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPlaceholder } from "@/components/map-placeholder"
import { ArrowRight, ChevronDown, Clock, GripVertical, MapPin, Play, RotateCcw, Save, Trash2, Zap } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const stops = [
  { id: 1, type: "pickup", address: "124 Market St, San Francisco", time: "09:00 AM", eta: "09:12 AM" },
  { id: 2, type: "delivery", address: "440 Mission St, San Francisco", time: "09:30 AM", eta: "09:45 AM" },
  { id: 3, type: "delivery", address: "888 Howard St, San Francisco", time: "10:00 AM", eta: "10:15 AM" },
  { id: 4, type: "delivery", address: "201 3rd St, San Francisco", time: "10:30 AM", eta: "10:50 AM" },
  { id: 5, type: "pickup", address: "600 Townsend St, San Francisco", time: "11:15 AM", eta: "11:35 AM" },
]

export default function RoutePlannerPage() {
  return (
    <div className="flex flex-col gap-6 lg:h-[calc(100vh-160px)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Route Planner</h1>
          <p className="text-muted-foreground mt-1">Multi-stop optimization and sequence planning.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm">
              <RotateCcw className="size-4 mr-2" />
              Reset Plan
           </Button>
           <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
              <Zap className="size-4 mr-2" />
              Optimize Route
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden">
        {/* Map View */}
        <div className="lg:col-span-8 flex flex-col gap-4">
           <div className="flex-1 min-h-[450px]">
              <MapPlaceholder 
                markers={[
                   { lat: 40, lng: 20, type: "office", label: "START: HQ" },
                   { lat: 50, lng: 40, type: "job", label: "St. 1: Pickup" },
                   { lat: 60, lng: 55, type: "job", label: "St. 2: Delivery" },
                   { lat: 45, lng: 70, type: "job", label: "St. 3: Delivery" },
                ]}
              />
           </div>
        </div>

        {/* Stop Management */}
        <div className="lg:col-span-4 flex flex-col gap-4 h-full">
           <Card className="flex flex-col h-full border-border/40 shadow-xl overflow-hidden">
              <CardHeader className="pb-4 border-b border-border/30 bg-muted/5">
                 <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Stop Sequence</CardTitle>
                    <Badge variant="secondary" className="px-2">{stops.length} stops</Badge>
                 </div>
                 <CardDescription>Drag to reorder or click optimize.</CardDescription>
              </CardHeader>
              <ScrollArea className="flex-1">
                 <div className="p-4 space-y-4">
                    {stops.map((stop, i) => (
                       <div key={stop.id} className="relative flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-card hover:border-primary/30 transition-all cursor-move group">
                          <div className="flex flex-col items-center gap-2">
                             <div className="size-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                                {i + 1}
                             </div>
                             {i < stops.length - 1 && <div className="w-[1px] h-10 bg-border/50" />}
                          </div>
                          
                          <div className="flex-1 flex flex-col gap-1">
                             <div className="flex items-center justify-between">
                                <Badge variant={stop.type === "pickup" ? "outline" : "secondary"} className="h-4 px-1.5 text-[8px] uppercase font-bold border-primary/20 text-primary">
                                   {stop.type}
                                </Badge>
                                <span className="text-[10px] font-mono text-muted-foreground">{stop.eta}</span>
                             </div>
                             <p className="text-xs font-bold mt-1">{stop.address}</p>
                             <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                   <Clock className="size-3" />
                                   Est. 12m stop
                                </span>
                             </div>
                          </div>
                          
                          <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Button variant="ghost" size="icon" className="size-6 text-muted-foreground hover:text-destructive">
                                <Trash2 className="size-3" />
                             </Button>
                             <GripVertical className="size-4 text-muted-foreground/30 mt-2" />
                          </div>
                       </div>
                    ))}
                 </div>
              </ScrollArea>
              
              <CardContent className="p-4 bg-muted/5 border-t border-border/30 space-y-4">
                 <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                       <span className="text-muted-foreground">Total Distance</span>
                       <span className="font-bold">22.4 km</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                       <span className="text-muted-foreground">Total Drive Time</span>
                       <span className="font-bold">54 mins</span>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-10 text-xs font-bold">
                       <Save className="size-3 mr-2" />
                       Save Template
                    </Button>
                    <Button className="h-10 text-xs font-bold shadow-lg shadow-primary/10">
                       <Play className="size-3 mr-2" />
                       Assign Driver
                    </Button>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
