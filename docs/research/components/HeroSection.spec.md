# Hero Section Component Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/besteny.com/fullpage-desktop.png` (top portion)
- **Interaction model:** Carousel with auto-play and manual controls

## DOM Structure
```
section.hero
  └── div.carousel-container (full width, 400-500px height)
      ├── div.slides-wrapper
      │   └── div.slide (absolute positioned, full size)
      │       ├── img.background (cover, with slight overlay)
      │       └── div.content (centered text)
      │           ├── h1.title (white, large)
      │           └── a.cta-button (blue background)
      ├── button.prev (left arrow, <)
      ├── button.next (right arrow, >)
      └── div.indicators (dots at bottom)
```

## Computed Styles

### Carousel Container
- width: 100%
- height: 400px (desktop), 300px (mobile)
- position: relative
- overflow: hidden

### Slide
- position: absolute
- inset: 0
- display: flex
- alignItems: center
- justifyContent: center

### Background Image
- width: 100%
- height: 100%
- objectFit: cover
- filter: brightness(0.9) for text readability

### Title
- color: rgb(255, 255, 255)
- fontSize: 36px (desktop), 24px (mobile)
- fontWeight: 700
- textAlign: center
- textShadow: 0 2px 4px rgba(0,0,0,0.3)

### CTA Button
- backgroundColor: rgb(0, 65, 150)
- color: rgb(255, 255, 255)
- padding: 12px 32px
- borderRadius: 5px
- fontSize: 16px
- marginTop: 24px

### Navigation Arrows
- position: absolute
- top: 50%
- transform: translateY(-50%)
- backgroundColor: rgba(255,255,255,0.3)
- color: rgb(153, 153, 153)
- width: 48px
- height: 48px
- borderRadius: 50%
- fontSize: 24px

### Indicators (Dots)
- position: absolute
- bottom: 20px
- display: flex
- gap: 8px
- dot: 10px circle, white with opacity

## States & Behaviors

### Carousel Auto-play
- **Trigger:** Time-based, 5 seconds per slide
- **Transition:** opacity fade, 500ms ease

### Manual Navigation
- **Trigger:** Click on prev/next buttons or dots
- **State change:** Current slide opacity 1 → 0, next slide 0 → 1
- **Transition:** 500ms ease

### Hover on Arrows
- **State A:** backgroundColor: rgba(255,255,255,0.3)
- **State B:** backgroundColor: rgba(255,255,255,0.5)
- **Transition:** 200ms ease

## Assets
- Slide 1: `public/images/1736395058097bd7b9776dd09b96c62ce9e477adc5dc6.png`
- Slide 2: `public/images/173639607082451d1553f646425a93e2a411984a4666a.png`

## Text Content (verbatim)
- Slide 1 Title: "诚信守正 追求卓越"
- Slide 1 CTA: "了解详情"
- Slide 2 Title: "专业检测 精准服务"
- Slide 2 CTA: "了解更多"

## Responsive Behavior
- **Desktop:** Full height, side arrows visible
- **Mobile:** Reduced height, swipe enabled, dots only
