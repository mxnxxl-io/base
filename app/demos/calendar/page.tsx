"use client"

import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import { useState } from "react"

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Calendar Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border"
        />
      </div>
      
      <div className="text-center mt-4">
        Selected date: {date?.toDateString()}
      </div>
    </div>
  )
} 