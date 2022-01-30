<template>
  <div class="flex justify-center">
    <nuxt-link
      v-for="locale in locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="px-1 cursor-pointer"
    >
        <img :src="locale.img_src" :alt="`${locale.name}-flag`" width="24">
      </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LocalesSelector',
  data () {
    return {
      locales: [
        { code: 'fr', name: 'Français', img_src: require('~/assets/image/flags/france.png') },
        { code: 'ar', name: 'العربية', img_src: require('~/assets/image/flags/tunisie.png') },
      ]
    }
  },
  methods: {
    setLocal (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>