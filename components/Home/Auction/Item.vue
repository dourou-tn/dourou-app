<template>
  <article class="bg-white rounded m-5 relative mb-10">

    <!-- visible only on desktop -->
    <div class="hidden sm:block absolute bg-purple text-white left-1/2 -top-7 px-10 py-2 text-center transform -translate-x-1/2 rounded sm:rounded-b">
      <div class="text-sm leading-4">Le 01/12/2022</div>
      <div class="text-sm leading-4">à 19:00</div>
    </div>

    <div class="flex flex-col justify-between sm:flex-row sm:p-3">

      <!-- visible only on mobile -->
      <div class="block sm:hidden text-center bg-purple pt-2 mb-5 rounded-t">
        <div class="text-sm text-xl pb-2 text-white">Le 01/12/2022 à 19:00</div>
      </div>

      <div class="flex items-center lg:w-3/7">
        <img :src="auction.img" alt="product" class="rounded">
        <div class="ml-5 text-xl">
          {{ auction.name }}
        </div>
      </div>

      <div class="mt-5 lg:m-0 flex items-center text-center justify-around flex-1">

        <div class="auction_start_price">
          <div class="text-gray-500 text-sm">Prix de départ</div>
          <div class="auction_info_start_price">{{ auction.start_price }} DT</div>
        </div>

        <div class="auction_store_price">
          <div class="text-gray-500 text-sm">Prix magasin</div>
          <div class="auction_info_store_price"><s>{{ auction.store_price }} DT</s></div>
        </div>

        <div class="auction_limite">
          <div class="text-gray-500 text-sm">Salle remplie à</div>
          <div class="auction_info_limite">{{ auction.full }}%</div>
        </div>

        <!-- <button class="auction_participate">Participer à 10DT</button> -->
      </div>

    </div>

  </article>
</template>

<script>
  export default {
    name: 'HomeAuctionItem',
    props: ['auction'],
  }
</script>

