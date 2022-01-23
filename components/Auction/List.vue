<template>
<div class="auction-list">
  <div class="text-center mb-12">
    <h2 class="text-purple-500 text-2xl font-bold">
      {{ title }}
    </h2>
    <p class="text-purple-400 font-800">
      Vous pouvez participer à l'enchère que vous souhaitez.
      <p class="text-purple-500 font-bold mt-5">
        Il y a {{ auctions.length }} vente(s) en cours
      </p>
    </p>
  </div>
  <div
    v-for="auction in auctions"
    :key="auction.id"
  >
    <AuctionTypeFuture :auction="auction" />
  </div>
</div>
</template>

<script>
  import DouTitle from 'dourou-components/DouTitle/index.vue';
  export default {
    name: 'AuctionList',
    components: { DouTitle },
    props: {
      type: {
        type: String,
        default: 'FutureAuction',
      },
      auctions: {
        required: true,
        default: () => [],
      },
      title: {
        type: String,
        default: 'FutureAuction',
      },
    }
  }
</script>