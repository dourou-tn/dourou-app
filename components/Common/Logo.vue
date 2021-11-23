<template>
  <a href="#">
    <img :class="`w-${width}`" :src="logo_url" alt="">
  </a>
</template>
<script>
  export default {
    name: 'CommonLogo',
    props: {
      width: {
        default: 32,
      }
    },
    data () {
      return {
        logo_url: require('~/assets/image/logo.png')
      }
    }
  }
</script>
