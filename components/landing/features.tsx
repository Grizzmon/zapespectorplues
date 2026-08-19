import { Reveal } from './reveal'

const features = [
  {
    title: 'Simples de usar',
    desc: 'Tudo pronto em poucos cliques. Uma experiência direta, sem complicação e feita para o seu dia a dia.',
  },
  {
    title: 'Rápido e completo',
    desc: 'Todos os recursos da versão PRO PLUS reunidos em um só lugar, com desempenho de sobra.',
  },
  {
    title: 'Acesso imediato',
    desc: 'Compre e comece a usar na hora. Sem espera, com suporte e atualizações incluídas.',
  },
]

export function Features() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-balance md:text-4xl">
            O que você <span className="text-brand-light">recebe</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand/50">
                <h3 className="font-display text-xl font-bold text-brand-light">
                  {f.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
