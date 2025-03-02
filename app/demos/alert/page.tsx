import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "lucide-react"
import Link from "next/link"

export default function AlertDemo() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Alert Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>
      
      <div className="max-w-xl mx-auto space-y-6">
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            This is a default alert — check it out!
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Destructive Alert</AlertTitle>
          <AlertDescription>
            This is a destructive alert — be careful!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
} 