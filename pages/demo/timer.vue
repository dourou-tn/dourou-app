<template>
  <div class="h-screen">
    <Timer :end-time="end_time" />
    <button @click="addsec">Add 1 second</button>
  </div>
</template>

<script>
import Timer from 'dourou-components/DouTimer/index.vue';

export default {
  name: 'DemoTimer',
  components: { Timer },
  data() {
    return {
      end_time: '2022-02-05 00:00:00'
    }
  },
  methods: {
    addsec () {
      this.end_time = this.$moment(this.end_time).add(1, 's').format('YYYY-MM-DD HH:mm:ss');
    }
  }
}
</script>