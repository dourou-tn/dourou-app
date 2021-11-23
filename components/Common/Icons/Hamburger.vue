<template>
  <svg :stroke="color" :fill="color" viewBox="0 0 24 24" class="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</template>

<script>
  export default {
    name: 'HamburgerIcon',
    props: {
      color: {
        default: '#4c1a9b',
      },
    },
  }
</script>
