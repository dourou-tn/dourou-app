<template>
  <article class="bg-white rounded m-5 relative mb-20 mt-14 px-1 sm:px-2 md:px-10 lg:px-20 xl:px-24 shadow-md border-solid border-1 border-gray-200">

    <!-- Date (visible only on desktop) -->
    <div class="absolute transform -translate-x-1/2 bg-purple-500 left-1/2 -top-7 text-white text-center rounded-lg px-10 py-1 shadow-md">
      <div class="leading-6">{{ $t('auction.date', { date: formatedAuction.date }) }}</div>
      <div class="leading-6">{{ $t('auction.time', { time: formatedAuction.time }) }}</div>
    </div>

    <div class="pt-10 px-2">

      <!-- image + name + info -->
      <div class="flex">
        <!-- image -->
        <div class="mr-2">
          <img :src="formatedAuction.image_path" alt="product" class="rounded" width="200">
        </div>
        
        <div class="info flex flex-col justify-around flex-1 mt-2">
          <!-- name -->
          <div class="text-2xl font-medium mb-5 pl-2">
            {{ formatedAuction.product_name }}
          </div>

          <!-- more info price start and price store -->
          <div class="flex justify-between md:justify-around text-center">
            <!-- start price -->
            <div class="leading-9">
              <div class="text-gray-700 text-sm">{{ $t('auction.start_price') }}</div>
              <div class="text-purple-500">{{ formatedAuction.start_price }} DT</div>
            </div>

            <!-- Store price -->
            <div class="leading-9">
              <div class="text-gray-700 text-sm">{{ $t('auction.store_price') }}</div>
              <div class="text-purple-500"><s>{{ formatedAuction.store_price }} DT</s></div>
            </div>
          </div>

          <!-- Progress -->
          <div class="leading-10 mt-4">
              <div class="text-gray-500 text-sm ">{{ $t('auction.room_fullnes', { full: 20 }) }}</div>
              <Progress :value="20" class="shadow-md"/>
          </div>
        </div>
      </div>

      <!-- Btn participer -->
      <div class="text-center mb-5 mt-5">
        <auction-subscribe-btn
          :auction="formatedAuction"
        />
      </div>
    </div>

  </article>
</template>

<script>
import moment from 'moment';
import Doulink from 'dourou-components/DouLink/index.vue';

import Progress from "../../Common/Progress.vue";
  export default {
    name: "HomeAuctionItem",
    props: ["auction"],
    components: { Progress, Doulink },
    data() {
      return {
        moment: moment
      }
    },
    computed: {
      formatedAuction () {
        const product = JSON.parse(this.auction.product);
        return {
          id: this.auction.id,
          date: this.moment(this.auction.start_date).format('DD/MM/YYYY'),
          time: this.moment(this.auction.start_date).format('HH:mm'),
          start_price: this.auction.start_price,
          store_price: Math.round(product.price * 100) / 100,
          image_path: `http://localhost:5000/${product.image_path}`,
          subscribe_price: this.auction.subscribe_price,
          product_name: product.name,
        }
      }
    }
}
</script>

