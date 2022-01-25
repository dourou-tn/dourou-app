<template>
  <div class="page-contact">
    <div
      class="bg-purple-300 shadow-md rounded-lg max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg mb-20 mt-6"
    >
      <div class="flex flex-col justify-start">
        <div>
          <h2 class="text-purple-500 text-4xl lg:text-5xl font-bold leading-tight">{{ $t('profile.title') }}</h2>
          <div class="text-purple-400">{{ $t('profile.subtitle') }}</div>
        </div>
        <div class="mt-8">
          <div class="py-1 flex items-center">
            <span class="text-purple-600 mr-1 text-2xl">></span>
            <DouLink
              :text="$t('profile.menu.account')"
              :to="'/user/profile/account'"
            />
          </div>
          <div class="py-1 flex items-center">
            <span class="text-purple-600 mr-1 text-2xl">></span>
            <DouLink
              :text="$t('profile.menu.security')"
              :to="'/user/profile/security'"
            />
          </div>
          <div class="py-1 flex items-center">
            <span class="text-purple-600 mr-1 text-2xl">></span>
            <DouLink
              :text="$t('profile.menu.my_auctions')"
              :to="'/user/profile/auctions'"
            />
          </div>
          <div class="py-1 flex items-center">
            <span class="text-purple-600 mr-1 text-2xl">></span>
            <DouLink
              :text="$t('profile.menu.help')"
              :to="'/user/profile/help'"
            />
          </div>
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

export default {
  name: 'ProfilePage',
  middleware: 'auth',
  components: { DouInput, DouLink },
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