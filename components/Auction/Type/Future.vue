<template>
  <div class="mb-16 bg-purple-300 shadow-md rounded-lg relative">

    <div class="absolute transform -translate-x-1/2 bg-purple-600 left-1/2 -top-4 text-orange-500 text-center rounded-lg font-semibold w-2/6 py-1 shadow-md">
      <!--  -->
      <div>{{ $t('auction.date', { date: formatedAuction.date }) }} {{ $t('auction.time', { time: formatedAuction.time }) }}</div>
    </div>

    <div class="pt-16 pb-10 md:pb-5 sm:pt-10 flex flex-col sm:flex-row px-5 text-center sm:text-start">
      <div class="flex items-start justify-center pe-0 sm:pe-5">
        <img class="rounded-md" :src="formatedAuction.image_path">
      </div>

      <div class="w-full ps-1 pe-1">
        <h5 class="pt-5 sm:pt-0 text-purple-500 font-bold text-2xl tracking-tight mb-2">{{ formatedAuction.product_name }}</h5>

        <div class="mt-3">
          <div class="text-sm text-purple-500">{{ $t('auction.room_fullnes', { full: 20 }) }}</div>
          <Progress :value="20" class="shadow-md"/>
        </div>

        <div class="my-10 grid grid-cols-3 grid-flow-col items-center gap-4 text-center">
          <!-- Start price -->
          <div>
            <div class="text-purple-600 text-md">{{ $t('auction.start_price') }}</div>
            <div class="text-purple-500 text-xl font-bold">{{ $t('global.price', { price: formatedAuction.start_price}) }}</div>
          </div>

          <!-- Store price -->
          <div class="">
            <div class="text-purple-600 text-md">{{ $t('auction.store_price') }}</div>
            <div class="text-purple-500 text-xl font-bold">
              <s>{{ $t('global.price', { price: formatedAuction.store_price}) }}</s></div>
          </div>

          <div class="text-center">
            <auction-subscribe-btn
              :auction="formatedAuction"
            />
          </div>

        </div>

      </div>

    </div>


  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/fr';

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
          start_date: moment(this.auction.start_date),
          start_price: this.auction.start_price,
          store_price: Math.round(product.price * 100) / 100,
          image_path: `http://localhost:5000/${product.image_path}`,
          subscribe_price: this.auction.subscribe_price,
          product_name: product.name,
          is_subscribed: this.auction.is_subscribed,
        }
      }
    }
}
</script>

