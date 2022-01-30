<template>
  <DouCard class="py-10">
    <div class="absolute transform -translate-x-1/2 bg-purple-600 left-1/2 -top-4 text-orange-500 text-center rounded-lg font-semibold w-2/3 px-2 py-2 shadow-md">
      <!--  -->
      <div>{{ $t('auction.date', { date: formatedAuction.date }) }} {{ $t('auction.time', { time: formatedAuction.time }) }}</div>
    </div>

    <div class="pt-5 pb-5  flex flex-col sm:flex-row text-center sm:text-start">
      <div>
        <img class="rounded-md mx-auto" :src="formatedAuction.image_path">
      </div>

      <div class="w-full">
        <h5 class="text-purple-500 text-xl tracking-tight mb-2">{{ formatedAuction.product_name }}</h5>

        <div class="mt-3 me-3">
          <div class="text-sm text-purple-500">{{ $t('auction.room_fullnes', { full: 20 }) }}</div>
          <Progress :value="20" class="shadow-md"/>
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-around items-center text-center my-10">
        <!-- Start price -->
        <div>
          <div class="text-purple-600 text-sm">{{ $t('auction.start_price') }}</div>
          <div class="text-purple-500 text-xl font-bold">{{ $t('global.price', { price: formatedAuction.start_price}) }}</div>
        </div>

        <!-- Store price -->
        <div>
          <div class="text-purple-600 text-sm">{{ $t('auction.store_price') }}</div>
          <div class="text-purple-500 text-xl font-bold">
            <s>{{ $t('global.price', { price: formatedAuction.store_price}) }}</s></div>
        </div>

      </div>
      <div class="text-center">
        <auction-subscribe-btn
          :auction="formatedAuction"
        />
      </div>

    </div>
  </DouCard>
</template>

<script>
import moment from 'moment';
import 'moment/locale/fr';

import Doulink from 'dourou-components/DouLink/index.vue';
import DouCard from 'dourou-components/DouCard/index.vue';
import Progress from "../../Common/Progress.vue";

  export default {
    name: "HomeAuctionItem",
    props: ["auction"],
    components: { Progress, Doulink, DouCard },
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

