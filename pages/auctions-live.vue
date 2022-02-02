<template>
  <div class="auctions-live-page container mx-auto px-0 md:px-5">
    <DouTitle :text="$t('auction.live.title')" />
    <DouGrid>
      <AuctionLive
        v-for="(auction, i) in auctions"
        :key="i"
        :auction="auction"
      />
    </DouGrid>
  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouGrid from 'dourou-components/DouGrid/index.vue';
import AuctionLive from '~/components/Auction/AuctionLive.vue';

export default {
  name: 'AuctionsCurrent',
  transition: 'home',
  components: { DouTitle, AuctionLive, DouGrid },
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
