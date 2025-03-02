"use client"

import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ToggleDemo() {
  const [boldPressed, setBoldPressed] = useState(false)
  const [italicPressed, setItalicPressed] = useState(false)
  const [underlinePressed, setUnderlinePressed] = useState(false)

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Toggle Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <Toggle 
            pressed={boldPressed} 
            onPressedChange={setBoldPressed}
            aria-label="Toggle bold"
          >
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle 
            pressed={italicPressed} 
            onPressedChange={setItalicPressed}
            aria-label="Toggle italic"
          >
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle 
            pressed={underlinePressed} 
            onPressedChange={setUnderlinePressed}
            aria-label="Toggle underline"
          >
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
        
        <div className="flex items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
            Italic
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
            Bold
          </Toggle>
        </div>
        
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Toggle small">
            <Bold className="h-3 w-3" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Bold className="h-5 w-5" />
          </Toggle>
        </div>
        
        <div className="flex items-center gap-2">
          <Toggle disabled aria-label="Toggle disabled">
            <Bold className="h-4 w-4" />
            Disabled
          </Toggle>
        </div>
      </div>
    </div>
  )
} 