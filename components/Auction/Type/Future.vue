<template>
  <article class="bg-white rounded relative mb-20 pb-10 mt-14 px-0 sm:px-2 md:px-10 lg:px-10 xl:px-24 shadow-md border-solid border-1 border-gray-200">

    <!-- Date (visible only on desktop) -->
    <div class="absolute transform -translate-x-1/2 bg-purple-500 left-1/2 -top-7 text-white text-center rounded-lg w-1/3 font-bold py-1 shadow-md">
      <div>{{ $t('auction.date', { date: formatedAuction.date }) }}</div>
      <div>{{ $t('auction.time', { time: formatedAuction.time }) }}</div>
    </div>

    <div class="pt-10">

      <!-- image + name + info -->
      <div class="flex">
        <!-- image -->
        <div class="pe-5">
          <img :src="formatedAuction.image_path" alt="product" class="rounded shadow-md" width="200">
        </div>

        <!-- infos -->
        <div class="info flex flex-col justify-around flex-1 mt-2">
          <!-- name -->
          <div class="subpixel-antialiased text-2xl font-semibold text-gray-800">
            {{ formatedAuction.product_name }}
          </div>

          <!-- more info price start and price store -->
          <div class="my-5 flex justify-around text-center">
            <!-- start price -->
            <div class="">
              <div class="text-gray-700">{{ $t('auction.start_price') }}</div>
              <div class="text-purple-500 text-2xl">{{ $t('global.price', { price: formatedAuction.start_price}) }}</div>
            </div>

            <!-- Store price -->
            <div class="">
              <div class="text-gray-700">{{ $t('auction.store_price') }}</div>
              <div class="text-purple-500 text-2xl">
                <s>{{ $t('global.price', { price: formatedAuction.store_price}) }}</s></div>
            </div>
          </div>

          <!-- Progress + subscribe btn -->
          <div class="flex items-center justify-center flex-col md:flex-row">
            <div class="md:flex-1 w-full me-3">
              <div class="text-gray-500 text-sm">{{ $t('auction.room_fullnes', { full: 20 }) }}</div>
              <Progress :value="20" class="shadow-md"/>
            </div>

            <auction-subscribe-btn
              :auction="formatedAuction"
              class="mt-10 md:mt-0"
            />

          </div>
        </div>
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

