<template>
  <div class="flex items-center">
    <!-- Auth section -->
    <div v-if="$auth.loggedIn" class="flex justify-between items-center">

      <TokenIndicator class="hidden sm:flex me-2" />

      <AuthDropdown />

    </div>

    <Nuxt-link v-else :to="localePath('/auth')" class="hidden sm:flex bg-orange-500 text-purple-500 py-1 px-5 rounded hover:bg-orange-500">
      {{ $t('global.auth.login.title') }}
    </Nuxt-link>

  </div>
</template>

<script>
import TokenIndicator from './TokenIndicator.vue';
import AuthDropdown from './Dropdown.vue';

export default {
  name: 'HeaderAuth',
  components: {
    TokenIndicator,
    AuthDropdown,
  }
}
</script>