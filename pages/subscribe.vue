<template>
  <div class="page-subscribe">
    <h2 class="text-purple-500 font-bold text-2xl text-center font-medium my-10">
      {{ $t('subscribe.title') }}
    </h2>
    <div class="bg-purple-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" v-if="!loading">

      <!-- img + name + date + time -->
      <div class="text-center mb-5 relative">
        <div class="absolute transform -translate-x-1/2 bg-purple-600 left-1/2 -top-10 text-orange-500 text-center rounded-lg font-semibold w-2/6 py-1 shadow-md">
          <!--  -->
          <div>{{ $t('auction.date', { date: auction.start_date }) }} {{ $t('auction.time', { time: auction.start_time }) }}</div>
        </div>

        <img :src="`http://localhost:5000/${product.image_path}`" :alt="`image de ${auction.product.name}`" class="rounded m-auto">

        <h2 class="text-purple-500 font-bold text-2xl text-center font-medium my-3">{{product.name}}</h2>

        <!-- description -->

        <ProductDescription :content="product.description" />
        <!-- count down -->
        <!-- <client-only>
          <flip-countdown
            :deadline="`${moment(auction.start_date).format('YYYY-MM-DD')} ${auction.start_time}`"
            :labels="{
              days: this.$t('global.time.days'),
              hours: this.$t('global.time.hours'),
              minutes: this.$t('global.time.minutes'),
              seconds: this.$t('global.time.seconds'),
            }"
          />
        </client-only> -->

      </div>

      <!-- prices -->
      <payement-prices :prices="[
        { label: $t('subscribe.sub_price'), price: Math.round(auction.subscribe_price * 100) / 100 }
      ]" />

      <!-- loader -->
      <Douloader v-if="loading" />

      <!-- buttons + alerts (success, is_subscribed)-->
      <div v-else>
        <payement-methods @submit:method="subscribe" v-if="!auction.is_subscribed && !success" />

        <!-- success -->
        <div class="flex justify-center" v-if="success">
           <div class="max-w-2xl mx-auto bg-purple-500 shadow-lg rounded-lg">
              <div class="px-6 py-5">
                  <div class="flex items-start">
                      <!-- Icon -->
                      <i class="mdi mdi-creation"></i>
                      <svg class="fill-current flex-shrink-0" width="60" height="60" viewBox="0 0 30 30">
                        <path class="text-indigo-300" d="M9.917,0.875c-5.086,0-9.208,4.123-9.208,9.208c0,5.086,4.123,9.208,9.208,9.208s9.208-4.122,9.208-9.208
                        C19.125,4.998,15.003,0.875,9.917,0.875z M9.917,18.141c-4.451,0-8.058-3.607-8.058-8.058s3.607-8.057,8.058-8.057
                        c4.449,0,8.057,3.607,8.057,8.057S14.366,18.141,9.917,18.141z M13.851,6.794l-5.373,5.372L5.984,9.672
                        c-0.219-0.219-0.575-0.219-0.795,0c-0.219,0.22-0.219,0.575,0,0.794l2.823,2.823c0.02,0.028,0.031,0.059,0.055,0.083
                        c0.113,0.113,0.263,0.166,0.411,0.162c0.148,0.004,0.298-0.049,0.411-0.162c0.024-0.024,0.036-0.055,0.055-0.083l5.701-5.7
                        c0.219-0.219,0.219-0.575,0-0.794C14.425,6.575,14.069,6.575,13.851,6.794z"></path>
                          
                      </svg>
                      <!-- Card content -->
                      <div class="flex-grow truncate">
                        <!-- Card header -->
                        <div class="w-full sm:flex justify-between items-center mb-3">
                          <!-- Title -->
                          <h2 class="text-xl leading-snug text-gray-50 truncate sm:mb-0">{{ $t('subscribe.success.header') }}</h2>
                          <!-- Like and comment buttons -->
                        </div>
                        <!-- Card body -->
                        <div class="flex items-end justify-between whitespace-normal">
                          <!-- Paragraph -->
                          <div class="text-sm max-w-md text-gray-50">
                            <p>
                              {{ $t('subscribe.success.text', { date: auction.start_date, time: auction.start_time }) }}
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <!-- is_subscribed -->
        <div class="flex justify-center" v-if="auction.is_subscribed && !success">
           <div class="max-w-2xl mx-auto bg-orange-500 shadow-lg rounded-lg">
              <div class="px-6 py-5">
                  <div class="flex items-start">
                      <!-- Icon -->
                      <svg class="fill-current flex-shrink-0" width="60" height="60" viewBox="0 0 30 30">
                        <path class="text-purple-500" d="M18.344,16.174l-7.98-12.856c-0.172-0.288-0.586-0.288-0.758,0L1.627,16.217c0.339-0.543-0.603,0.668,0.384,0.682h15.991C18.893,16.891,18.167,15.961,18.344,16.174 M2.789,16.008l7.196-11.6l7.224,11.6H2.789z M10.455,7.552v3.561c0,0.244-0.199,0.445-0.443,0.445s-0.443-0.201-0.443-0.445V7.552c0-0.245,0.199-0.445,0.443-0.445S10.455,7.307,10.455,7.552M10.012,12.439c-0.733,0-1.33,0.6-1.33,1.336s0.597,1.336,1.33,1.336c0.734,0,1.33-0.6,1.33-1.336S10.746,12.439,10.012,12.439M10.012,14.221c-0.244,0-0.443-0.199-0.443-0.445c0-0.244,0.199-0.445,0.443-0.445s0.443,0.201,0.443,0.445C10.455,14.021,10.256,14.221,10.012,14.221"></path>
                      </svg>
                      <!-- Card content -->
                      <div class="flex-grow truncate">
                        <!-- Card header -->
                        <div class="w-full sm:flex justify-between items-center mb-3">
                          <!-- Title -->
                          <h2 class="text-xl leading-snug text-purple-500 truncate sm:mb-0">{{ $t('subscribe.error.already_sub') }}</h2>
                          <!-- Like and comment buttons -->
                        </div>
                        <!-- Card body -->
                        <div class="flex items-end justify-between whitespace-normal">
                          <!-- Paragraph -->
                          <div class="text-sm max-w-md">
                            <p>
                              {{ $t('subscribe.error.text', { date: auction.start_date, time: auction.start_time }) }}
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <Douloader />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import FlipCountdown from 'vue2-flip-countdown';
import Douloader from 'dourou-components/DouLoader/index.vue';
import ProductDescription from '~/components/Product/Description.vue';

import PayementPrices from '~/components/Payement/Prices.vue';
import PayementMethods from '~/components/Payement/Methods.vue';

export default {
  name: 'AuctionSubscribe',
  middleware: 'auth',
  components: {
    Douloader,
    FlipCountdown,
    ProductDescription,
    PayementMethods,
    PayementPrices,
  },
  async mounted () {
    this.loading = true;
    if (!this.$route.query.auction_id) {
      this.$router.push('/');
    }
    else {
      this.auction = await this.$store.dispatch('auction/get', this.$route.query.auction_id);
      this.product = await this.$store.dispatch('products/get', this.auction.product_id);

      this.auction.start_date = moment(this.auction.start_date).format('YYYY-MM-DD');
      this.auction.start_time = moment(this.auction.start_date).format('HH:mm:ss');
    }
    this.loading = false;
  },
  data () {
    return {
      moment,
      auction: null,
      product: null,
      product: {},
      success: false,
      error: false,
      alreadySub: false,
      loading: true,
      images: {
        posteTN: require('~/assets/image/la-poste-tunisienne.png'),
        cb: require('~/assets/image/master-card-visa.png'),
      },
    }
  },
  methods: {
    async subscribe () {
      this.success = false;
      this.loading = false;
      this.error = false;

      try {
        // this.loading = true;
        let that = this;
        this.loading = true;
        await that.$store.dispatch('auction/subscribe', that.auction.id);
        this.auction.is_subscribed = true;
        await this.$auth.fetchUser();
        this.success = true;
        that.loading = false;
      } catch (error) {
        if (error.response) {
          const errorType = error.response.data.error;
          // user is already subscribed
          if (errorType === 'already_sub') {
            this.error = 'already_sub';
          }
        }
        this.success = false;
        this.loading = false;
      }
    },
  }
}
</script>
