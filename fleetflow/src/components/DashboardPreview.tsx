import { Activity, Clock, Package, Truck, User } from "lucide-react"

export function DashboardPreview() {
  return (
    <div className="w-full h-full bg-[#0F2238] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex font-sans">
      {/* Mini Sidebar */}
      <div className="w-12 border-right border-white/5 bg-[#0A1829] flex flex-col items-center py-4 gap-4">
        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
           <Activity className="w-4 h-4 text-orange-500" />
        </div>
        {[Truck, Package, User, Clock].map((Icon, i) => (
          <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
            <Icon className="w-4 h-4 text-white/30" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-10 border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-white/50 tracking-wider">SYSTEM LIVE: 142 ACTIVE DRIVERS</span>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-12 bg-white/5 rounded" />
            <div className="h-4 w-12 bg-white/5 rounded" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 p-3 grid grid-cols-12 gap-3 overflow-hidden">
          {/* Map Section */}
          <div className="col-span-8 flex flex-col gap-3">
            <div className="flex-1 bg-[#162C44] rounded-lg relative overflow-hidden border border-white/5 group">
              {/* Decorative Map Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[size:16px_16px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
              
              {/* Simulated Map Path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <path d="M50 250 L150 180 L250 200 L350 100" stroke="#F97316" strokeWidth="2" strokeDasharray="4 2" fill="none" className="opacity-40" />
                <circle cx="50" cy="250" r="4" fill="#F97316" />
                <circle cx="350" cy="100" r="4" fill="#F97316" />
                
                {/* Moving Truck Pin */}
                <g className="animate-[move_10s_linear_infinite]">
                   <circle cx="0" cy="0" r="8" fill="#F97316" className="opacity-20" />
                   <circle cx="0" cy="0" r="3" fill="#F97316" />
                </g>
                <style>{`
                  @keyframes move {
                    0% { transform: translate(50px, 250px); }
                    33% { transform: translate(150px, 180px); }
                    66% { transform: translate(250px, 200px); }
                    100% { transform: translate(350px, 100px); }
                  }
                `}</style>
              </svg>

              {/* Floating Map UI */}
              <div className="absolute top-2 left-2 p-2 bg-[#0F2238]/80 backdrop-blur-md rounded-md border border-white/10">
                 <p className="text-[7px] text-white/40 uppercase font-black tracking-widest">Active Route</p>
                 <p className="text-[9px] font-bold text-white mt-0.5">ZONE-7: BAY AREA</p>
              </div>
            </div>

            {/* KPI Row */}
            <div className="h-14 grid grid-cols-3 gap-3">
              {[
                { l: "ON-TIME", v: "98.2%", c: "text-emerald-400" },
                { l: "FAILED", v: "0.2%", c: "text-red-400" },
                { l: "AVG SPEED", v: "42km/h", c: "text-blue-400" },
              ].map((k) => (
                <div key={k.l} className="bg-[#162C44] rounded-lg border border-white/5 p-2 flex flex-col justify-center">
                  <p className="text-[6px] text-white/40 uppercase font-bold">{k.l}</p>
                  <p className={`text-xs font-black mt-0.5 ${k.c}`}>{k.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Queue */}
          <div className="col-span-4 bg-[#0A1829] rounded-lg border border-white/5 flex flex-col overflow-hidden">
            <div className="p-2 border-b border-white/5 bg-white/5">
              <p className="text-[8px] font-black text-white/60 uppercase">Operational Queue</p>
            </div>
            <div className="flex-1 p-2 space-y-2 overflow-hidden">
              {[
                { id: "JB-992", s: "In Transit", d: "Mike J.", c: "bg-orange-500" },
                { id: "JB-991", s: "Dispatched", d: "Sarah C.", c: "bg-blue-500" },
                { id: "JB-990", s: "Pending", d: "Bruce W.", c: "bg-yellow-500" },
                { id: "JB-989", s: "In Transit", d: "Ellen R.", c: "bg-orange-500" },
              ].map((j) => (
                <div key={j.id} className="p-1.5 rounded-md border border-white/5 bg-[#162C44]/50 hover:bg-[#162C44] transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[7px] font-mono text-orange-500 font-black">{j.id}</span>
                    <div className={`px-1 rounded-[2px] ${j.c}/10`}>
                       <span className={`text-[5px] font-bold uppercase ${j.c.replace('bg-', 'text-')}`}>{j.s}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-white/10" />
                    <span className="text-[6px] text-white/40 italic">Driver: {j.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
