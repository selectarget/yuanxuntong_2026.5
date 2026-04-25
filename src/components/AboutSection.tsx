import { aboutContent } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad relative z-10 bg-white bg-[url('/images/picture/map2.png')] bg-cover bg-center bg-no-repeat pt-0 md:pt-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-white/60" />
      <div className="site-shell relative z-20">

        {/* Stats - Floating Over Hero */}
        <div className="relative z-30 mx-auto -mt-16 mb-16 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3 md:-mt-28 md:gap-8" data-reveal>
          {aboutContent.stats.map((stat, index) => (
            <div
              key={index}
              className="surface-card rounded-2xl border border-white bg-white/95 p-6 text-center shadow-xl shadow-[#0c2b57]/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0c2b57]/10 md:p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 text-4xl font-black tracking-tight text-[#004196] md:mb-3 md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium tracking-wide text-text-secondary md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="section-head" data-reveal="1">
          <h2 className="mx-auto w-fit bg-gradient-to-r from-[#0c2b57] via-[#1554a0] to-[#2d75c7] bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent md:text-5xl">
            {aboutContent.title}
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#9fbbe7]" />
            <span className="text-xs font-medium tracking-[0.34em] text-[#607ca8] uppercase">
              {aboutContent.subtitle}
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#9fbbe7]" />
          </div>
        </div>

        {/* Description */}
        <p className="section-copy content-measure mx-auto mb-10 whitespace-pre-line text-center md:mb-12" data-reveal="2">
          {aboutContent.description}
        </p>

        {/* Added CTA */}
        <div className="flex justify-center pb-8" data-reveal="3">
          <Link href="/about" className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1554a0] px-8 py-3.5 text-[15px] font-semibold text-[#1554a0] transition-all hover:bg-[#1554a0] hover:text-white hover:shadow-lg hover:shadow-[#1554a0]/20">
            了解源讯通
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
