<template>
  <a href="#">
    <img
      :class="`w-${width}`"
      :src="logo_light"
      class="hidden sm:block"
    />
    <img
      :class="`w-${width}`"
      :src="logo_dark"
      class="block sm:hidden"
    />
  </a>
</template>
<script>
  export default {
    name: 'CommonLogo',
    props: {
      width: {
        default: 24,
      }
    },
    data () {
      return {
        logo_light: require('~/assets/image/logo-light.png'),
        logo_dark: require('~/assets/image/logo-dark.png')
      }
    }
  }
</script>
