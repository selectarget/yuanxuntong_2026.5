import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowRight, Wind, Sun, BatteryCharging, Network, Gauge, ShieldCheck } from "lucide-react";
export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-surface-soft">
      <div className="site-shell">
        {/* Section Header */}
        <div className="section-head" data-reveal>
          <h2 className="mx-auto w-fit bg-gradient-to-r from-[#0c2b57] via-[#1554a0] to-[#2d75c7] bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent md:text-5xl">
            业务领域
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#9fbbe7]" />
            <span className="text-xs font-medium tracking-[0.34em] text-[#607ca8] uppercase">
              SERVICES
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#9fbbe7]" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal="1">
          {services.map((service, index) => {
            const ServiceIcons = [Wind, Sun, BatteryCharging, Network, Gauge, ShieldCheck];
            const Icon = ServiceIcons[index % ServiceIcons.length];
            return (
            <div
              key={service.id}
              className="surface-card group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl border border-[#e5eeff] bg-white p-7 text-left shadow-[0_8px_30px_rgb(12_36_74_/_4%)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b8d2ff] hover:shadow-[0_24px_50px_rgb(12_36_74_/_10%)] md:p-8"
              data-reveal="2"
            >
              {/* Background Watermark Icon */}
              <div className="absolute -right-6 -top-6 z-0 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.05]">
                <Icon className="h-44 w-44 text-[#0c2b57]" />
              </div>

              {/* Top meta */}
              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4f8ff] to-[#eaf2ff] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:from-[#eaf2ff] group-hover:to-[#d8e6ff]">
                  <Icon className="h-6 w-6 text-[#1a63c4]" />
                </div>
                <span className="text-4xl font-black text-[#f0f5ff] transition-colors duration-300 group-hover:text-[#eaf2ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 mb-4 bg-gradient-to-r from-[#0d2b57] to-[#1f5da9] bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mb-8 line-clamp-3 text-[15px] leading-relaxed tracking-[0.01em] text-[#5a7194]">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.link}
                className="relative z-10 mt-auto inline-flex w-fit items-center gap-2 text-[14px] font-semibold tracking-wide text-[#0f3f82] transition-colors duration-300 group-hover:text-[#1a63c4]"
              >
                了解更多
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )})}
        </div>

        {/* Added CTA */}
        <div className="mt-14 flex justify-center pb-2" data-reveal="3">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1554a0] px-8 py-3.5 text-[15px] font-semibold text-[#1554a0] transition-all hover:bg-[#1554a0] hover:text-white hover:shadow-lg hover:shadow-[#1554a0]/20">
            获取您的专属并网检测解决方案
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
