<template>
  <Countdown :date="deadline" />
</template>

<script>
import Countdown from '~/components/Timer/index.vue';

export default {
  name: 'DemoCountdown',
  components: { Countdown },
  data () {
    return {
      deadline: '2022-02-01 02:00:00',
    }
  }
}
</script>