<template>
  <div class="page-home">

    <DouBanner :img-path="banner" />

    <AuctionList
      type="FutureAuction"
      :title="$t('nextAuction')"
      :auctions="auctions"
    />

  </div>
</template>

<script>
import DouBanner from 'dourou-components/DouBanner/index.vue';

export default {
  name: 'PageHome',
  components: { DouBanner },
  data() {
    return {
      banner: require('~/assets/image/banner.jpg'),
      auctions: [
        // {
        //   id: 0,
        //   img: 'https://picsum.photos/100/150',
        //   name: 'Apple IPhone 12',
        //   start_price: '0.1',
        //   store_price: '5999',
        //   date: '01 JANVIER 2022',
        //   time: '19:00',
        //   full: 20,
        // },
        // {
        //   id: 1,
        //   img: 'https://picsum.photos/100/150',
        //   name: 'Playstation 5',
        //   start_price: '0.1',
        //   store_price: '3999',
        //   date: '13 JANVIER 2022',
        //   time: '19:00',
        //   full: 50,
        // },
      ],
    }
  },
  async fetch() {
    this.auctions = (await this.$axios.get('client/auctions/upcoming')).data;
  },
}
</script>
