<template>
  <div class="page-contact max-w-screen-md mx-auto">
    <DouTitle text="Enchere en cours" />
    <DouLoader v-if="$fetchState.pending" />
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <DouCard v-else class="py-12 mb-20">
      <!-- <div class="mb-12">
        <img class="rounded-md mx-auto" :src="`http://localhost:5000/${auction.product.image_path}`">
      </div> -->
      <Timer v-if="timer_started" :date="$moment(auction.end_date).format('YYYY-MM-DD HH:mm:ss')" :class="{ 'animate-ping': stress_phase }" class="text-4xl font-bold text-purple-500 mb-12"/>
      <span v-if="isLastBider" class="text-sm text-center">Vous êtes le dernier enchèreur.</span>
      <div class="flex justify-around mb-12 text-center">
        <div class="pb-2">
          <div class="text-2xl font-bold text-gray-800">{{ $t('global.price', { price: auction.current_price })}}</div>
          <div class="text-gray-500">Prix actuel</div>
        </div>
        <div>

          <div class="text-2xl font-bold text-gray-800">{{ auction.last_bider }}</div>
          <div class="text-gray-500">Dernier Enchèreur</div>
        </div>
      </div>

      <div class="mb-12">
        <p class="ms-5 text-gray-500 mb-1">Un click coute 1 DOUROU</p>
        <div class="flex justify-around">
          <DouButton
            label="+100"
            class="w-full mx-5"
            @click="bidHandler(0.1)"
          />
          <!-- :disabled="isLastBider" -->

          <DouButton
            label="+200"
            class="w-full mx-5"
            @click="bidHandler(0.2)"
          />
          <!-- :disabled="isLastBider" -->
        </div>
      </div>

      <div>
        <p class="ms-5 text-gray-500 mb-1">Vous pouvez acheter + de DOUROU</p>
        <div class="flex mx-5">
          <DouButton
            label="Acheter des DOUROU"
            color="orange-500"
            textColor="purple-500"
            class="w-full"
          ></DouButton>
        </div>
      </div>
    </DouCard>
  </div>
</template>

<script>
import Timer from '@/components/Timer/index.vue';
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouCard from 'dourou-components/DouCard/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import DouLoader from 'dourou-components/DouLoader/index.vue';


export default {
  name: 'Room',
  components: { DouTitle, DouCard, DouButton, Timer, DouLoader},
  data () {
    return {
      auction: null,
      socket: null,
      timer_started: false,
      stress_phase: false,
    }
  },
  computed: {
    isLastBider () {
      return this.auction.last_bider === this.$auth.user.username;
    }
  },
  mounted() {
    const that = this;

    this.socket = that.$nuxtSocket({
      name: `room`,
    });

    this.socket.on("bid", ({ auction_id, current_price, last_bider, amount, stress_phase }) => {
      console.log('## bid', auction_id, current_price, last_bider, amount, stress_phase);
      console.log('stress_phase comp', this.stress_phase);

      if (this.stress_phase) {
        that.auction.end_date = this.$moment().add(10, 's');
      }

      this.updateCurrentPrice(current_price);
      this.updateLastBider(last_bider);
      that.$auth.fetchUser();
    });

    this.socket.on('tick:regular', () => {
      console.log('tick:regular');
      if (!that.timer_started) that.timer_started = true;
    });

    this.socket.on('tick:stress_phase', () => {
      console.log('tick:stress_phase');
      if (!that.stress_phase) that.stress_phase = true;
      console.log('stress_pase', that.stress_phase);
    })

  },
  async fetch() {
    const { id } = this.$route.params;
    const response = await this.$axios.post('client/room', { auction_id: id });
    this.auction = response.data;
  },
  methods: {
    async bidHandler (amount) {
      console.log(this.auction.end_date);
      console.log(this.$moment().add(10, 'seconds'))
      try {
        await this.$store.dispatch('bid/bid', {
          auction_id: this.auction.id,
          amount,
        });
      } catch (error) {
        console.error(error);
      }
    },
    updateCurrentPrice (currentPrice) {
      this.auction.current_price = currentPrice;
    },
    updateLastBider (last_bider) {
      this.auction.last_bider = last_bider;
    }
  }
}
</script>