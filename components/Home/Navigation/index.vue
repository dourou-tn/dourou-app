<template>
  <nav class="bg-white">
    <ul class="xs:w-full md:w-9/12 md:m-auto flex justify-around bg-white py-2">
      <HomeNavigationItem
        v-for="nav in navigation"
        :key="nav.id"
        :item="nav"
      />
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data () {
      return {
        navigation: [
          { id: 0, name: 'ACCEUIL', href: '#' },
          { id: 1, name: 'VENTES EN COURS', href: '#' },
          { id: 2, name: 'VENTES TERMINES', href: '#' },
          { id: 3, name: 'CONTACT', href: '#' },
        ]
      }
    }
  }
</script>
