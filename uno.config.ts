import { defineConfig, presetAttributify, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Work Sans',
      },
    })
  ],
  theme: {
    colors: {
      ng: {
        dark: '#101920',
        foreground: '#E6E1E6',
        red: '#AF282F',
        blue: '#014977',
        'dark-blue': '#012640',
      }
    },
  },
})
