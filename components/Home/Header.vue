<template>
  <header class="bg-purple text-white">

    <div class="xs:w-full md:w-9/12 md:m-auto flex justify-between items-center mx-5 py-2">
      <CommonLogo />
      <HomeAuthenticationButtons />
    </div>

    <HomeNavigation />

  </header>
</template>

<script>
  export default {
    name: 'HomeHeader',
  }
</script>
