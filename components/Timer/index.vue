<template>
  <div class="countdown">
    <div v-if="days" class="countdown__block">
      <div class="countdown__digit">{{ days | twoDigits }}</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ hours | twoDigits }}</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ minutes | twoDigits }}</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ seconds | twoDigits }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xxx',
  props: {
    date: null
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date,
      finish: false,
      counterInterval: null,
    }
  },
  mounted () {
    console.log('>>> timer mounted');
    const _self = this;
    this.counterInterval = window.setInterval(() => {
      console.log('>>> TIMER');
      this.now = Math.trunc((new Date()).getTime() / 1000);
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        console.log('FINISH');
        _self.finish = true;
        _self.$emit('countdown-finish');
        clearInterval(_self.counterInterval);
      }
    }, 1000);
  },
  beforeDestroy() {
    console.log('>>> timer destroyed');
    if (this.counterInterval) {
      clearInterval(this.counterInterval)
    }
  },
  computed: {
    secondCount () {
      return this.calculatedDate - this.now
    },
    calculatedDate () {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds () {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
}
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
}
.countdown__block {
  text-align: center;
  padding: 0px 15px;
  position: relative;
}
.countdown__block:first-child {
  padding-left: 0;
}
.countdown__block:first-child .countdown__digit:before {
  display: none;
}
.countdown__block:last-child {
  padding-right: 0;
}
.countdown__text {
  text-transform: uppercase;
  margin-bottom: 5px;
}
.countdown__digit {
  line-height: 1;
  margin-bottom: 5px;
}
.countdown__digit:before {
  content: ":";
  position: absolute;
  left: -5px;
}
</style>
