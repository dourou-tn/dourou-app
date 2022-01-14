<template>
  <div class="flex flex-col" :style="{ direction: $dir() }">

    <!-- ComponentsHeader -->
    <div class="m-0 p-0 sticky top-0 z-50">
      <Header />
      <Navigation />
    </div>

    <div class="container relative m-auto">
      <Nuxt />
    </div>

    <!-- ComponentsFooter -->
    <Footer />

  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head () {
    return {
      bodyAttrs: {
        class:  `locale-${this.$i18n.locale}`
      },
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
}
</script>