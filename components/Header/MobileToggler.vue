<template>
    <div id="mobile-trigger" @click="toggleDrawer" class="flex items-center block sm:hidden md:hidden cursor-pointer">
      <IconHamburger />
    </div>
</template>

<script>
import IconHamburger from '~/components/Icons/Hamburger.vue';

export default {
  name: 'HeaderMobileToggler',
  components: { IconHamburger },
  methods: {
    toggleDrawer (e) {
      e.stopPropagation();
      this.$store.commit('ux/toggleDrawer')
    },
  }
}
</script>
