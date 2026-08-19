export function Header() {
  return (
    <header className="w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <span className="font-display text-xl font-extrabold tracking-tight text-brand-light">
          Espector pro plus
        </span>
        <a
          href="#comprar"
          className="hidden rounded-full bg-accent-yellow px-5 py-2 text-sm font-bold text-[#2b1d00] transition hover:brightness-95 sm:inline-block"
        >
          Obter Agora
        </a>
      </div>
    </header>
  )
}
