import Image from "next/image";
import { contactInfo } from "@/lib/data";
import { Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#17233d] pt-[var(--space-section-y-sm)] pb-8 md:pb-10">
      <div className="pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-[#0063ff]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-[#4f50e9]/20 blur-3xl" />
      <div className="site-shell">
        <div className="surface-card flex flex-col items-center justify-between gap-8 border-white/10 bg-white/5 p-8 backdrop-blur-lg md:flex-row md:p-10" data-reveal>
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              联系我们
            </h2>
            <p className="mt-3 mb-7 text-sm text-white/80 md:text-base">
              欢迎电话咨询，专业团队为您服务
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#004196] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
                data-reveal="1"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone}
              </a>
              <a
                href={`tel:${contactInfo.phone2?.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-white/10"
                data-reveal="2"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone2}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <Image
              src="/images/159548770764305dba7f0981003b5.png"
              alt="联系我们"
              width={200}
              height={200}
              className="object-contain opacity-85"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
