import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contactInfo } from "@/lib/data";
import { MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[260px] overflow-hidden md:h-[340px]">
        <Image
          src="/images/zhdz_d_13.jpg"
          alt="联系我们"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="section-eyebrow mb-2 block text-white/80">CONTACT US</span>
            <h1 className="fade-up text-3xl font-bold text-white drop-shadow-lg md:text-5xl">联系我们</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-y border-border/70 bg-white/90 py-3">
        <div className="site-shell">
          <span className="text-sm text-text-tertiary">首页 &gt; 联系我们</span>
        </div>
      </div>

      {/* Contact Content */}
      <section className="section-pad bg-white">
        <div className="site-shell">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Left - Contact Info */}
            <div className="surface-card self-start p-7 md:p-10 lg:sticky lg:top-28" data-reveal>
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-brand-primary md:text-3xl">联系方式</h2>
                  <p className="mt-2 text-sm text-text-secondary">工作日快速响应，建议优先电话或官方微信联系。</p>
                </div>
                <span className="hidden rounded-full bg-[#eaf2ff] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#1b4f96] md:inline-block">
                  7×12 H
                </span>
              </div>

              <div className="mb-6 rounded-2xl border border-transparent bg-gradient-to-br from-[#f6f9ff] to-[#eaf2ff] p-5 shadow-sm transition-all hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <Phone className="h-5 w-5 text-[#004196]" />
                  </div>
                  <p className="text-xs font-medium tracking-[0.14em] text-[#5d79a6] uppercase">主联系电话</p>
                </div>
                <a
                  href={`tel:${contactInfo.phone?.replace(/-/g, "")}`}
                  className="mt-1 inline-block text-3xl font-bold tracking-[0.01em] text-[#0e2a57] transition-colors hover:text-[#1a63c4]"
                >
                  {contactInfo.phone}
                </a>
                <p className="mt-2 text-sm font-medium text-[#607ca8] opacity-90">联系人：杨经理</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/40 bg-white/90 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#004196]/5">
                    <Clock className="h-5 w-5 text-[#004196]" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary">工作时间</p>
                  <p className="mt-1 max-w-[12rem] text-sm text-text-secondary">周一至周五 09:00-18:00</p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-white/90 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#004196]/5">
                    <MapPin className="h-5 w-5 text-[#004196]" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary">公司地址</p>
                  <p className="mt-1 text-sm text-text-secondary">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Right - Service Process and Official WeChat */}
            <div className="surface-card h-full overflow-hidden p-0" data-reveal="1">
              {/* Service Process */}
              <div className="border-b border-border/70 bg-surface-soft p-6 md:p-8" data-reveal="2">
                <h3 className="mb-2 text-center text-2xl font-semibold tracking-tight text-brand-primary md:text-3xl">服务流程</h3>
                <p className="mx-auto mb-5 max-w-[42ch] text-center text-sm text-text-secondary">
                  标准化流程保障沟通效率与交付质量，全过程可追踪、可复盘。
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { step: "01", title: "需求沟通", desc: "确认项目背景、目标与交付范围" },
                    { step: "02", title: "方案评估", desc: "输出技术路径与实施节点计划" },
                    { step: "03", title: "现场检测", desc: "按规范执行采集与性能验证" },
                    { step: "04", title: "报告交付", desc: "出具报告并提供结果解读建议" },
                  ].map((item) => (
                    <div key={item.step} className="group relative rounded-xl border border-transparent bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d8e5fb]/60 hover:shadow-md">
                      <div className="mb-3 inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-[#eaf2ff] px-2 text-xs font-bold text-[#1b4f96] transition-colors group-hover:bg-[#1b4f96] group-hover:text-white">
                        {item.step}
                      </div>
                      <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                      <p className="mt-1.5 text-xs leading-5 text-text-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official WeChat */}
              <div className="p-6 md:p-8" data-reveal="3">
                <h3 className="mb-2 text-center text-2xl font-semibold tracking-tight text-brand-primary md:text-3xl">官方微信</h3>
                <p className="mx-auto mb-6 max-w-[42ch] text-center text-sm text-text-secondary">
                  扫码关注官方微信，获取检测服务咨询与项目动态。
                </p>
                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="rounded-2xl border border-[#d8e5fb]/50 bg-gradient-to-b from-[#f6f9ff] to-white p-4 shadow-sm transition-transform hover:scale-[1.02]">
                    <div className="overflow-hidden rounded-xl bg-white p-2 shadow-[0_8px_20px_rgb(13_43_87_/_6%)]">
                      <Image
                        src="/images/weixin.jpg"
                        alt="官方微信二维码"
                        width={180}
                        height={180}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 text-sm text-text-secondary">
                    <div className="rounded-xl border border-border/40 bg-[#f8fafc] p-4 xl:p-5">
                      <p className="mb-3 font-semibold text-text-primary">扫码添加好友获取：</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#1a63c4]" />
                          <span>最新行业检测标准解读</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#1a63c4]" />
                          <span>独家前沿技术白皮书</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#1a63c4]" />
                          <span>专业工程师一对一在线答疑</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
