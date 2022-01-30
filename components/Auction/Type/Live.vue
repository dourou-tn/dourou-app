<template>
  <div class="block sm:flex items-center mb-16 bg-purple-300 shadow-md rounded-lg px-10">
    <div class="">
      <img class="rounded mx-auto" :src="`http://localhost:5000/${JSON.parse(auction.product).image_path}`" max-width="250">
    </div>

    <div class="text-center sm:text-left w-full mx-5 py-5">

      <!-- count down + name -->
      <div class="mb-5 flex items-center justify-between">
        <h5 class="ms-6 text-purple-500 font-bold text-2xl tracking-tight mb-5">{{ JSON.parse(auction.product).name }}</h5>
        <div ref="counter">
          <client-only>
            <flip-countdown
              v-if="end_date"
              :deadline="end_date"
              :labels="{
                days: this.$t('global.time.days'),
                hours: this.$t('global.time.hours'),
                minutes: this.$t('global.time.minutes'),
                seconds: this.$t('global.time.seconds'),
              }"
              @timeElapsed="timeElapsedHandler"
              :showDays="false"
              :showHours="false"
            />
          </client-only>
        </div>
      </div>

      <div class="mt-3 flex flex-row justify-around mb-5">
        <div class="text-center">
          <div class="text-purple-600 text-md">Prix en cours</div>
          <div class="text-purple-500 text-xl font-bold">10.200 dt</div>
        </div>
        <div class="text-center">
          <div class="text-purple-600 text-md">Dernière enchère</div>
          <div class="text-purple-500 text-xl font-bold">THE J0k</div>
        </div>

      </div>

      <div v-if="$auth.user && auction.is_subscribed">
        <div class="flex justify-around">
          <DouButton
            label="+ 100 millimes"
            color="orange-500"
            textColor="purple-500"
            @click="addTimer"
          />
          <div class="w-14">
            <img :src="tokenImage" class="object-scale-down	">
          </div>
          <DouButton
            label="+ 200 millimes"
            color="orange-500"
            textColor="purple-500"
          />
        </div>

        <div class="text-center mt-10">
          <DouButton
            label="Acheter Dourou"
            color="purple-500"
            textColor="orange-500"
          />
        </div>
      </div>


      <!-- <div class="text-center my-5 mt-5">
        <auction-subscribe-btn
          :auction="auction"
          class="mt-10 md:mt-0"
        />
      </div> -->
    </div>

  </div>
</template>

<script>
import moment from "moment";
import FlipCountdown from 'vue2-flip-countdown';
import DouButton from "dourou-components/DouButton/index.vue";

export default {
  name: 'AuctionLiveComponent',
  props: {
    auction: {
      type: Object,
      required: true
    },
  },
  components: {
    FlipCountdown,
    DouButton
  },
  computed: {
    end_date () {
      return moment(moment(this.auction.start_date).add(10, 'minutes')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  data () {
    return {
      moment: moment,
      tokenImage: require('~/assets/image/token.png'),
    }
  },
  methods: {
    timeElapsedHandler () {
      this.$router.push(this.localePath('/'))
    },
    addTimer(){
      const newTime = moment(this.auction.start_date).add(10, 'seconds').format('YYYY-MM-DD HH:mm:ss');
      this.auction.start_date = newTime;
      this.$refs.counter.classList.add('animate-bounce');
      setTimeout(() => {
        this.$refs.counter.classList.remove('animate-bounce');
      }, 500)
    }
  }
}
</script>

<style>
  /* .flip-clock__card {
    font-size: 1.85rem !important;
  }
  .flip-clock__slot {
    font-size: 0.8rem !important;
  } */
</style>