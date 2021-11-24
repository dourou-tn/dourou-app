<template>
  <li>
    <a
      :href="item.href"
       class="text-purple tracking-wider"
    >
      {{ item.name }}
    </a>
  </li>
</template>

<script>
  export default {
    name: 'HomeNavigationItem',
    props: ['item'],
  }
</script>
