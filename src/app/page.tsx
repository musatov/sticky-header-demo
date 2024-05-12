import { Card } from "./_ui/card";
import { StickyHeader } from "./_ui/stickty-header";

export default function Home() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-between py-24">
      <div className="w-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos
        quod, doloribus, quidem, tempore quae doloremque voluptates magnam
        necessitatibus autem quibusdam. Quo, voluptatem. Quisquam, quibusdam
        voluptas. Quisquam, quibusdam voluptas.
      </div>
      <StickyHeader title="Sticky header" />
      {Array.from({ length: 10 }, (_, index) => (
        <Card key={index} index={index} />
      ))}
    </main>
  );
}
