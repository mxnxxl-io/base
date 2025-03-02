import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RefreshCcwIcon } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Button Demo</h1>
        <Link href="/demos" className="text-sm text-muted-foreground hover:underline">
          Back to Demos
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>

        <Button disabled>Disabled</Button>

        <Button>
          <RefreshCcwIcon className="mr-2 h-4 w-4" /> With Icon
        </Button>

        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}
