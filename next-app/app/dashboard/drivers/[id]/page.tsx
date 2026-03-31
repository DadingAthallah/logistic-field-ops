import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, BarChart2, Calendar, CheckCircle, Clock, MapPin, Phone, Star, Truck } from "lucide-react"
import Link from "next/link"

export default async function DriverDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Mock data for a single driver
  const driver = {
    id: id || "D-101",
    name: "Mike Jenkins",
    alias: "MIKE-01",
    vehicle: "Ford F-150 (Silver)",
    plate: "ABC-1234",
    status: "On Job",
    rating: 4.8,
    phone: "+1 (555) 902-1234",
    onTimeRate: "94%",
    avgDelivery: "22m",
    podsToday: 12,
    timeline: [
      { id: 1, time: "09:30 AM", type: "Clock In", desc: "Shift started at HQ" },
      { id: 2, time: "10:15 AM", type: "Delivery Success", desc: "Job #4288 completed at Downtown" },
      { id: 3, time: "11:00 AM", type: "Delivery Success", desc: "Job #4289 completed at North Park" },
      { id: 4, time: "11:45 AM", type: "En Route", desc: "Currently heading to San Jose" },
    ]
  }

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex items-center gap-4">
         <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="/dashboard/drivers">
               <ArrowLeft className="size-5" />
            </Link>
         </Button>
         <div>
            <h1 className="text-3xl font-bold tracking-tight">{driver.name}</h1>
            <p className="text-muted-foreground mt-1">Profile and performance analytics for {driver.alias}</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Profile Header Card */}
         <Card className="lg:col-span-12 border-border/40 shadow-xl shadow-black/5 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  <Avatar className="size-32 ring-4 ring-primary/10">
                     <AvatarImage src={`https://avatar.vercel.sh/${driver.name}.png`} />
                     <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                     <div className="space-y-4">
                        <div>
                           <h2 className="text-xl font-bold">{driver.name}</h2>
                           <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                              <Truck className="size-4" />
                              {driver.vehicle} ({driver.plate})
                           </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <Badge variant="default">{driver.status}</Badge>
                           <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
                              <Star className="size-4 fill-amber-500" />
                              {driver.rating}
                           </span>
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Contact Information</span>
                        <div className="flex flex-col gap-2">
                           <p className="text-sm font-medium flex items-center gap-2">
                              <Phone className="size-4 text-primary" />
                              {driver.phone}
                           </p>
                           <p className="text-sm font-medium flex items-center gap-2">
                              <Clock className="size-4 text-primary" />
                              Shift: 08:00 - 17:00
                           </p>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Today's Stats</span>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <p className="text-2xl font-bold">{driver.podsToday}</p>
                              <p className="text-[10px] text-muted-foreground">PODs Captured</p>
                           </div>
                           <div>
                              <p className="text-2xl font-bold">{driver.onTimeRate}</p>
                              <p className="text-[10px] text-muted-foreground">On-Time Rate</p>
                           </div>
                        </div>
                     </div>

                     <div className="flex items-end justify-end">
                        <Button className="w-full md:w-auto shadow-lg shadow-primary/20">Message Driver</Button>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* Today's Timeline */}
         <div className="lg:col-span-8 flex flex-col gap-6">
            <Card className="border-border/40 shadow-xl shadow-black/5 flex-1">
               <CardHeader className="bg-muted/5 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Calendar className="size-4 text-primary" />
                     Today's Activity Timeline
                  </CardTitle>
                  <CardDescription>Chronological log of events for {id}</CardDescription>
               </CardHeader>
               <CardContent className="p-8">
                  <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:bg-border/30">
                     {driver.timeline.map((event) => (
                        <div key={event.id} className="relative flex items-start gap-8 pl-10">
                           <div className="absolute left-0 top-1.5 size-9 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-sm shadow-primary/20">
                              <div className="size-2 rounded-full bg-primary" />
                           </div>
                           <div className="flex-1 flex flex-col gap-1">
                              <div className="flex items-center justify-between">
                                 <h4 className="font-bold text-sm">{event.type}</h4>
                                 <span className="text-[11px] font-medium text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full">{event.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{event.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>

         {/* Performance Insights */}
         <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="border-border/40 shadow-xl shadow-black/5 h-full">
               <CardHeader className="bg-muted/5 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <BarChart2 className="size-4 text-primary" />
                     Performance Metrics
                  </CardTitle>
                  <CardDescription>Monthly efficiency benchmarks.</CardDescription>
               </CardHeader>
               <CardContent className="p-6 space-y-8">
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-muted-foreground uppercase">Avg Delivery Time</span>
                        <span className="text-sm font-bold">{driver.avgDelivery}</span>
                     </div>
                     <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[85%] rounded-full" />
                     </div>
                     <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <span className="text-emerald-500 font-bold">12% faster</span> than regional average.
                     </p>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-muted-foreground uppercase">POD Success Rate</span>
                        <span className="text-sm font-bold">99.2%</span>
                     </div>
                     <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[99%] rounded-full" />
                     </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                     <h4 className="text-xs font-bold text-primary flex items-center gap-2 uppercase tracking-widest">
                        <CheckCircle className="size-3" />
                        Manager's Note
                     </h4>
                     <p className="text-xs text-muted-foreground leading-relaxed italic">
                        "Mike has been consistently early for the morning shift. Great performance in the North Park zone."
                     </p>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}
