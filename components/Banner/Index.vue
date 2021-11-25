<template>
  <img :src="imgPath" alt="" :class="imgClass">
</template>

<script>
  export default {
    name: 'BannerComponent',
    props: {
      imgClass: {
        type: String,
        default: 'object-cover w-full'
      },
      'img-path': {
        type: String,
        required: true,
      }
    }
  }
</script>