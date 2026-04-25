# Header Component Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/besteny.com/section-0-desktop.png`
- **Interaction model:** Static with hover states

## DOM Structure
```
header (fixed, blue background)
  └── div.container (max-width 1200px, centered)
      ├── div.logo-section
      │   └── img.logo (348x60px)
      └── nav.main-nav
          └── ul.nav-list
              └── li.nav-item (x5) [首页, 公司介绍, 业务领域, 新闻中心, 联系我们]
                  └── a.nav-link
```

## Computed Styles

### Header Container
- backgroundColor: rgb(0, 65, 150) (#004196)
- height: 80px
- width: 100%
- position: relative
- boxShadow: none (on top), subtle on scroll

### Logo
- width: auto
- height: 50px
- objectFit: contain

### Navigation
- display: flex
- gap: 40px
- alignItems: center

### Nav Links
- color: rgb(255, 255, 255)
- fontSize: 16px
- fontWeight: 400
- padding: 8px 0
- textDecoration: none

### Hover States
- Nav Link: opacity: 0.8, underline appears

## Assets
- Logo: `public/images/logo.png`

## Responsive Behavior
- **Desktop (1440px):** Full horizontal layout
- **Tablet (768px):** Hamburger menu appears
- **Mobile (390px):** Mobile menu overlay

## Text Content
- 首页
- 公司介绍
- 业务领域
- 新闻中心
- 联系我们
