"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export default function SelectDemo() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Select Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="mexico">Mexico</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="france">France</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
              <SelectItem value="spain">Spain</SelectItem>
              <SelectItem value="italy">Italy</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
} 