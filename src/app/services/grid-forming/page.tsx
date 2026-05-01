import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, ArrowRight, PhoneCall, ShieldCheck, Zap, Clock, Users } from "lucide-react";

const serviceItems = [
  "惯量响应与支撑测试",
  "一次调频能力评估",
  "高低电压穿越及连续穿越测试",
  "频率电压主动支撑能力验证",
  "短路容量支撑能力测试",
  "阻抗特性与宽频振荡测试",
  "黑启动能力及并网测试",
  "电能质量与谐波适应性测试",
  "有功无功控制响应测试",
  "并网/离网平滑切换验证",
  "多机并联运行特性测试",
  "电网适应性及涉网合规测试",
];

export default function GridFormingStorageServicePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      {/* Hero Banner */}
      <section className="relative h-[360px] overflow-hidden md:h-[480px]">
        <Image src="/images/zhdz_d_13.jpg" alt="构网型储能检测服务" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c2b57]/80 via-[#1554a0]/60 to-[#0e2a57]/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <div className="text-center">
            <span className="fade-up mb-4 block text-sm font-semibold tracking-[0.2em] text-[#9fbbe7] uppercase md:text-base">GRID-FORMING STORAGE</span>
            <h1 className="fade-up-delay mb-6 px-4 text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
              构网型储能系统检测服务
            </h1>
            <p className="fade-up-delay-2 mx-auto max-w-2xl px-4 text-base font-medium leading-relaxed text-white/90 drop-shadow md:text-lg">
              做一流的智慧能源检测服务商，为您的新能源场站平稳入网保驾护航。
            </p>
          </div>
        </div>
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
            <span className="text-brand-primary">构网型储能检测</span>
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
                为什么构网型储能<br />
                <span className="bg-gradient-to-r from-[#1a63c4] to-[#3a8ceb] bg-clip-text text-transparent">性能评估</span> 至关重要？
              </h2>
              <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1a63c4] to-transparent" />
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-2xl border-l-4 border-[#1a63c4] bg-[#f8fafc] p-6 text-base leading-loose text-text-secondary shadow-sm md:p-8 md:text-lg">
                构网型储能系统在新型电力系统中扮演着至关重要的角色。根据最新并网技术规范，构网型储能需具备主动支撑电网电压和频率的能力。通过对储能系统进行全面的<span className="font-semibold text-[#1a63c4]">构网性能测试与涉网试验</span>验证，能够精准评估其惯量支撑、短路容量及黑启动能力，确保构网型储能电站满足国家及行业标准的并网强制技术约束。
              </div>
            </div>
          </div>

          {/* Service Scope Grid */}
          <div className="mt-8" data-reveal="1">
            <div className="mb-10 text-center md:mb-14">
              <h3 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">专属服务范围</h3>
              <p className="mt-3 font-medium text-text-secondary">全面覆盖构网型储能并网及涉网测试关键指标</p>
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
                您的构网型储能项目需要并网涉网测试？
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

