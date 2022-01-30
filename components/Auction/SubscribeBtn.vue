<template>
  <div>
    <DouButton
      v-if="!auction.is_subscribed"
      @click.native="subscribe"
      :label="$t('auction.subscribe_cta', { price: auction.subscribe_price })"
      color="orange-500"
      textColor="purple-500"
    />
    <DouButton
      v-else
      :label="'Vous êtes inscrit'"
      color="purple-500"
      textColor="orange-500"
      disabled
    />
  </div>
</template>

<script>
import Doulink from 'dourou-components/DouLink/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';

export default {
  name: 'SubscribeButton',
  components: { Doulink, DouButton },
  props: {
    auction: {
      type: Object,
      required: true,
    }
  },
  methods: {
    subscribe () {
      this.$router.push(this.localePath({
        path: '/subscribe',
        query: {
          auction_id: this.auction.id
        }
      }))
    }
  }
}
</script>