<template>
  <header>

    <div class="bg-white sm:bg-purple-500 text-white flex py-3 px-5">

      <!-- https://github.com/visualfanatic/vue-svg-loader/issues/54 -->
      <!-- svg can't support click so need to wrap it -->
      <div @click="toggleDrawer" class="flex-1 flex items-center block sm:hidden md:hidden cursor-pointer">
        <IconsHamburger />
      </div>

      <DouLogo class="flex-4"/>

      <!-- This can be a separate component maybe ? -->
      <!-- Login/Register buttons -->
      <div class="flex flex-1 justify-end items-center">
        
        <!-- Local button -->
        <button class="text-sm text-purple-500 sm:text-orange mr-3" @click="$i18n.locale === 'fr' ? $i18n.locale = 'ar' : $i18n.locale = 'fr'">
          {{ $i18n.locale === 'fr' ? $t('global.ar') : $t('global.fr') }}
        </button>
        <!-- Auth section -->
        <div class="hidden sm:block">
          <div v-if="$auth.loggedIn" class="text-orange cursor-pointer" @click="logout">
            {{ this.$store.state.auth.user.username }}
          </div>
          <Nuxt-link v-else to="/auth" class="bg-orange text-sm text-purple-500 px-5 w-36 rounded">
            {{ $t('global.auth.login.title') }}
          </Nuxt-link>
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
