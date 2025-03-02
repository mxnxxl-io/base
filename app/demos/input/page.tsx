import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function InputDemo() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Input Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="disabled">Disabled</Label>
          <Input type="text" id="disabled" placeholder="Disabled input" disabled />
        </div>
        
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="with-icon">With Icon</Label>
          <div className="relative">
            <Input type="text" id="with-icon" placeholder="Search..." className="pl-8" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
} 