<template>
  <div class="page-home">
    <DouBanner :img-path="'/banner-v3.jpg'" class="mb-10 mx-auto"/>

    <div class="container mx-auto px-0 md:px-5">
      <DouTitle :text="$t('nextAuction')" />
      <DouGrid>
        <AuctionFuture
          v-for="auction in auctions"
          :key="auction.id"
          :auction="auction"
        />
      </DouGrid>
    </div>
  </div>
</template>

<script>
import DouBanner from 'dourou-components/DouBanner/index.vue';
import DouGrid from 'dourou-components/DouGrid/index.vue';
import DouTitle from 'dourou-components/DouTitle/index.vue';

import AuctionFuture from '~/components/Auction/AuctionFuture.vue';

export default {
  name: 'PageHome',
  transition: 'home',
  components: {
    DouBanner,
    AuctionFuture,
    DouGrid,
    DouTitle,
  },
  data() {
    return {
      banner: '/',
      auctions: []
    }
  },
  async fetch() {
    this.auctions = (await this.$axios.get('client/auctions/upcoming')).data;
  },
  mounted () {
    console.log(this.$auth);
  }
}
</script>
