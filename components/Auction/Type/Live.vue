<template>
  <div class="block sm:flex px-5 lg:px-52">
    <img class="rounded mx-auto" :src="`http://localhost:5000/${JSON.parse(auction.product).image_path}`" max-width="250">

    <div class="p-5 text-center sm:text-left w-full">
      <h5 class="ms-6 text-purple-500 font-bold text-2xl tracking-tight mb-2">{{ JSON.parse(auction.product).name }}</h5>
      <!-- count down -->
      <no-ssr>
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
        />
      </no-ssr>
    

      <div class="text-center my-5 mt-5">
        <auction-subscribe-btn
          :auction="auction"
          class="mt-10 md:mt-0"
        />
      </div>
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
      return moment(moment(this.auction.start_date).add(10, 'minutes')).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  data () {
    return {
      moment: moment
    }
  },
  methods: {
    timeElapsedHandler () {
      this.$router.push(this.localePath('/'))
    }
  }
}
</script>