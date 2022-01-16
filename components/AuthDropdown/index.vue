<template>
  <div class="relative inline-block">
    <div @click="openMenu" class="cursor-pointer hover:opacity-90">
      <svg xmlns="http://www.w3.org/2000/svg" style="fill: white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/>
      </svg>
      <!-- <span class="cursor-pointer hover:opacity-80" :class="{ 'opacity-80': isOpen }">
        <span class="text-sm">Bienvenue </span>
        <span class="text-orange-500">
          {{ $store.state.auth.user.username }}
        </span>
      </span> -->
    </div>

    <div v-if="isOpen" v-click-outside="closeMenu" class="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  bg-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <div class="text-sm text-gray-500 flex flex-col p-2">
          <span>
            Bienvenue
            <span class="text-purple-500">{{ $store.state.auth.user.username }}</span>
          </span>
          <span class="mr-1">
            Vous possédez <span class="text-lg text-purple-500 font-bold">20</span> Dourou
          </span>
        </div>
        <div class="">
        </div>
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a href="#" class="text-gray-900 hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Mon compte</a>
        <a href="#" class="text-gray-900 hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
        <a href="#" class="text-red-900 hover:text-red-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" @click="logout">Déconnextion</a>
        <div class="text-center py-5">
          <Nuxt-link :to="localePath('/acheter-dourou')" class="text-sm bg-orange-500 px-10 py-2 rounded-lg my-5 hover:shadow-md text-gray-800">
            Acheter Dourou
          </Nuxt-link>
        </div>
        <!-- Flags -->
        <div class="flags flex justify-center pb-1">
          <LocalesSelector />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DouDropdown',
  data() {
    return {
      isOpen: false,
      tokenImage: require('~/assets/image/token.png')
    }
  },
  methods: {
    openMenu (e) {
      e.stopPropagation();
      this.isOpen = !this.isOpen;
    },
    closeMenu () {
      this.isOpen = false;
    },
    async logout () {
      await this.$auth.logout();
    }
  }
}
</script>