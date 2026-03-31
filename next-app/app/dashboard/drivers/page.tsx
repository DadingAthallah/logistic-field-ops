import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, MoreHorizontal, PlusCircle, Star, Truck } from "lucide-react"
import Link from "next/link"

const drivers = [
  { id: "D-101", name: "Mike Jenkins", vehicle: "Ford F-150 (Silver)", status: "On Job", rating: 4.8, jobsToday: 8, kmDriven: 142, lastActive: "Just now" },
  { id: "D-102", name: "Sarah Connor", vehicle: "Merc Sprinter (White)", status: "Active", rating: 4.9, jobsToday: 12, kmDriven: 210, lastActive: "2m ago" },
  { id: "D-103", name: "Tony Stark", vehicle: "Tesla Semi (Iron)", status: "Off-Duty", rating: 4.5, jobsToday: 0, kmDriven: 0, lastActive: "4h ago" },
  { id: "D-104", name: "Ellen Ripley", vehicle: "Freightliner (Blue)", status: "On Job", rating: 5.0, jobsToday: 5, kmDriven: 85, lastActive: "Just now" },
  { id: "D-105", name: "Bruce Wayne", vehicle: "Black Bat-Truck", status: "Active", rating: 4.7, jobsToday: 15, kmDriven: 320, lastActive: "1m ago" },
  { id: "D-106", name: "Albert Wesker", vehicle: "Umbrella HMMWV", status: "Inactive", rating: 3.2, jobsToday: 2, kmDriven: 45, lastActive: "1d ago" },
]

export default function DriversGridPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Driver Management</h1>
          <p className="text-muted-foreground mt-1">Monitor driver availability and performance metrics.</p>
        </div>
        <Button size="sm">
          <PlusCircle className="size-4 mr-2" />
          Add Driver
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <Card key={driver.id} className="group border-border/40 hover:border-primary/30 transition-all shadow-xl shadow-black/5 hover:shadow-primary/5 overflow-hidden">
            <CardHeader className="pb-0">
               <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                     <Avatar className="size-14 ring-2 ring-primary/10 transition-transform group-hover:scale-105">
                        <AvatarImage src={`https://avatar.vercel.sh/${driver.name}.png`} />
                        <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                     </Avatar>
                     <div className="flex flex-col gap-0.5">
                        <h3 className="font-bold text-lg leading-none">{driver.name}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                           <Truck className="size-3" />
                           {driver.vehicle}
                        </p>
                     </div>
                  </div>
                  <Badge variant={driver.status === "On Job" ? "default" : driver.status === "Active" ? "secondary" : "outline"} className="text-[10px]">
                     {driver.status}
                  </Badge>
               </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 pb-6 border-b border-border/40">
                 <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Jobs</span>
                    <span className="text-lg font-bold">{driver.jobsToday}</span>
                 </div>
                 <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Distance</span>
                    <span className="text-lg font-bold">{driver.kmDriven}km</span>
                 </div>
                 <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Rating</span>
                    <span className="text-lg font-bold flex items-center gap-1">
                       {driver.rating}
                       <Star className="size-3 fill-amber-400 text-amber-400" />
                    </span>
                 </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                 <span className="text-[11px] text-muted-foreground">Last active: {driver.lastActive}</span>
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="size-8">
                       <MoreHorizontal className="size-4" />
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="h-8 px-4 text-xs font-bold">
                       <Link href={`/dashboard/drivers/${driver.id}`}>
                          <Eye className="size-3 mr-1.5" />
                          View Profile
                       </Link>
                    </Button>
                 </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
