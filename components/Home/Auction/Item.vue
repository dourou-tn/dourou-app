<template>
  <article class="bg-white rounded m-5 relative mb-20 mt-14">

    <!-- Date (visible only on desktop) -->
    <div class="absolute transform -translate-x-1/2 bg-purple left-1/2 -top-7 text-white text-center rounded-lg px-4 py-1">
      <div class="text-sm leading-5">Le {{ auction.date }}</div>
      <div class="text-sm leading-5">à {{ auction.time }}</div>
    </div>

    <div class="pt-10 px-2">

      <!-- image + name + info -->
      <div class="flex">
        <!-- image -->
        <div class="mr-1">
          <img :src="auction.img" alt="product" class="rounded">
        </div>
        
        <div class="info flex-1 mt-2">
          <!-- name -->
          <div class="text-2xl font-medium  mb-5">
            {{ auction.name }}
          </div>

          <!-- more info price start and price store -->
          <div class="flex justify-between text-center">
            <!-- start price -->
            <div class="leading-10">
              <div class="text-gray-500 text-sm ">Prix de départ</div>
              <div>{{ auction.start_price }} DT</div>
            </div>

            <!-- Store price -->
            <div class="leading-10">
              <div class="text-gray-500 text-sm">Prix magasin</div>
              <div><s>{{ auction.store_price }} DT</s></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress -->
      <div class="leading-10 mt-4">
          <div class="text-gray-500 text-sm ">Salle de ventes remplie à {{ auction.full }}%</div>
          <Progress :value="auction.full"/>
      </div>

      <!-- Btn participer -->
      <div class="text-center">
        <button class="text-sm bg-purple text-white px-10 py-2 rounded-lg my-5">Participez à 10</button>
      </div>
    </div>

  </article>
</template>

<script>
import Progress from "../../Common/Progress.vue";
  export default {
    name: "HomeAuctionItem",
    props: ["auction"],
    components: { Progress }
}
</script>

