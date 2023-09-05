import { defineConfig, presetAttributify, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Work Sans',
        clash: 'Clash Display',
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
  rules: [
    ['leading-none', { 'line-height': '1'}],
    ['leading-tight', { 'line-height': '1.25'}],
    ['leading-snug', { 'line-height': '1.375'}],
    ['leading-normal', { 'line-height': '1.5'}],
    ['leading-relaxed', { 'line-height': '1.625'}],
    ['leading-loose', { 'line-height': '2'}],
    ['tracking-tighter', { 'letter-spacing': '-0.05em'}],
    ['tracking-tight', { 'letter-spacing': '-0.025em'}],
    ['tracking-normal', { 'letter-spacing': '0em'}],
    ['tracking-wide', { 'letter-spacing': '0.025em'}],
    ['tracking-wider', { 'letter-spacing': '0.05em'}],
    ['tracking-widest', { 'letter-spacing': '0.1em'}],
  ]
})
