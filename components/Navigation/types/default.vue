<template>
  <div>
    <nav class="hidden sm:block bg-white">
      <ul class="xs:w-full md:w-9/12 md:m-auto flex justify-around py-2">
        <DouLink
          v-for="nav in navigation"
          :key="nav.id"
          :to="nav.href"
          :text="nav.name"
        />
      </ul>
    </nav>

    <aside
      v-click-outside="closeDrawer"
      class="pt-10 pl-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-700 z-30 translate-x-0"
      :class="drawerIsOpen ? '' : '-translate-x-full'">
      <div class="flex flex-col">
        <DouLink
          v-for="nav in navigation"
          :key="nav.id"
          :to="nav.href"
          :text="nav.name"
          class="mb-2"
        />
      </div>
      <div class="mt-10">
        <div v-if="$auth.loggedIn" class="text-purple-500 cursor-pointer" @click="logout">
          {{ this.$store.state.auth.user[0].username }}
        </div>
        <Nuxt-link v-else to="/auth"
          class=" bg-orange text-sm text-purple-500 px-5 py-1 w-36 rounded"
        >
          Se Connecter
        </Nuxt-link>
      </div>
    </aside>
  </div>
</template>
<script>
import DouLink from 'dourou-components/DouLink/index.vue';

export default {
  name: 'NavigationDefault',
  components: { DouLink },
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
    },
    logout () {
      this.$auth.logout();
    }
  }
}
</script>