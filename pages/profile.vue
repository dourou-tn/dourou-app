<template>
  <div class="page-contact max-w-screen-md mx-auto">
    <div
      class="sm:my-8 bg-purple-300 shadow-md rounded-lg px-8 grid gap-8 grid-cols-1 md:grid-cols-2 py-8 mx-auto"
    >
      <div class="flex flex-col justify-start">
        <div>
          <h2 class="text-purple-500 text-4xl lg:text-5xl font-bold leading-tight">{{ $t('profile.title') }}</h2>
          <div class="text-purple-400">{{ $t('profile.subtitle') }}</div>
        </div>
        <div class="mt-8 flex flex-col">
          <DouLink
            :text="$t('profile.menu.account')"
            :to="'/profile/account'"
          />
          <DouLink
            :text="$t('profile.menu.security')"
            :to="'/profile/security'"
          />
          <DouLink
            :text="$t('profile.menu.my_auctions')"
            :to="'/profile/auctions'"
          />
          <DouLink
            :text="$t('profile.menu.help')"
            :to="'/profile/help'"
          />
        </div>
      </div>
      <div class="flex items-center w-full">
        <NuxtChild class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouLink from 'dourou-components/DouLink/index.vue';
import DouTitle from 'dourou-components/DouTitle/index.vue';

export default {
  name: 'ProfilePage',
  transition: 'home',
  middleware: 'auth',
  components: { DouInput, DouLink, DouTitle },
  data () {
    return {
      
    }
  },
  computed: {
    currentUser () {
      return this.$auth.user;
    }
  }
}
</script>