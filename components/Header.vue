<template>
  <header class="bg-white sm:bg-purple-500">

    <div class="m-auto bg-white sm:bg-purple-500 text-white flex py-3 px-10 container">

      <!-- https://github.com/visualfanatic/vue-svg-loader/issues/54 -->
      <!-- svg can't support click so need to wrap it -->
      <div @click="toggleDrawer" class="flex-1 flex items-center block sm:hidden md:hidden cursor-pointer">
        <IconsHamburger />
      </div>

      <DouLogo class="flex-4"/>

      <!-- Auth Visible only on desktop -->
      <div class="flex flex-1 justify-end items-center">
        <!-- Auth section -->
        <div class="hidden sm:block">
          <div v-if="$auth.loggedIn" class="flex justify-between items-center">

            <div class="flex items-center justify-center mr-2 p-2 rounded hover:bg-purple-700 bg-purple-800 cursor-pointer" @click="$router.push(localePath('/acheter-dourou'))">
              {{ $store.state.auth.user.tokens }} {{ $t('global.wording.dourou') }}
              <img src="~/assets/image/token.png" alt="" width="25" class="ml-2">
            </div>

             <AuthDropdown />

          </div>

          <Nuxt-link v-else :to="localePath('/auth')" class="bg-orange-500 text-purple-500 py-1 px-5 w-36 rounded hover:bg-orange-500">
            {{ $t('global.auth.login.title') }}
          </Nuxt-link>
        </div>

      </div>
    </div>


  </header>
</template>

<script>
  import DouLogo from 'dourou-components/DouLogo/index.vue';
  import DouDropdown from 'dourou-components/DouDropdown/index.vue';

  export default {
    name: 'Header',
    components: {
      DouLogo,
      DouDropdown,
    },
    methods: {
      toggleDrawer (e) {
        e.stopPropagation();
        this.$store.commit('ux/toggleDrawer')
      },
    }
  }
</script>
