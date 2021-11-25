<template>
  <div class="page-home">

    <Banner :img-path="banner" />

    <AuctionList
      type="FutureAuction"
      title="Les prochaines ventes"
      :auctions="auctions"
    />

  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      banner: require('~/assets/image/banner.jpg'),
      auctions: [
        {
          id: 0,
          img: 'https://picsum.photos/100/150',
          name: 'Apple IPhone 12',
          start_price: '0.1',
          store_price: '5999',
          date: '01 JANVIER 2022',
          time: '19:00',
          full: 20,
        },
        {
          id: 0,
          img: 'https://picsum.photos/100/150',
          name: 'Playstation 5',
          start_price: '0.1',
          store_price: '3999',
          date: '13 JANVIER 2022',
          time: '19:00',
          full: 50,
        },
      ],
    }
  }
}
</script>
