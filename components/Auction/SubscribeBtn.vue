<template>
  <Doulink
    :to="{name: 'auctions-subscribe' }"
    :text="$t('auction.subscribe_cta', { price: auction.subscribe_price })"
    v-on:click.native="subscribe"
    class="bg-orange-500 rounded-lg hover:shadow-md my-5 px-10 py-2 mt-10"
  />
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