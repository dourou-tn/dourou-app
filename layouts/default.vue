<template>
  <div class="bg-purple-200 antialiased min-h-screen flex flex-col" :style="{ direction: $dir() }">

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
import Header from '~/components/Header/index.vue';
import Footer from '~/components/Footer/index.vue';
import Navigation from '~/components/Navigation/index.vue';

export default {
  name: 'DefaultLayout',
  components: { Header, Navigation, Footer },
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