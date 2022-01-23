<template>
  <div class="flex items-center">

    <!-- Guest section -->
    <DouButton
      v-if="!$auth.loggedIn"
      @click="$router.push(localePath('/auth'))"
      :label="$t('global.auth.login.title')"
      color="orange-500"
      textColor="purple-500"
    />

    <!-- Auth section -->
    <div v-if="$auth.loggedIn" class="flex justify-between items-center">
      <TokenIndicator class="hidden sm:flex me-2" />
      <AuthDropdown />
    </div>

    

  </div>
</template>

<script>
import TokenIndicator from './TokenIndicator.vue';
import AuthDropdown from './Dropdown.vue';
import DouButton from 'dourou-components/DouButton/index.vue';


export default {
  name: 'HeaderAuth',
  components: {
    TokenIndicator,
    AuthDropdown,
    DouButton
  }
}
</script>