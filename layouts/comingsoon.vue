<template>
  <div class="antialiased coming-soon " :style="{ direction: $dir() }">
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
         //you shouldn't mention ~/static itself
        { rel: 'stylesheet', href: '/css/comingsoon.css' }, 
      ],
      htmlAttrs: {
        lang: 'ar'
      }
    }
  },
  created () {
    this.$i18n.locale = 'ar'
  },
}
</script>
