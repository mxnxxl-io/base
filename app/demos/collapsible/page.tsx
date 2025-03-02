"use client"

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import Link from "next/link"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Collapsible Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="max-w-md mx-auto">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @shadcn/ui package details
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="border px-4 py-3 text-sm">
            The @shadcn/ui package is a collection of reusable components built using Radix UI and Tailwind CSS.
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="border px-4 py-3 text-sm">
              It includes a variety of UI components like buttons, cards, dialogs, and more.
            </div>
            <div className="border px-4 py-3 text-sm">
              All components are designed to be accessible, customizable, and work well together.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
} 