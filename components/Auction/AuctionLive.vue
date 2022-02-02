<template>
  <DouCard class="pt-10 pb-5 mb-5">
    <div class="absolute transform -translate-x-1/2 bg-purple-600 left-1/2 -top-4 text-orange-500 text-center rounded-lg font-semibold w-2/3 px-2 py-2 shadow-md text-xl">
      <Timer :date="moment(auction.end_date).format('YYYY-MM-DD HH:mm:ss')" @countdown-finish="closeAuction" />
    </div>
    <div class="pt-2 flex flex-col sm:flex-row text-center sm:text-start">
      <div>
        <img class="rounded-md mx-auto" :src="`http://localhost:5000/${auction.product.image_path}`">
      </div>

      <div class="w-full pr-5">
        <h5 class="text-purple-500 text-xl tracking-tight mb-2">{{ auction.product.name }}</h5>

        <div class="flex justify-between items-center text-center">
          <div>
            <div class="text-purple-600 text-sm">{{ $t('auction.start_price') }}</div>
            <div class="text-purple-500 text-xl font-bold">{{ $t('global.price', { price: auction.start_price }) }}</div>
          </div>

          <!-- Store price -->
          <div>
            <div class="text-purple-600 text-sm">{{ $t('auction.store_price') }}</div>
            <div class="text-purple-500 text-xl font-bold">
              <s>{{ $t('global.price', { price: auction.product.price }) }}</s></div>
          </div>
        </div>
      </div>
    </div>

      <div class="text-center mt-5">
        <div class="flex justify-around">
          <div class="flex flex-col">
            <span>Prix Actuel</span>
            <span>5 dt</span>
          </div>
          <div class="flex flex-col">
            <span>Dernier Enchèreur</span>
            <span>Jamel</span>
          </div>
        </div>

        <div class="mt-5" v-if="!auction.is_finished">
          <DouLink
            v-if="auction.is_subscribed"
            :to="`/room/${auction.id}`"
            :text="'Rejoindre la salle'"
            color="purple-500"
            bg-color="orange-500"
          />
          <SubscribeButton v-else :auction="auction" />
        </div>
      </div>
  </DouCard>
</template>

<script>
import moment from "moment";
import DouButton from "dourou-components/DouButton/index.vue";
import DouLink from "dourou-components/DouLink/index.vue";
import DouCard from "dourou-components/DouCard/index.vue";
import SubscribeButton from '~/components/Auction/SubscribeBtn.vue';
import Timer from '~/components/Timer/index.vue';

export default {
  name: 'AuctionLiveComponent',
  props: {
    auction: {
      type: Object,
      required: true
    },
  },
  components: {
    DouButton,
    DouCard,
    SubscribeButton,
    Timer,
    DouLink,
  },
  data () {
    return {
      moment: moment,
      tokenImage: require('~/assets/image/token.png'),
      formatedAuction: {},
    }
  },
  methods: {
    timeElapsedHandler () {
      this.$router.push(this.localePath('/'))
    },
    closeAuction () {
      this.auction.is_finished = true;
    }
  }
}
</script>
