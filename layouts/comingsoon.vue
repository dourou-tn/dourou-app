<template>
  <div class="antialiased " :style="{ direction: $dir() }">
    <Nuxt />
  </div>
</template>

<script>
// import '~/assets/css/comingsoon.css';
export default {
  head () {
    return {
      bodyAttrs: {
        class: this.$i18n.locale === 'fr' ? 'locale-fr' : 'locale-ar'
      },
      link: [
        { rel: 'stylesheet', href: '/css/comingsoon.css' }, 
      ],
      htmlAttrs: {
        lang: 'ar'
      }
    }
  },
}
</script>
