<template>
  <div class="w-full h-full flex items-center justify-end flex-col">
    <p class="text-xl text-purple-600">Section under construction</p>
    <p class="text-purple-500">Coming soon</p>
    <p class="text-6xl mt-5">🚧</p>
  </div>
</template>

<script>
export default {
  name: 'ProfilAuctionsPage',
  middleware: 'auth',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>