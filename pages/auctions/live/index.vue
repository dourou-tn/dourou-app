<template>
  <div class="page-home">
    <DouTitle :text="$t('auction.live.title')" />

    <AuctionLive
      v-for="(auction, i) in auctions"
      :key="i"
      :auction="auction"
    />
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
