# DaisyCN UI

A Next.js starter template that combines the robust components of ShadcnUI with the beautiful theming system of DaisyUI.

## Features

- 🎨 30+ Built-in themes from DaisyUI
- 🧱 Robust components from ShadcnUI
- 🌗 Dark mode support
- ⚡ Built with Next.js 14, TypeScript, and Tailwind CSS
- 📱 Responsive design
- 🔄 Theme persistence

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

This template combines ShadcnUI's component system with DaisyUI's theming by:

1. Mapping DaisyUI color variables to ShadcnUI's expected CSS variables
2. Using a custom theme provider that handles both libraries
3. Maintaining compatibility with both systems

### Key Files

- `tailwind.config.ts`: Configuration that combines both systems
- `src/app/globals.css`: CSS variable mapping
- `src/components/theme-provider.tsx`: Theme management
- `src/components/theme-switcher.tsx`: UI for theme switching

### Color Mapping

DaisyUI's color variables are mapped to ShadcnUI's expected variables:

```css
--background: hsl(var(--b1))        /* DaisyUI base-100 */
--foreground: hsl(var(--bc))        /* DaisyUI base-content */
--primary: hsl(var(--p))            /* DaisyUI primary */
--primary-foreground: hsl(var(--pc)) /* DaisyUI primary-content */
/* ... and so on */
```

## Available Themes

All DaisyUI themes are available out of the box:
- light
- dark
- cupcake
- bumblebee
- emerald
- corporate
- synthwave
- retro
- cyberpunk
- valentine
- halloween
- garden
- forest
- aqua
- lofi
- pastel
- fantasy
- wireframe
- black
- luxury
- dracula
- cmyk
- autumn
- business
- acid
- lemonade
- night
- coffee
- winter

## Usage

1. Import ShadcnUI components as usual
2. Use the ThemeSwitcher component to change themes
3. All components will automatically adapt to the selected theme

```tsx
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Page() {
  return (
    <div>
      <ThemeSwitcher />
      <Button>I adapt to the theme!</Button>
    </div>
  )
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
