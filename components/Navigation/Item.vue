<template>
  <li>
    <Nuxt-link
      :to="item.href"
      class="text-purple tracking-wider"
    >
      {{ item.name }}
    </Nuxt-link>
  </li>
</template>

<script>
  export default {
    name: 'HomeNavigationItem',
    props: ['item'],
  }
</script>
