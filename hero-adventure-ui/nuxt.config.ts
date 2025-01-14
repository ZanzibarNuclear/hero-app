// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint'],
  css: ['@/assets/css/font.css', '@/assets/css/tailwind.css'],
  eslint: {
    config: {
      stylistic: {
        semi: false,
      },
    },
  },
  vite: {
    define: {
      global: 'window',
    },
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
        },
        scss: {
          api: 'modern',
        },
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    quiet: true,
  },
})
