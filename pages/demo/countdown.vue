<template>
  <div>
    <Countdown :date="deadline" />
    <button @click="reset">Start</button>
  </div>
</template>

<script>
import Countdown from '~/components/Timer/index.vue';

export default {
  name: 'DemoCountdown',
  components: { Countdown },
  data () {
    return {
      deadline: this.$moment().add(10, 's').format('YYYY-MM-DD HH:mm:ss'),
    }
  },
  methods: {
    reset () {
      console.log('moment', this.$moment().format('YYYY-MM-DD HH:mm:ss'));
      console.log('mom+10', this.$moment().add(10, 's').format('YYYY-MM-DD HH:mm:ss'));
      // this.deadline = null;
      this.deadline = this.$moment().add(10, 's').format('YYYY-MM-DD HH:mm:ss');
    }
  },
}
</script>