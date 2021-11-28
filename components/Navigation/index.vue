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
      v-click-outside="closeDrawer"
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0"
      :class="drawerIsOpen ? '' : '-translate-x-full'">
      <NavigationItem
          v-for="nav in navigation"
          :key="nav.id"
          :item="nav"
        />
    </aside>

  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        navigation: [
          { id: 0, name: 'ACCEUIL', href: '/' },
          { id: 1, name: 'VENTES EN COURS', href: '/auctions/current' },
          { id: 2, name: 'VENTES TERMINES', href: '/auctions/ended' },
          { id: 3, name: 'CONTACT', href: '/contact' },
        ],
      }
    },
    computed: {
      drawerIsOpen () {
        return this.$store.getters['ux/getDrawer'];
      },
    },
    watch: {
      drawerIsOpen: {
          immediate: true,
          handler() {
            if (process.client) {
              if (this.drawerIsOpen) document.body.style.setProperty("overflow", "hidden");
              else document.body.style.removeProperty("overflow");
            }
          }
      }
    },
    methods: {
      closeDrawer (e) {
        // click outside the drawer and not on the #hamburger-icon
        if (e.srcElement.id !== 'hamburger-icon') {
          if (this.$store.getters['ux/getDrawer']) {
            this.$store.commit('ux/toggleDrawer')
          }
        }
      }
    }

  }
</script>
