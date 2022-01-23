<template>
  <div class="page-home">
    <DouTitle :text="$t('auction.live.title')" />
    <div class="antialiased bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <AuctionLive
        v-for="(auction, i) in auctions"
        :key="i"
        :auction="auction"
      />
    </div>
  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';
import AuctionLive from '~/components/Auction/Type/Live.vue';

export default {
  name: 'AuctionsCurrent',
  components: { DouTitle, AuctionLive },
  data () {
    return {
      auctions: [],
    }
  },
  async fetch() {
    this.auctions = (await this.$axios.get('client/auctions/live')).data;
  },
}
</script>
