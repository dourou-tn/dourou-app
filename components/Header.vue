<template>
  <header>

    <div class="bg-white sm:bg-purple sm:px-8 text-white flex items-center justify-between px-2 py-2">

      <!-- https://github.com/visualfanatic/vue-svg-loader/issues/54 -->
      <!-- svg can't support click so need to wrap it -->
      <div @click="toggleDrawer">
        <IconsHamburger class="block sm:hidden cursor-pointer" />
      </div>

      <Logo />

      <!-- This can be a separate component maybe ? -->
      <!-- Login/Register buttons -->
      <div>
        <div class="hidden sm:block">
          <button class="bg-orange text-sm text-purple px-5 py-1 w-36 rounded">Se Connecter</button>
        </div>
        <div class="block sm:hidden cursor-pointer">
          <box-icon name='user-circle' class="mt-2" color="orange"></box-icon>
        </div>
      </div>

    </div>

    <Navigation />

  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      toggleDrawer () {
        this.$store.commit('ux/toggleDrawer')
      }
    }
  }
</script>
