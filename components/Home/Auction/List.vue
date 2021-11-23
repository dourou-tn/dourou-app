<template>
<div class="auction-list">
  <h2 class="text-purple font-bold text-2xl text-center font-medium my-10">
    Les prochaines ventes
  </h2>
  <HomeAuctionItem
    v-for="auction in auctions"
    :key="auction.id"
    :auction="auction"
  />
</div>
</template>

<script>
  export default {
    name: 'HomeAuctionList',
    data () {
      return {
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