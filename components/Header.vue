<template>
  <header>

    <div class="bg-white sm:bg-purple sm:px-8 text-white flex items-center justify-between px-2 py-2">

      <!-- https://github.com/visualfanatic/vue-svg-loader/issues/54 -->
      <!-- svg can't support click so need to wrap it -->
      <div @click="toggleDrawer">
        <IconsHamburger class="block sm:hidden cursor-pointer" />
      </div>

      <DouLogo />

      <!-- This can be a separate component maybe ? -->
      <!-- Login/Register buttons -->
      <div>
        <div class="hidden sm:block">
          <Nuxt-link to="/auth" class="bg-orange text-sm text-purple px-5 py-1 w-36 rounded">
            Se Connecter
          </Nuxt-link>
        </div>
        <div class="block sm:hidden cursor-pointer">
          <!-- TODO find a light icon lib or take icons from Meriem ? -->
          <!-- <box-icon name='user-circle' class="mt-2" color="orange"></box-icon> -->
        </div>
      </div>

    </div>

    <Navigation />

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
      }
    }
  }
</script>
