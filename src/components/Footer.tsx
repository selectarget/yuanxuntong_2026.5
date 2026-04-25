import Image from "next/image";
import Link from "next/link";
import { footerSections, companyInfo, contactInfo } from "@/lib/data";
import { Mail, Phone, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061224] text-white/80">
      {/* Aurora Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1a63c4] to-[#3a8ceb] opacity-70" />

      {/* Background Subtle Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#1a63c4]/10 blur-[130px]" />

      <div className="site-shell relative z-10 pb-6 pt-16">
        {/* Footer Grid */}
        <div className="mb-10 grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-12">

          {/* Brand Info (Left) */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo-white.png"
                alt={companyInfo.name}
                width={200}
                height={40}
                className="h-10 w-auto object-contain drop-shadow-md"
              />
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-white/60">
              致力于为大规模新能源及储能电站提供最权威、高效的并网性能检测与评估服务，帮助您的电力系统稳固基盘、适应未来规则。<br />我们拥有 CMA 与 CNAS 双重国家级认证。
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <span className="flex items-center gap-2 text-[14px] font-bold tracking-wide text-white/90 drop-shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-[#22c55e]" /> CMA 检验
              </span>
              <span className="flex items-center gap-2 text-[14px] font-bold tracking-wide text-white/90 drop-shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-[#22c55e]" /> CNAS 认证
              </span>
            </div>
          </div>

          {/* Nav Links (Middle) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            {footerSections.slice(0, 2).map((section, index) => (
              <div key={index}>
                <h4 className="mb-6 text-base font-bold tracking-widest text-white">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="group flex w-fit items-center text-sm text-white/60 transition-colors duration-300 hover:text-white"
                      >
                        <ChevronRight className="mr-1 h-3.5 w-3.5 origin-left scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:text-[#3a8ceb]" />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Badges (Right) */}
          <div className="lg:col-span-4 lg:pl-4">
            <h4 className="mb-6 text-base font-bold tracking-widest text-white">联系我们</h4>

            <ul className="mb-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex shrink-0 items-center justify-center rounded-full bg-[#1a63c4]/10 p-2 ring-1 ring-white/5">
                  <Phone className="h-4 w-4 text-[#3a8ceb]" />
                </div>
                <div>
                  <span className="mb-1 block text-xs text-white/40 uppercase tracking-widest">服务热线 (7x12h)</span>
                  <span className="font-mono text-xl font-medium tracking-tight text-white">{contactInfo.phone}</span>
                </div>
              </li>

              <li className="flex items-start gap-4 text-sm text-white/70">
                <div className="mt-1 flex shrink-0 items-center justify-center rounded-full bg-[#1a63c4]/10 p-2 ring-1 ring-white/5">
                  <MapPin className="h-4 w-4 text-[#3a8ceb]" />
                </div>
                <div className="leading-loose">
                  <span className="block font-medium text-white/90">山东总部</span>
                  {contactInfo.address}
                </div>
              </li>

              <li className="flex items-center gap-4 text-sm text-white/70">
                {/*<div className="flex shrink-0 items-center justify-center rounded-full bg-[#1a63c4]/10 p-2 ring-1 ring-white/5">
                  <Mail className="h-4 w-4 text-[#3a8ceb]" />
                </div>
                {/*<span className="font-medium text-white/90 drop-shadow-sm">contact@yuanxuntong.com</span>*/}
              </li>
            </ul>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm font-medium text-white/50 tracking-wide md:text-left">
            {companyInfo.copyright}
            <span className="mx-3 hidden text-white/20 md:inline-block">|</span>
            <span className="mt-2 block md:mt-0 md:inline-block">Powered by {companyInfo.nameEn}</span>
          </p>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white"
          >
            {companyInfo.icp}
          </a>
        </div>
      </div>
    </footer>
  );
}
