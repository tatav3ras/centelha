import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-lg border bg-card p-8 text-center text-card-foreground shadow-sm">
        <h1 className="text-2xl font-semibold">Centelha Frontend</h1>
        <p className="text-sm text-muted-foreground">
          Frontend iniciado com Next.js + React e shadcn/ui integrado.
        </p>
        <Button>Começar</Button>
      </div>
    </main>
  );
}
