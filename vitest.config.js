import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text'],
      provider: 'istanbul' // or 'c8'
    },
  },
})