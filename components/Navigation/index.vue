<template>
  <component :is="type"></component>
</template>

<script>

  export default {
    name: 'Navigation',
    props: {
      type: {
        type: String,
        default: 'NavigationTypesDefault',
      },
    },
  }
</script>
