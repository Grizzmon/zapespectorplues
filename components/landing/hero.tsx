import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradiente roxo de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_20%,theme(colors.brand/45%)_0%,transparent_55%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        {/* texto */}
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-extrabold leading-tight text-balance md:text-5xl lg:text-6xl">
            Fiscalise todos os Detalhes:{' '}
            <span className="text-brand-light">ESPECTOR PRO PLUS</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Todas as Funcionalidades desbloquedas, com uma experiência simples,
            monitore os seus contactos sem limite. Garanta o seu acesso agora.
          </p>
          <a
            href="#comprar"
            className="mt-8 inline-block rounded-full bg-accent-yellow px-8 py-4 text-base font-bold text-[#2b1d00] shadow-lg shadow-accent-yellow/20 transition hover:brightness-95 active:scale-[0.98]"
          >
            Quero o Acesso ESPECTOR PRO PLUS
          </a>
        </div>

        {/* imagem do produto */}
        <div className="flex justify-center md:justify-end">
          <div className="animate-float">
            <Image
              src="/images/app-pro-plus.png"
              alt="Ícone do aplicativo App PRO PLUS"
              width={420}
              height={420}
              priority
              className="h-auto w-64 drop-shadow-2xl md:w-80 lg:w-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
