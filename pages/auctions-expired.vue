<template>
  <div class="page-home">
    <DouTitle :text="$t('auction.expired.title')" />
    <DouGrid></DouGrid>
  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouGrid from 'dourou-components/DouGrid/index.vue';
// import AuctionLive from '~/components/Auction/AuctionLive.vue';

export default {
  name: 'AuctionsCurrent',
  components: { DouTitle, /* ,AuctionLive */ DouGrid },
  data () {
    return {
      // auctions: [],
    }
  },
  async fetch() {
    // this.auctions = (await this.$axios.get('client/auctions/live')).data;
  },
}
</script>
