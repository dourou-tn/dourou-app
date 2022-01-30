<template>
<div class="auction-list">
  <div class="text-center mb-12">
    <h2 class="text-purple-500 text-2xl font-bold">
      {{ title }}
    </h2>
    <p class="text-purple-400 font-800">
      Vous pouvez participer à l'enchère que vous souhaitez.
      <p class="text-purple-500 font-bold mt-5">
        Il y a {{ auctions.length }} enchère(s) à venir
      </p>
    </p>
  </div>

  <div class="container mx-auto px-0 xl:px-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div
        v-for="auction in auctions"
        :key="auction.id"
        class="mb-10"
      >
        <AuctionTypeFuture :auction="auction" />
      </div>
      <!-- <div
        class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
      >
        1
      </div> -->
      
    </div>
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