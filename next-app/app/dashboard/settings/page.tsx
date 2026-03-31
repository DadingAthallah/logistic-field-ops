"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPlaceholder } from "@/components/map-placeholder"
import { AlertTriangle, Clock, Layers, Map, MoreHorizontal, PlusCircle, Save, Settings } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

const zones = [
  { name: "Downtown / CBD", sla: "2.0h", surcharge: "$5.00", activeJobs: 12, status: "Normal" },
  { name: "North Park", sla: "3.5h", surcharge: "--", activeJobs: 8, status: "Delayed" },
  { name: "East Industrial", sla: "4.0h", surcharge: "$12.00", activeJobs: 3, status: "Normal" },
  { name: "South Harbour", sla: "3.0h", surcharge: "--", activeJobs: 5, status: "Normal" },
]

export default function SettingsZonesPage() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Zones & SLAs</h1>
          <p className="text-muted-foreground mt-1">Configure delivery regions and service level agreements.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm">
              <Settings className="size-4 mr-2" />
              SLA Presets
           </Button>
           <Button size="sm">
              <PlusCircle className="size-4 mr-2" />
              Add Zone
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Zone Map Editor */}
         <div className="lg:col-span-7 flex flex-col gap-6">
            <Card className="border-border/40 shadow-xl shadow-black/5 flex-1 p-1">
               <MapPlaceholder 
                  className="rounded-lg h-full min-h-[500px]"
                  markers={[
                     { lat: 40, lng: 30, type: "office", label: "Zone 1 Control" },
                     { lat: 60, lng: 70, type: "office", label: "Zone 2 Control" },
                  ]}
               />
            </Card>
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 flex items-start gap-4 shadow-xl shadow-amber-500/5">
               <AlertTriangle className="size-5 text-amber-500 shrink-0 mt-0.5" />
               <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-amber-600">SLA Breach Warning</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                     North Park zone is experiencing high traffic. Automated dispatch has applied a 30-minute buffer to all upcoming jobs.
                  </p>
               </div>
            </div>
         </div>

         {/* Zone Table */}
         <div className="lg:col-span-5 flex flex-col gap-6">
            <Card className="border-border/40 shadow-xl shadow-black/5">
               <CardHeader className="bg-muted/5 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Layers className="size-4 text-primary" />
                     Defined Zones
                  </CardTitle>
                  <CardDescription>Zone-specific surcharges and time limits.</CardDescription>
               </CardHeader>
               <CardContent className="p-0">
                  <Table>
                     <TableHeader className="bg-muted/10">
                        <TableRow className="hover:bg-transparent">
                           <TableHead className="font-bold">Zone Name</TableHead>
                           <TableHead className="font-bold">SLA</TableHead>
                           <TableHead className="font-bold">Charge</TableHead>
                           <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {zones.map((zone) => (
                           <TableRow key={zone.name} className="h-14 hover:bg-accent/5">
                              <TableCell>
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold">{zone.name}</span>
                                    <span className={`text-[10px] font-bold ${zone.status === 'Delayed' ? 'text-amber-500' : 'text-emerald-500'}`}>
                                       {zone.status === 'Delayed' ? '⚠️ High Load' : '✓ Optimised'}
                                    </span>
                                 </div>
                              </TableCell>
                              <TableCell className="text-xs font-mono font-medium">{zone.sla}</TableCell>
                              <TableCell className="text-xs font-bold text-primary">{zone.surcharge}</TableCell>
                              <TableCell className="text-right">
                                 <Button variant="ghost" size="icon" className="size-8">
                                    <MoreHorizontal className="size-4" />
                                 </Button>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </CardContent>
            </Card>

            <Card className="border-border/40 shadow-xl shadow-black/5">
               <CardHeader className="bg-muted/5 border-b border-border/30">
                  <CardTitle className="text-lg flex items-center gap-2 text-primary">
                     <Clock className="size-4" />
                     SLA Global Configuration
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-0.5">
                           <span className="text-sm font-bold">Strict SLA Enforcement</span>
                           <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Alert manager at 75% breach</span>
                        </div>
                        <Switch defaultChecked />
                     </div>
                     <Separator className="bg-border/30" />
                     <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-0.5">
                           <span className="text-sm font-bold">Dynamic Buffer API</span>
                           <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Sync with Google Maps traffic</span>
                        </div>
                        <Switch />
                     </div>
                  </div>
                  
                  <Button className="w-full h-11 bg-zinc-900 hover:bg-black text-white shadow-xl shadow-black/10">
                     <Save className="size-4 mr-2" />
                     Save Configuration
                  </Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}
