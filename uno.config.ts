import { defineConfig, presetAttributify, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
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
