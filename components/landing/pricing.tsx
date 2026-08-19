import { Reveal } from './reveal'

const CHECKOUT_URL = '#comprar'

export function Pricing() {
  return (
    <section id="comprar" className="px-5 py-8 pb-24">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-extrabold text-balance text-white md:text-5xl">
            Pronto para o próximo nível?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
            Garanta agora o seu acesso à versão PRO PLUS e aproveite tudo com
            desconto especial de lançamento.
          </p>

          <div className="mt-8">
            <p className="text-sm text-white/70 line-through">De R$ 347,90</p>
            <p className="font-display text-5xl font-extrabold text-white">
              R$ 89,90
            </p>
          </div>

         <a
  href="https://pay.hotmart.com/W107219861R"
  className="mt-8 inline-block rounded-full bg-accent-yellow px-10 py-4 text-base font-bold text-[#2b1d00] shadow-lg transition hover:brightness-95 active:scale-[0.98]"
>
  Garantir meu Acesso PRO PLUS
</a>

          <p className="mt-5 text-xs text-white/70">
            Pagamento 100% seguro · Garantia de 7 dias
          </p>
        </div>
      </Reveal>
    </section>
  )
}
