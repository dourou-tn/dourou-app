<template>
  <div class="bg-white shadow-md border border-gray-200 rounded-lg relative mx-auto mb-20 pt-10 xl-mx-10">

    <div class="absolute transform -translate-x-1/2 bg-purple-500 left-1/2 -top-7 text-white text-center rounded-lg font-semibold w-2/6 py-1 shadow-md">
      <div>{{ $t('auction.date', { date: formatedAuction.date }) }}</div>
      <div>{{ $t('auction.time', { time: formatedAuction.time }) }}</div>
    </div>

    <div class="block sm:flex px-5 lg:px-52">
      <img class="rounded-t-lg mx-auto" :src="formatedAuction.image_path" max-width="250">

      <div class="p-5 text-center sm:text-left w-full">
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{{ formatedAuction.product_name }}</h5>

        <div class="my-10 grid grid-cols-2 grid-flow-col gap-4 text-center">
          <!-- Start price -->
          <div>
            <div class="text-gray-700 text-md">{{ $t('auction.start_price') }}</div>
            <div class="text-purple-500 text-md">{{ $t('global.price', { price: formatedAuction.start_price}) }}</div>
          </div>

          <!-- Store price -->
          <div class="">
            <div class="text-gray-700 text-md">{{ $t('auction.store_price') }}</div>
            <div class="text-purple-500 text-md">
              <s>{{ $t('global.price', { price: formatedAuction.store_price}) }}</s></div>
          </div>
        </div>

        <div>
          <div class="text-gray-500 text-sm">{{ $t('auction.room_fullnes', { full: 20 }) }}</div>
          <Progress :value="20" class="shadow-md"/>
        </div>
      </div>
    </div>
    <div class="text-center my-5 mt-5">
      <auction-subscribe-btn
        :auction="formatedAuction"
        class="mt-10 md:mt-0"
      />
    </div>

  </div>
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

