import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, ArrowRight, PhoneCall, ShieldCheck, Zap, Clock, Users } from "lucide-react";

// Service scope items
const serviceItems = [
  "风电场无功控制能力测试",
  "风电机组低电压穿越测试",
  "风电场一次调频性能及惯量响应性能测试",
  "风电机组电网适应性测试",
  "风电场电能质量测试",
  "风电场SVG耐频耐压性能测试",
  "风电机组功率特性测试",
  "风电场AGC性能测试",
  "风电场有功控制能力测试",
  "风电场AVC性能测试",
  "风电机组高电压穿越测试",
  "风电场无功补偿装置性能测试",
];

export default function WindServicePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[360px] overflow-hidden md:h-[480px]">
        <Image
          src="/images/zhdz_d_09.jpg"
          alt="风电场并网性能检测服务"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c2b57]/80 via-[#1554a0]/60 to-[#0e2a57]/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <div className="text-center">
            <span className="fade-up mb-4 block text-sm font-semibold tracking-[0.2em] text-[#9fbbe7] uppercase md:text-base">WIND POWER TESTING</span>
            <h1 className="fade-up-delay mb-6 px-4 text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
              风电场并网性能检测服务
            </h1>
            <p className="fade-up-delay-2 mx-auto max-w-2xl px-4 text-base font-medium leading-relaxed text-white/90 drop-shadow md:text-lg">
              做一流的智慧能源检测服务商，为您的新能源场站平稳入网保驾护航。
            </p>
          </div>
        </div>
        {/* Subtle bottom curve/fade */}
        <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Breadcrumb */}
      <div className="relative z-10 border-b border-border/50 bg-white py-3">
        <div className="site-shell">
          <span className="text-sm font-medium text-text-tertiary">
            <Link href="/" className="transition-colors hover:text-brand-primary">首页</Link>
            <span className="mx-2 opacity-50">&gt;</span>
            <Link href="/#services" className="transition-colors hover:text-brand-primary">业务领域</Link>
            <span className="mx-2 opacity-50">&gt;</span>
            <span className="text-brand-primary">风电场检测</span>
          </span>
        </div>
      </div>

      {/* Service Introduction */}
      <section className="section-pad bg-white">
        <div className="site-shell">
          {/* Magazine Intro Block */}
          <div className="mb-16 grid items-center gap-8 lg:grid-cols-12 lg:gap-16" data-reveal>
            <div className="lg:col-span-5">
              <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-[#1a63c4] uppercase">
                WHY IT MATTERS
              </span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0c2b57] md:text-4xl">
                为什么电网级<br />
                <span className="bg-gradient-to-r from-[#1a63c4] to-[#3a8ceb] bg-clip-text text-transparent">性能检测</span> 至关重要？
              </h2>
              <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1a63c4] to-transparent" />
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border-l-4 border-[#1a63c4] bg-[#f8fafc] p-6 text-base leading-loose text-text-secondary shadow-sm md:p-8 md:text-lg">
                大规模新能源电站接入电力系统，其是否符合国家标准将直接决定电网的安全稳定。通过对场站的<span className="font-semibold text-[#1a63c4]">有/无功功率控制能力、电能质量、以及故障电压穿越</span>等一系列核心能力进行严格验证，我们帮助电网精确掌握场站运行状态，同时助力您的场站快速适应最新合规要求，实现完美并网。
              </div>
            </div>
          </div>

          {/* Service Scope Grid */}
          <div className="mt-8" data-reveal="1">
            <div className="mb-10 text-center md:mb-14">
              <h3 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">专属服务范围</h3>
              <p className="mt-3 font-medium text-text-secondary">全面覆盖风电全生命周期内的十二项核心性能测试</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-[0_4px_20px_rgb(0_0_0_/_3%)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b8d2ff] hover:bg-gradient-to-br hover:from-white hover:to-[#f8fbff] hover:shadow-[0_12px_28px_rgb(26_99_196_/_12%)]"
                  data-reveal="2"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f5ff] transition-colors duration-300 group-hover:bg-[#1a63c4]">
                    <CheckCircle className="h-5 w-5 text-[#1a63c4] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-[15px] font-medium leading-snug text-text-primary transition-colors duration-300 group-hover:text-[#0c2b57]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Contrast Banner CTA */}
      <section className="relative overflow-hidden bg-[#0c2b57] py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#ffffff] blur-[100px]" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3a8ceb] blur-[120px]" />
        </div>
        <div className="site-shell relative z-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12" data-reveal>
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                您的风电场即将面临严苛的并网准入？
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                立刻连线源讯通高级技术专家，获取针对您场站特征的 <strong className="font-semibold text-white">定制化检测评估方案与报价</strong>。不畏标准升级，我们助您一次通关。
              </p>
            </div>
            <div className="shrink-0" data-reveal="1">
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0c2b57] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#f8fbff] hover:shadow-2xl hover:shadow-white/20"
              >
                <PhoneCall className="h-5 w-5 text-[#1a63c4]" />
                获取免费专家评估
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages (Replaces Related Cases) */}
      <section className="section-pad bg-surface-soft">
        <div className="site-shell">
          <div className="mb-12 text-center" data-reveal>
            <h3 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              选择源讯通的核心优势
            </h3>
            <p className="mt-4 text-text-secondary">为什么数百家新能源企业选择我们作为并网护航者？</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal="1">
            {[
              {
                icon: ShieldCheck,
                title: "权威资质认证",
                desc: "拥有 CMA 检验检测机构资质与 CNAS 国家级实验室双重认可，报告全网通行。",
              },
              {
                icon: Users,
                title: "硕博专家团队",
                desc: "核心技术骨干 100% 具备硕士及以上学历，多年电科院及头部企业实战经验。",
              },
              {
                icon: Zap,
                title: "海量实战积累",
                desc: "累计完成 500+ 新能源场站性能测试，熟知各地电网落地细则与审核偏好。",
              },
              {
                icon: Clock,
                title: "极速响应交付",
                desc: "7×12 小时驻场极速响应，采用标准化测试流程，确保检测严谨与报告准时合规交付。",
              },
            ].map((adv, index) => (
              <div key={index} className="surface-card hover-lift flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f8ff]">
                  <adv.icon className="h-8 w-8 text-[#1a63c4]" />
                </div>
                <h4 className="mb-3 text-lg font-bold text-text-primary">{adv.title}</h4>
                <p className="text-sm leading-relaxed text-text-secondary">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

