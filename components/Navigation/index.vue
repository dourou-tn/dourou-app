<template>
  <div>
    <nav class="hidden sm:block bg-white">
      <ul class="xs:w-full md:w-9/12 md:m-auto flex justify-around py-2">
        <NavigationItem
          v-for="nav in navigation"
          :key="nav.id"
          :item="nav"
        />
      </ul>
    </nav>

    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0"
      :class="isOpen ? '' : '-translate-x-full'">
      ...
    </aside>

  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        navigation: [
          { id: 0, name: 'ACCEUIL', href: '#' },
          { id: 1, name: 'VENTES EN COURS', href: '#' },
          { id: 2, name: 'VENTES TERMINES', href: '#' },
          { id: 3, name: 'CONTACT', href: '#' },
        ],
        isOpen: false
      }
    }
  }
</script>
