import Link from "next/link";
export default function DemosPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-5 text-center uppercase">
        Shadcn UI Component Demos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
        <DemoCard title="Accordion" href="/demos/accordion" />
        <DemoCard title="Alert" href="/demos/alert" />
        <DemoCard title="Alert Dialog" href="/demos/alert-dialog" />
        <DemoCard title="Avatar" href="/demos/avatar" />
        <DemoCard title="Badge" href="/demos/badge" />
        <DemoCard title="Button" href="/demos/button" />
        <DemoCard title="Calendar" href="/demos/calendar" />
        <DemoCard title="Card" href="/demos/card" />
        <DemoCard title="Checkbox" href="/demos/checkbox" />
        <DemoCard title="Collapsible" href="/demos/collapsible" />
        {/* <DemoCard title="Command" href="/demos/command" /> */}
        <DemoCard title="Dialog" href="/demos/dialog" />
        <DemoCard title="Drawer" href="/demos/drawer" />
        <DemoCard title="Dropdown Menu" href="/demos/dropdown-menu" />
        <DemoCard title="Form" href="/demos/form" />
        <DemoCard title="Input" href="/demos/input" />
        <DemoCard title="Select" href="/demos/select" />
        <DemoCard title="Tabs" href="/demos/tabs" />
        <DemoCard title="Textarea" href="/demos/textarea" />
        <DemoCard title="Toggle" href="/demos/toggle" />
        <DemoCard title="Tooltip" href="/demos/tooltip" />
      </div>
    </div>
  );
}

function DemoCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block border p-4 hover:bg-muted transition-colors">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground mt-2">View {title} demo</p>
    </Link>
  );
}
