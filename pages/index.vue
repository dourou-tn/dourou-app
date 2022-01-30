<template>
  <div class="page-home">
    <DouBanner :img-path="'/banner.jpg'" class="mb-10 mx-auto"/>
    <div class="container m-auto">
      <AuctionList
        type="FutureAuction"
        :title="$t('nextAuction')"
        :auctions="auctions"
      />
    </div>
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
      banner: '/',
      auctions: [],
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
