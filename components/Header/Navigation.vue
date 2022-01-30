<template>
  <nav class="hidden sm:block">
    <ul class="xs:w-full md:w-9/12 md:m-auto flex justify-around py-2">
      <DouLink
        :to="'/'"
        :text="$t('menu.accueil')"
        exact
        color="white"
      />
      <DouLink
        :to="'/auctions/live'"
        :text="$t('menu.ventesEnCours')"
        color="white"
        :warning="$auth && $auth.user && $auth.user.sub_auctions && $auth.user.sub_auctions.length > 0"
      />
      <DouLink
        :to="'/auctions/ended'"
        :text="$t('menu.ventesTerminees')"
        color="white"
      />
      <DouLink
        :to="'/contact'"
        :text="$t('menu.contact')"
        color="white"
      />
    </ul>
  </nav>
</template>

<script>
import DouLink from 'dourou-components/DouLink/index.vue';
export default {
  name: 'HeaderNavigationComponent',
  components: {
    DouLink,
  }
}
</script>