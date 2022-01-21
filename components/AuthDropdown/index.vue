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
    <div
      v-if="isOpen"
      id="auth-dropdown"
      class="absolute mt-2 m-width-1/4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  bg-gray-100"
      :class="positionClass"
      role="menu"
      aria-orientation="vertical" aria-labelledby="menu-button"
      tabindex="-1"

    >
      <div v-if="isOpen" v-click-outside="closeMenu" class="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
        <!-- Card header -->
        <header class="pt-6 pb-4 px-5 border-b border-gray-200">
            <div class="flex justify-between items-center mb-3">
                <!-- Image + name -->
                <div class="flex items-center">
                    <div class="pr-1">
                        <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                            <h2 class="text-xl leading-snug font-bold">{{ $store.state.auth.user.username }}</h2>
                        </a>
                        <a class="text-purple-500 block text-sm font-medium" href="#0">{{ $store.state.auth.user.email }}</a>
                    </div>
                </div>
                <!-- Settings button -->
                <div class="relative inline-flex flex-shrink-0">
                    <button class="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                        <span class="sr-only">Settings</span>
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                            <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        <!-- Card body -->
        <div class="py-3">
            <h3 class="text-xs px-5 font-semibold uppercase text-gray-400 mb-1">{{ $t('global.auth.dropdown.menu') }}</h3>
            <!-- Chat list -->
            <div class="divide-y divide-gray-200">
              <a href="#" class="text-gray-900 hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{{ $t('global.auth.dropdown.profile') }}</a>
              <a href="#" class="text-gray-900 hover:text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">{{ $t('global.auth.dropdown.support') }}</a>
              <a href="#" class="text-red-900 hover:text-red-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" @click="logout">{{ $t('global.auth.dropdown.logout') }}</a>
            </div>
        </div>

        <div class="text-center py-5">
          <button :to="localePath('/acheter-dourou')" class="text-sm bg-orange-500 px-10 py-2 rounded-lg my-5 hover:shadow-md text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500" tabindex="1">
            {{ $t('global.auth.dropdown.buy_dourou') }}
          </button>
        </div>
        <div class="flags flex justify-center pb-1 pb-5">
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
  computed: {
    positionClass (){
      if (this.$dir() === 'rtl') return 'left-0'
      else return 'right-0';
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

<style scoped>
#auth-dropdown {
  min-width: 280px;
}
</style>