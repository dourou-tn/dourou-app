<template>
  <div class="antialiased bg-gray-100 min-h-screen flex flex-col" :style="{ direction: $dir() }">

    <!-- ComponentsHeader -->
    <div class="m-0 p-0 sticky top-0 z-50">
      <Header />
      <Navigation />
    </div>

    <div class="relative flex-1">
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

<style>
.home-enter-active,
.home-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.home-enter,
.home-leave-to {
  opacity: 0.5;
}
</style>
