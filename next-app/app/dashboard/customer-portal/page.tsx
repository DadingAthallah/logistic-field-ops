import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Globe, Mail, MessageSquare, Monitor, Palette, Save } from "lucide-react"

export default function CustomerPortalPage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Portal Settings</h1>
        <p className="text-muted-foreground mt-1">Customize tracking links and notification workflows.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Branding Section */}
         <div className="lg:col-span-7 space-y-8">
            <Card className="border-border/40 shadow-xl shadow-black/5">
               <CardHeader className="bg-muted/5 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Palette className="size-4 text-primary" />
                     Tracking Page Branding
                  </CardTitle>
                  <CardDescription>How customers see their live delivery map.</CardDescription>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-6">
                     <div className="size-20 rounded-xl bg-muted border border-dashed border-border/50 flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
                        <span className="text-[10px] font-bold text-muted-foreground text-center px-4">Upload Logo</span>
                     </div>
                     <div className="space-y-4 flex-1">
                        <div className="space-y-2">
                           <Label className="text-xs font-bold uppercase text-muted-foreground">Brand Color</Label>
                           <div className="flex items-center gap-3">
                              <div className="size-8 rounded bg-primary cursor-pointer ring-2 ring-primary/20" />
                              <Input placeholder="#F97316" className="font-mono h-10 w-32" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label className="text-xs font-bold uppercase text-muted-foreground">Company Display Name</Label>
                     <Input placeholder="FleetFlow Logistics" className="h-11" />
                  </div>

                  <div className="p-4 rounded-xl border border-border/40 bg-muted/10 space-y-2">
                     <div className="flex items-center justify-between">
                        <span className="text-xs font-bold flex items-center gap-2">
                           <Globe className="size-3 text-primary" />
                           Public URL Preview
                        </span>
                        <Button variant="link" size="sm" className="h-6 text-[10px] text-primary">Copy Link</Button>
                     </div>
                     <p className="text-[11px] font-mono p-2 bg-background rounded-md border border-border/30">
                        track.fleetflow.app/c/acme-logs/8892-XT
                     </p>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-border/40 shadow-xl shadow-black/5">
               <CardHeader className="bg-muted/5 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <MessageSquare className="size-4 text-primary" />
                     Automated Notifications
                  </CardTitle>
                  <CardDescription>Trigger SMS and Email updates at key milestones.</CardDescription>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border/40 hover:bg-muted/5 transition-colors">
                     <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold">Dispatched Alert</span>
                        <span className="text-[11px] text-muted-foreground italic">Notify customer when driver starts the trip.</span>
                     </div>
                     <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-border/40 hover:bg-muted/5 transition-colors">
                     <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold">ETA Update Alert</span>
                        <span className="text-[11px] text-muted-foreground italic">Send SMS if delay exceeds 15 minutes.</span>
                     </div>
                     <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-border/40 hover:bg-muted/5 transition-colors">
                     <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold">POD Confirmation</span>
                        <span className="text-[11px] text-muted-foreground italic">Email signatures and photos immediately after delivery.</span>
                     </div>
                     <Switch defaultChecked />
                  </div>
               </CardContent>
            </Card>
         </div>

         {/* Preview / Quick Setup */}
         <div className="lg:col-span-5 space-y-8">
            <Card className="border-border/40 shadow-xl shadow-black/5 bg-primary/5 h-full flex flex-col">
               <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="text-lg flex items-center gap-2 text-primary">
                     <Monitor className="size-4" />
                     Live Tracking Preview
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-8 flex-1 flex flex-col">
                  {/* Faux Mobile Frame */}
                  <div className="max-w-[280px] mx-auto w-full aspect-[9/19] bg-[#0F172A] rounded-[40px] border-[8px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col">
                     <div className="h-6 w-1/3 bg-zinc-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20" />
                     
                     {/* Map Mock in Mobile */}
                     <div className="flex-1 bg-zinc-900 relative">
                        <div className="absolute inset-0 opacity-20 bg-[size:20px_20px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           <div className="size-4 bg-primary rounded-full animate-ping" />
                           <div className="absolute inset-0 size-4 bg-primary rounded-full" />
                        </div>
                     </div>
                     
                     {/* Floating Card in Mobile */}
                     <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-background border border-border/30 shadow-2xl">
                        <p className="text-[10px] font-black text-primary uppercase">Arriving in 12m</p>
                        <p className="text-xs font-bold leading-tight mt-1">Your FleetFlow delivery is en route!</p>
                        <div className="mt-3 flex items-center gap-2">
                           <div className="size-6 rounded-full bg-muted" />
                           <span className="text-[8px] font-medium text-muted-foreground italic">Driver: Mike J.</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-4">
                     <Button className="w-full h-11 bg-primary shadow-lg shadow-primary/20">
                        <Save className="size-4 mr-2" />
                        Save Branding 
                     </Button>
                     <p className="text-[10px] text-center text-muted-foreground italic">
                        Preview shown above simulates the iPhone 14 Pro viewport.
                     </p>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}
