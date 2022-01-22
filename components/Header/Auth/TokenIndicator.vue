<template>
  <button class="font-semibold flex items-center justify-center p-2 rounded hover:bg-purple-700 bg-purple-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 text-gray-50" @click="$router.push(localePath('/acheter-dourou'))">
    {{ $store.state.auth.user.tokens }} {{ $t('global.wording.dourou') }}
    <img src="~/assets/image/token.png" alt="" width="25" class="ms-2">
  </button>
</template>

<script>
export default {
  name: 'TokenIndicator'
}
</script>