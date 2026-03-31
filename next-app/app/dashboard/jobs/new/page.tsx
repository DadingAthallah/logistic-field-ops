import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, MapPin, Save, User } from "lucide-react"
import Link from "next/link"

export default function CreateJobPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto pb-20">
      <div className="flex items-center gap-4">
         <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="/dashboard/jobs">
               <ArrowLeft className="size-5" />
            </Link>
         </Button>
         <div>
            <h1 className="text-3xl font-bold tracking-tight">Create New Job</h1>
            <p className="text-muted-foreground mt-1">Assign a new delivery or field task to your fleet.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <Card className="border-border/40 shadow-xl shadow-black/5 overflow-hidden">
              <CardHeader className="bg-muted/5 border-b border-border/30">
                 <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    Location Details
                 </CardTitle>
                 <CardDescription>Setup pickup and delivery endpoints.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label htmlFor="customer" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Customer Name</Label>
                       <Input id="customer" placeholder="e.g. Acme Corp" className="h-11" />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="priority" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Priority</Label>
                       <Select defaultValue="normal">
                          <SelectTrigger className="h-11">
                             <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                             <SelectItem value="low">Low</SelectItem>
                             <SelectItem value="normal">Normal</SelectItem>
                             <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 space-y-4">
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-primary flex items-center gap-2">
                             <div className="size-2 bg-primary rounded-full" />
                             Pickup Address
                          </Label>
                          <Input placeholder="Enter origin address..." className="h-11 bg-background" />
                       </div>
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-primary flex items-center gap-2">
                             <div className="size-2 bg-primary rounded-full" />
                             Delivery Address
                          </Label>
                          <Input placeholder="Enter destination address..." className="h-11 bg-background" />
                       </div>
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-border/40 shadow-xl shadow-black/5 overflow-hidden">
              <CardHeader className="bg-muted/5 border-b border-border/30">
                 <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    Scheduling
                 </CardTitle>
                 <CardDescription>Define when this job should be completed.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Schedule Date</Label>
                       <Input type="date" className="h-11" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Time Window</Label>
                       <Input type="time" className="h-11" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Special Instructions</Label>
                    <Textarea placeholder="Driver notes, gate codes, etc." className="min-h-[100px]" />
                 </div>
              </CardContent>
           </Card>
        </div>

        <div className="space-y-6">
           <Card className="border-border/40 shadow-xl shadow-black/5 overflow-hidden">
              <CardHeader className="bg-muted/5 border-b border-border/30">
                 <CardTitle className="text-lg flex items-center gap-2">
                    <User className="size-4 text-primary" />
                    Assignment
                 </CardTitle>
                 <CardDescription>Select a driver for this task.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                 <div className="space-y-4">
                    <Select>
                       <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select available driver" />
                       </SelectTrigger>
                       <SelectContent>
                          <SelectItem value="mike">Mike Jenkins (Nearest - 2mi)</SelectItem>
                          <SelectItem value="sarah">Sarah Connor (4.5mi)</SelectItem>
                          <SelectItem value="tony">Tony Stark (12mi)</SelectItem>
                       </SelectContent>
                    </Select>
                    
                    <div className="p-4 rounded-xl bg-muted/20 border border-border/30">
                       <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                             MJ
                          </div>
                          <div>
                             <p className="text-sm font-bold">Mike Jenkins</p>
                             <p className="text-[11px] text-muted-foreground">Available in 15 mins</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="pt-6 border-t border-border/30 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                       <span className="text-muted-foreground">Est. Distance</span>
                       <span className="font-bold">14.2 mi</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                       <span className="text-muted-foreground">Est. Duration</span>
                       <span className="font-bold">28 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                       <span className="text-muted-foreground">Estimated Fee</span>
                       <span className="font-bold text-primary">$45.00</span>
                    </div>
                 </div>
                 
                 <Button className="w-full h-12 shadow-lg shadow-primary/20">
                    <Save className="size-4 mr-2" />
                    Generate Job Order
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
