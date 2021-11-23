<template>
<div class="auction-list">
  <h2 class="text-purple font-bold text-2xl text-center font-medium my-10">
    {{ title }}
  </h2>
  <div
    v-for="auction in auctions"
    :key="auction.id"
  >
    <AuctionTypeFuture :auction="auction" />
  </div>
</div>
</template>

<script>
  export default {
    name: 'AuctionList',
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