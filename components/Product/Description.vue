<template>
  <div v-html="content" class="text-left text-purple-600" />
</template>

<script>
export default {
  name: 'ProductDescriptionComponent',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
  h1 {
    font-weight: bold;
  }
</style>