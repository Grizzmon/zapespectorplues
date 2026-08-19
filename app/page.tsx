import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Pricing } from '@/components/landing/pricing'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <Pricing />

      <footer className="border-t border-border px-5 py-8 text-center">
        <p className="font-display text-sm font-bold text-brand-light">
          App PRO PLUS
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
          © {new Date().getFullYear()} App PRO PLUS. Todos os direitos
          reservados.
        </p>
      </footer>
    </main>
  )
}
