<template>
  <div class="text-center">
    
    <h2 class="text-xl mt-10 mb-10">
      Start time {{ startTime ? startTime.format('DD/MM/YYYY HH:mm:ss') : '' }}
    </h2>

    <h3 class="text-6xl text-white bg-purple font-bold p-2 rounded-xl">{{ countDownFormat  }}</h3>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  data () {
    return {
      moment: moment,
      socket: null,
      startTime: null,
      countDown: null,
      countDownFormat: '',
      counterInterval: null,
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'home',
    })

    this.socket.on("heartbeat", ({ startTime, countDown }) => {

      this.startTime = moment(startTime);
      this.countDown = countDown;

      if (this.counterInterval) {
        clearInterval(this.counterInterval)
      }

      this.counterInterval = setInterval(() => {
        this.countDown = this.countDown - 1000;
        this.countDownFormat = moment.utc(this.countDown).format('HH:mm:ss');
      }, 1000);

    });

  },
  destroyed() {
    clearInterval(this.counterInterval)
    this.socket.off("connect_error");
  }
}
</script>