import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight, Download, Filter, MoreHorizontal, PlusCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const jobs = [
  { id: "JOB-4291", customer: "Acme Logistics", pickup: "San Francisco, CA", delivery: "San Jose, CA", driver: "Mike Jenkins", status: "In Transit", eta: "12 mins", created: "Today, 08:30 AM" },
  { id: "JOB-4292", customer: "Globex Corp", pickup: "Oakland, CA", delivery: "Fremont, CA", driver: "Sarah Connor", status: "Pending", eta: "--", created: "Today, 09:12 AM" },
  { id: "JOB-4289", customer: "Stark Industries", pickup: "Los Angeles, CA", delivery: "Malibu, CA", driver: "Tony Stark", status: "Failed", eta: "DELAYED", created: "Yesterday, 11:45 PM" },
  { id: "JOB-4285", customer: "Wayne Enterprises", pickup: "Gotham City, NJ", delivery: "Metropolis, NY", driver: "Bruce Wayne", status: "Delivered", eta: "--", created: "Yesterday, 04:20 PM" },
  { id: "JOB-4281", customer: "LexCorp", pickup: "Metropolis, NY", delivery: "Gotham City, NJ", driver: "Lex Luthor", status: "Delivered", eta: "--", created: "2 days ago" },
  { id: "JOB-4278", customer: "Umbrella Corp", pickup: "Raccoon City", delivery: "Chicago, IL", driver: "Albert Wesker", status: "In Transit", eta: "1.5h", created: "Today, 06:15 AM" },
]

export default function JobsListPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jobs Management</h1>
          <p className="text-muted-foreground mt-1">Full lifecycle tracking of all delivery operations.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="sm">
              <Download className="size-4 mr-2" />
              Export CSV
           </Button>
           <Button size="sm">
              <PlusCircle className="size-4 mr-2" />
              New Delivery
           </Button>
        </div>
      </div>

      <Card className="border-border/40 shadow-xl shadow-black/5 overflow-hidden">
        <CardHeader className="bg-muted/5 border-b border-border/30">
           <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div className="relative flex-1 max-w-md">
                 <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                 <Input placeholder="Search job ID, customer, or driver..." className="pl-10 h-11 bg-background border-border/30" />
              </div>
              <div className="flex items-center gap-2">
                 <Button variant="outline" size="sm" className="h-11 px-4 border-border/30">
                    <Filter className="size-4 mr-2" />
                    Filters
                 </Button>
                 <Badge variant="secondary" className="px-3 h-11 flex items-center bg-background border border-border/30 text-xs font-bold text-muted-foreground/80 lowercase">
                    {jobs.length} total tasks
                 </Badge>
              </div>
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/10">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[100px] font-bold">Job ID</TableHead>
                <TableHead className="font-bold">Customer</TableHead>
                <TableHead className="font-bold">Pickup Addr.</TableHead>
                <TableHead className="font-bold">Delivery Addr.</TableHead>
                <TableHead className="font-bold">Driver</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="text-right font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id} className="group hover:bg-accent/5 transition-colors h-16">
                  <TableCell className="font-mono text-xs font-bold text-primary">{job.id}</TableCell>
                  <TableCell className="font-semibold">{job.customer}</TableCell>
                  <TableCell className="text-xs text-muted-foreground max-w-[150px] truncate">{job.pickup}</TableCell>
                  <TableCell className="text-xs text-muted-foreground max-w-[150px] truncate">{job.delivery}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary ring-1 ring-primary/20">
                        {job.driver.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-xs font-medium">{job.driver}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={job.status === "In Transit" ? "default" : job.status === "Pending" ? "secondary" : job.status === "Failed" ? "destructive" : "outline"} className="h-5 text-[10px] font-bold">
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                     <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="size-8 opacity-0 group-hover:opacity-100 transition-opacity">
                           <ChevronRight className="size-4" />
                        </Button>
                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="size-8">
                                 <MoreHorizontal className="size-4" />
                              </Button>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent align="end" className="w-[160px]">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Download POD</DropdownMenuItem>
                              <DropdownMenuItem>Edit Job</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Cancel Job</DropdownMenuItem>
                           </DropdownMenuContent>
                        </DropdownMenu>
                     </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
