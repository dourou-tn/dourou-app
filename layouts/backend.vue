<template>
  <div class="flex flex-col h-screen">

    <!-- ComponentsHeader -->
    <Header />

    <div class="flex flex-row h-screen  bg-neutral-focus">
      <Navigation type="NavigationTypesBackend" />
      <Nuxt class="flex-1" />
    </div>

    <!-- ComponentsFooter -->
    <Footer />

  </div>
</template>

<script>
export default {
  name: 'LayoutsBackend',
}
</script>