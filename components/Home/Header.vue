<template>
  <header>

    <div class="bg-white sm:bg-purple text-white flex items-center justify-between px-2 py-2">

      <!-- VISIBLE ONLY IN MOBILE -->
      <CommonIconsHamburger class="block sm:hidden"/>

      <CommonLogo />

      <!-- NOT VISIBLE IN MOBILE -->
      <HomeAuthenticationButtons />

    </div>

    <div class="hidden sm:block">
      <HomeNavigation />
    </div>

  </header>
</template>

<script>
  export default {
    name: 'HomeHeader',
  }
</script>
