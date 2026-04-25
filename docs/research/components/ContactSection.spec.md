# Contact Section Component Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Screenshot:** `docs/design-references/besteny.com/fullpage-desktop.png`
- **Interaction model:** Static CTA section with phone numbers

## DOM Structure
```
section.contact (red/dark background)
  └── div.container (max-width 1200px, py-16)
      ├── div.contact-content
      │   ├── h2.title ("联系我们")
      │   ├── p.description
      │   └── div.contact-methods
      │       ├── a.phone (primary)
      │       └── a.phone (secondary)
      └── div.contact-image (decorative)
```

## Computed Styles

### Section Container
- backgroundColor: rgb(196, 30, 58) or dark gradient (observed: dark blue/red section)
- Actually from screenshot: dark blue/purple section with phone
- padding: 60px 20px

### Title
- color: rgb(255, 255, 255)
- fontSize: 28px
- fontWeight: 600
- marginBottom: 16px

### Description
- color: rgba(255, 255, 255, 0.9)
- fontSize: 16px
- marginBottom: 24px

### Phone Link
- display: inline-flex
- alignItems: center
- gap: 8px
- backgroundColor: rgb(255, 255, 255)
- color: rgb(0, 65, 150)
- padding: 12px 24px
- borderRadius: 4px
- fontSize: 20px
- fontWeight: 600
- textDecoration: none
- marginRight: 16px

### Secondary Phone
- backgroundColor: transparent
- color: rgb(255, 255, 255)
- border: 2px solid rgb(255, 255, 255)

## States & Behaviors

### Hover on Phone
- **State A:** transform: none
- **State B:** transform: translateY(-2px)
- **Transition:** 0.2s ease

## Assets
- Contact phone icon: `public/images/159548770764305dba7f0981003b5.png`

## Text Content (verbatim)

### Title
- 联系我们
- 欢迎电话咨询

### Phone Numbers
- 159-3625-6368 (primary)
- 0371-63795982 (secondary)

## Responsive Behavior
- **Desktop:** Side by side content and image
- **Mobile:** Stacked, phones full width
