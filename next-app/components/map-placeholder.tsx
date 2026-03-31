"use client"

import * as React from "react"
import { LucideIcon, MapPin, Truck, Navigation, AlertCircle, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface MapPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  markers?: {
    lat: number
    lng: number
    type: "driver" | "job" | "office"
    status?: "active" | "transit" | "failed" | "pending"
    label?: string
  }[]
  interactive?: boolean
}

export function MapPlaceholder({ markers = [], interactive = true, className, ...props }: MapPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[400px] bg-[#0F172A] overflow-hidden rounded-xl border border-border/50",
        "hero-pattern shadow-inner shadow-black/40",
        className
      )}
      {...props}
    >
      {/* Map Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Faux Satellite Imagery (Glowing Blobs) */}
      <div className="absolute top-1/4 left-1/3 size-64 bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-1/3 size-48 bg-orange-500/10 blur-[80px] rounded-full" />

      {/* Map Content (Faux Roads/Paths) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
         <path d="M-10 100 Q 200 80 400 150 T 800 120" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
         <path d="M100 -10 Q 150 200 80 400 T 120 800" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
         <path d="M300 -10 Q 320 300 450 600" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
         <path d="M-10 400 L 1000 350" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
      </svg>

      {/* Markers */}
      {markers.map((marker, i) => (
        <div
          key={i}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group hover:z-50"
          style={{ left: `${marker.lng}%`, top: `${marker.lat}%` }}
        >
          {/* Pulsing ring for active drivers/jobs */}
          {(marker.status === "active" || marker.status === "transit") && (
            <div className="absolute inset-0 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 animate-ping opacity-60" />
          )}

          <div className={cn(
             "relative flex items-center justify-center size-8 rounded-full shadow-lg border-2 transition-transform group-hover:scale-125",
             marker.type === "driver" ? "bg-primary border-primary-foreground" : 
             marker.type === "job" ? "bg-blue-600 border-blue-200" : "bg-zinc-800 border-zinc-100",
             marker.status === "failed" && "bg-red-500 border-red-200"
          )}>
             {marker.type === "driver" && <Truck className="size-4 text-white" />}
             {marker.type === "job" && <MapPin className="size-4 text-white" />}
             {marker.type === "office" && <Navigation className="size-4 text-white rotate-45" />}
          </div>

          {/* Tooltip */}
          {marker.label && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background/95 backdrop-blur text-[10px] font-bold rounded border border-border shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
               {marker.label}
               {marker.status && <span className={cn(
                  "ml-1.5 size-1.5 inline-block rounded-full",
                  marker.status === "active" ? "bg-emerald-500" : "marker.status === 'failed' ? 'bg-red-500' : 'bg-primary'"
               )} />}
            </div>
          )}
        </div>
      ))}

      {/* Map UI Overlay */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
         <div className="flex flex-col gap-1 p-2 bg-background/80 backdrop-blur rounded-lg border border-border/50 shadow-lg">
            <div className="flex items-center gap-2 text-[10px] font-semibold">
               <div className="size-2 bg-primary rounded-full animate-pulse" />
               12 Drivers Online
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold opacity-70">
               <div className="size-2 bg-blue-500 rounded-full" />
               45 Active Deliveries
            </div>
         </div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
         <button className="size-8 bg-background/80 backdrop-blur rounded border border-border/50 flex items-center justify-center hover:bg-background transition-colors">
            <PlusCircle className="size-4" />
         </button>
      </div>

      <div className="absolute inset-0 pointer-events-none border-[1.5px] border-white/5 rounded-xl" />
    </div>
  )
}
