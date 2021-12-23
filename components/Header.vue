<template>
  <header>

    <div class="bg-white sm:bg-purple-500 sm:px-8 text-white flex items-center justify-between px-2 py-2">

      <!-- https://github.com/visualfanatic/vue-svg-loader/issues/54 -->
      <!-- svg can't support click so need to wrap it -->
      <div @click="toggleDrawer" class="block sm:hidden md:hidden cursor-pointer">
        <IconsHamburger />
      </div>

      <DouLogo />

      <!-- This can be a separate component maybe ? -->
      <!-- Login/Register buttons -->
      <div>
        <div class="hidden sm:block">
          <div v-if="$auth.loggedIn" class="text-orange cursor-pointer" @click="logout">
            {{ this.$store.state.auth.user.username }}
          </div>
          <Nuxt-link v-else to="/auth" class="bg-orange text-sm text-purple-500 px-5 py-1 w-36 rounded">
            Se Connecter
          </Nuxt-link>
        </div>
        <div class="block sm:hidden cursor-pointer">
          <!-- TODO find a light icon lib or take icons from Meriem ? -->
          <!-- <box-icon name='user-circle' class="mt-2" color="orange"></box-icon> -->
        </div>
      </div>

    </div>


  </header>
</template>

<script>
  import DouLogo from 'dourou-components/DouLogo/index.vue';

  export default {
    name: 'Header',
    components: {
      DouLogo,
    },
    methods: {
      toggleDrawer (e) {
        e.stopPropagation();
        this.$store.commit('ux/toggleDrawer')
      },
      async logout () {
        await this.$auth.logout();
      }
    }
  }
</script>
