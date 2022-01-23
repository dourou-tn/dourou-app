<template>
  <DouButton
    @click.native="subscribe"
    :label="$t('auction.subscribe_cta', { price: auction.subscribe_price })"
    color="orange-500"
    textColor="purple-500"
  />
  <!-- <Nuxt-link
    :to="localePath('/auctions/subscribe')"
    v-on:click.native="subscribe"
    class="flex text-sm bg-orange-500 rounded-md shadow-lg hover:shadow-md text-purple-500 h-full w-full items-center justify-center"
  >
    <div>
      <div class="text-purple-600 text-md">Participez à</div>
      <div class="text-purple-500 text-xl font-bold">{{ auction.subscribe_price }} DT</div>
    </div>
  </Nuxt-link> -->
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
        path: '/auctions/subscribe',
        query: {
          auction_id: this.auction.id
        }
      }))
    }
  }
}
</script>