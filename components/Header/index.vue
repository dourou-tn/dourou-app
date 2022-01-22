<template>
  <header id="header" class="px-0 xl:px-24 py-3 bg-white sm:bg-purple-500 shadow-md sm:shadow-0">

      <div class="flex justify-between px-5 sm:px-10 md:px-20">

        <!-- Hamburger menu on mobile -->
        <MobileToggler />

        <DouLogo />

        <!--
          **** HeaderAuth ****
          - dourou indicator (nbr)
          - auth dropdown
        -->
        <HeaderAuth />
      </div>

  </header>
</template>

<script>
  import DouLogo from 'dourou-components/DouLogo/index.vue';
  import DouDropdown from 'dourou-components/DouDropdown/index.vue';
  import MobileToggler from '~/components/Header/MobileToggler.vue';
  import HeaderAuth from '~/components/Header/Auth/index.vue';

  export default {
    name: 'Header',
    components: {
      DouLogo,
      DouDropdown,
      MobileToggler,
      HeaderAuth,
    }
  }
</script>
