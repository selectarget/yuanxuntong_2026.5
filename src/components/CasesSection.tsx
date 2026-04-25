import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function CasesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="site-shell">
        {/* Section Header */}
        <div className="section-head" data-reveal>
          <h2 className="mx-auto w-fit bg-gradient-to-r from-[#0c2b57] via-[#1554a0] to-[#2d75c7] bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent md:text-5xl">
            合作案例
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#9fbbe7]" />
            <span className="text-xs font-medium tracking-[0.34em] text-[#607ca8] uppercase">
              CASES
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#9fbbe7]" />
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal="1">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={caseStudy.id}
              href={caseStudy.link}
              className={`group relative block overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0_0_0_/_6%)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0_0_0_/_12%)] ${index === 0
                  ? "h-[280px] md:col-span-2 md:h-[340px] lg:col-span-2 lg:h-[380px]"
                  : "h-[280px] md:h-[340px] lg:h-[380px]"
                }`}
              data-reveal="2"
            >
              {/* Image */}
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay with glassmorphism gradient */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#004196]/80 to-[#0e2a57]/95 p-6 opacity-0 backdrop-blur-[2px] transition-all duration-500 ease-out group-hover:opacity-100">
                <h3 className="mb-3 translate-y-4 text-center text-xl font-bold tracking-tight text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
                  {caseStudy.title}
                </h3>
                <p className="translate-y-4 text-center text-[15px] leading-relaxed text-white/90 transition-transform duration-500 delay-75 ease-out group-hover:translate-y-0 max-w-[400px]">
                  {caseStudy.description}
                </p>
                <div className="mt-6 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 delay-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              {/* Title at bottom (visible when not hovering) */}
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="line-clamp-2 text-lg font-medium tracking-wide text-white drop-shadow-md">
                  {caseStudy.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Added CTA */}
        <div className="mt-14 flex justify-center pb-2" data-reveal="3">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1554a0] px-8 py-3.5 text-[15px] font-semibold text-[#1554a0] transition-all hover:bg-[#1554a0] hover:text-white hover:shadow-lg hover:shadow-[#1554a0]/20">
            联系我们索取完整项目案例库
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
