<template>
  <aside
    v-click-outside="closeDrawer"
    class="hidden sm:block pt-10 pl-5 transform top-0 left-0 w-64 bg-base-200  h-full overflow-auto ease-in-out transition-all duration-700 translate-x-0 "
    :class="drawerIsOpen ? '' : '-translate-x-full'">
    <DouLink
      v-for="nav in navigation"
      :key="nav.id"
      :to="nav.href"
      :text="nav.name"
      class="mb-2 flex flex-col"
      color="white"
    />
  </aside>
</template>
<script>
import DouLink from 'dourou-components/DouLink/index.vue';

export default {
  name: 'NavigationTypesBackend',
  components: {
    DouLink,
  },
  data () {
    return {
      navigation: [
        { id: 0, name: 'Dashboard', href: '/backend' },
        { id: 1, name: 'Produits', href: '/backend/products' },
        { id: 2, name: 'Enchères', href: '/backend/auctions' },
        { id: 3, name: 'Utilisateurs', href: '/backend/users' },
      ],
    }
  },
  computed: {
    drawerIsOpen () {
      return true;
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
    },
    logout () {
      this.$auth.logout();
    }
  }
}
</script>