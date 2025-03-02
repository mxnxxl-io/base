"use client"

import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"

export default function CheckboxDemo() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Checkbox Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={isChecked} onCheckedChange={setIsChecked} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <label
            htmlFor="disabled"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled checkbox
          </label>
        </div>
        
        <p className="text-sm text-muted-foreground">
          {isChecked ? "You accepted the terms and conditions" : "Please accept the terms and conditions"}
        </p>
      </div>
    </div>
  )
} 