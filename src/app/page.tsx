import { Card } from "./_ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Array.from({ length: 10 }, (_, index) => (
        <Card key={index} index={index} />
      ))}
    </main>
  );
}
