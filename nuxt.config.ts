// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    domains: ['images.unsplash.com'],
    imageengine: {
      baseURL: "https://9zn06nix.cdn.imgeng.in"
    }
  }
})