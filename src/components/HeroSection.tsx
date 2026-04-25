"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="relative h-[430px] w-full overflow-hidden md:h-[560px] lg:h-[640px]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay for text readability */}
            <div className="hero-overlay absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Content */}
            <div className="site-shell absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="fade-up content-measure text-3xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="fade-up-delay mt-3 max-w-[50ch] text-base text-white/90 drop-shadow md:mt-4 md:text-xl">
                  {slide.subtitle}
                </p>
              )}
              <Link
                href={slide.ctaHref}
                className="fade-up-delay-2 mt-8 inline-block rounded-xl bg-white px-7 py-3 text-sm font-semibold text-brand-primary shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 md:px-8 md:py-3.5 md:text-base"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 transition-colors duration-200 hover:bg-white/35 md:left-4 md:h-12 md:w-12"
        aria-label="上一张"
      >
        <ChevronLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 transition-colors duration-200 hover:bg-white/35 md:right-4 md:h-12 md:w-12"
        aria-label="下一张"
      >
        <ChevronRight className="h-5 w-5 text-white md:h-6 md:w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-200 md:h-3 md:w-3",
              index === currentSlide
                ? "w-6 bg-white md:w-8"
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </section>
  );
}
