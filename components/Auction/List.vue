<template>
<div class="auction-list">
  <DouTitle :text="title" />
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