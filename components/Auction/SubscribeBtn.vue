<template>
  <Nuxt-link
    :to="localePath('/auctions/subscribe')"
    v-on:click.native="subscribe"
    class="text-sm bg-orange-500 px-10 py-2 rounded-lg hover:shadow-md text-purple-500"
  >
    {{ $t('auction.subscribe_cta', { price: auction.subscribe_price }) }}
  </Nuxt-link>
</template>

<script>
import Doulink from 'dourou-components/DouLink/index.vue';

export default {
  name: 'SubscribeButton',
  components: { Doulink },
  props: {
    auction: {
      type: Object,
      required: true,
    }
  },
  methods: {
    subscribe () {
      this.$router.push(this.localePath({
        path: '/auctions/subscribe',
        query: {
          auction_id: this.auction.id
        }
      }))
    }
  }
}
</script>