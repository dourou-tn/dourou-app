<template>
  <div class="page-home">
    <div class="mb-10">
      <DouBanner :img-path="banner" />
    </div>

    <AuctionList
      type="FutureAuction"
      :title="$t('nextAuction')"
      :auctions="auctions"
    />

  </div>
</template>

<script>
import DouBanner from 'dourou-components/DouBanner/index.vue';
import AuctionList from '~/components/Auction/List.vue';

export default {
  name: 'PageHome',
  components: { DouBanner, AuctionList },
  data() {
    return {
      banner: require('~/assets/image/banner.jpg'),
      auctions: [],
    }
  },
  async fetch() {
    this.auctions = (await this.$axios.get('client/auctions/upcoming')).data;
  },
}
</script>
