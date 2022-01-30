<template>
  <div class="relative inline-block">
    <div @click="openMenu" class="p-2 cursor-pointer ">
    <div class="hover:animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" class="" style="fill: white;" width="20" height="20" viewBox="0 0 24 24"><path class="fill-pink-800" d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/>
      </svg>
    </div>
    </div>
    <div
      v-if="isOpen"
      id="auth-dropdown"
      class="absolute mt-2 m-width-1/4 rounded-md bg-purple-100 shadow-lg focus:outline-none z-50"
      :class="positionClass"
      role="menu"
      aria-orientation="vertical" aria-labelledby="menu-button"
      tabindex="-1"

    >
      <div v-if="isOpen" v-click-outside="closeMenu" class="relative max-w-[340px] mx-auto bg-purple-600 shadow-lg rounded">
        <!-- Card header -->
        <header class="pt-6 pb-4 px-5 border-b border-orange-500">
            <div class="flex justify-between items-center">
                <!-- name -->
                <div class="flex items-center">
                    <div class="pr-1">
                        <a class="inline-flex text-orange-500 hover:text-orange-600" href="#">
                            <h2 class="text-xl leading-snug font-bold">@{{ $store.state.auth.user.username }}</h2>
                        </a>
                    </div>
                </div>
                <!-- Settings button -->
            </div>
        </header>
        <!-- Card body -->
        <div class="">
            <!-- <h3 class="text-xs px-5 font-semibold uppercase text-white mb-1">{{ $t('global.auth.dropdown.menu') }}</h3> -->
            <!-- Chat list -->
            <div class="divide-y divide-purple-500 ">
              <div class="ps-5 py-2">
                <DouLink
                  to="/profile"
                  :text="$t('global.auth.dropdown.profile')"
                  color="orange-500"
                  normal
                />
              </div>
              <div class="ps-5 py-2">
                <DouLink
                to="/"
                :text="$t('global.auth.dropdown.support')"
                color="orange-500"
                normal
              />
              </div>
              <div class="ps-5 py-2">
                <DouLink
                  @click.native="logout"
                  :text="$t('global.auth.dropdown.logout')"
                  color="red-500"
                  normal
                />
              </div>
              <!-- <a href="#" class="text-orange-500 hover:text-purple-500 hover:bg-purple-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{{ $t('global.auth.dropdown.profile') }}</a> -->
              <!-- <a href="#" class="text-orange-500 hover:text-purple-500 hover:bg-purple-100 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">{{ $t('global.auth.dropdown.support') }}</a>
              <a href="#" class="text-white hover:text-purple-600 hover:bg-orange-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2" @click="logout">{{ $t('global.auth.dropdown.logout') }}</a> -->
            </div>
        </div>

        <div class="text-center py-5">
          <DouButton
            @click="$router.push(localePath('/buy-dourou'))"
            :label="$t('global.auth.dropdown.buy_dourou')"
            color="orange-500"
            textColor="purple-500"
          />
        </div>
        <div class="flags flex justify-center pb-1 pb-5">
          <LocaleSelector />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSelector from '~/components/LocaleSelector/index.vue';
import TokenIndicator from './TokenIndicator.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import DouLink from 'dourou-components/DouLink/index.vue';

export default {
  name: 'DouDropdown',
  components: { LocaleSelector, TokenIndicator, DouButton, DouLink },
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