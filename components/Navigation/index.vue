<template>
  <div>
    <nav class="hidden sm:block bg-purple-600 shadow-md">
      <ul class="flex justify-around py-2 xl:px-12">
        <DouLink
          :to="'/'"
          :text="$t('menu.accueil')"
          exact
          color="orange-500"
        />
        <DouLink
          :to="'/auctions-live'"
          :text="$t('menu.ventesEnCours')"
          color="orange-500"
          :warning="$auth && $auth.user && $auth.user.sub_auctions && $auth.user.sub_auctions.length > 0"
        />
        <DouLink
          :to="'/auctions-completed'"
          :text="$t('menu.ventesTerminees')"
          color="orange-500"
        />
        <DouLink
          :to="'/contact'"
          :text="$t('menu.contact')"
          color="orange-500"
        />
      </ul>
    </nav>

    <aside
      v-if="drawerIsOpen"
      v-click-outside="closeDrawer"
      class="bg-purple-600 pt-10 ps-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-700 z-30 translate-x-0 shadow-lg"
      :class="drawerIsOpen ? '' : '-translate-x-full'">
      <div class="flex flex-col">
        <DouLink
          :to="'/'"
          :text="$t('menu.accueil')"
          color="orange-500"
        />
        <DouLink
          :to="'/auctions-live'"
          :text="$t('menu.ventesEnCours')"
          color="orange-500"
        />
        <DouLink
          :to="'/auctions-completed'"
          :text="$t('menu.ventesTerminees')"
          color="orange-500"
        />
        <DouLink
          :to="'/contact'"
          :text="$t('menu.contact')"
          color="orange-500"
        />
        
      </div>
      <div class="mt-10">
        <div v-if="$auth.loggedIn" class="text-purple-500 cursor-pointer" @click="logout">
          {{ this.$store.state.auth.user.username }}
        </div>
        <Nuxt-link v-else to="/auth"
          class=" bg-orange-500 text-sm text-purple-500 px-5 py-1 w-36 rounded"
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
        { id: 0, text: this.$t('menu.accueil'), to: '/' },
        { id: 1, text: this.$t('menu.ventesEnCours'), to: '/auctions-live' },
        { id: 2, text: this.$t('menu.ventesTerminees'), to: '/auctions-completed' },
        { id: 3, text: this.$t('menu.contact'), to: '/contact' },
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
