<template>
  <div class="h-screen">
    <Countdown :date="deadline" @countdown-finish="partyHandler"  />
    <button @click="reset" ref="btn">Start</button>
    <div class="flex justify-center items-center h-50 bg-purple-500 font-bold w-1/2 m-auto p-12 rounded text-white" ref="lastBider">
      <div>You are the winner</div>
    </div>
  </div>
</template>

<script>
import Countdown from '~/components/Timer/index.vue';
import party from 'party-js';

export default {
  name: 'DemoCountdown',
  components: { Countdown },
  data () {
    return {
      deadline: this.$moment().add(3, 's').format('YYYY-MM-DD HH:mm:ss'),
      party: party
    }
  },
  methods: {
    reset () {
      this.deadline = this.$moment().add(5, 's').format('YYYY-MM-DD HH:mm:ss');
    },
    partyHandler () {
      console.log(this.party);
      this.party.sparkles(this.$refs.lastBider, {
        count: party.variation.range(10, 60),
	      speed: party.variation.range(50, 300),
      });
    }
  },
}
</script>