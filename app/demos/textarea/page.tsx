import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function TextareaDemo() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Textarea Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        
        <div className="grid w-full gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea placeholder="Tell us about yourself" id="bio" />
          <p className="text-sm text-muted-foreground">
            Your bio will be displayed on your public profile.
          </p>
        </div>
        
        <div className="grid w-full gap-1.5">
          <Label htmlFor="disabled">Disabled</Label>
          <Textarea placeholder="This textarea is disabled" id="disabled" disabled />
        </div>
      </div>
    </div>
  )
} 