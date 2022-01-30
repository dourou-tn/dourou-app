<template>
  <div
    class="coming-soon h-screen container mx-auto text-center text-white"
  >
    <!-- {{ width }} -->
    <div class="h-full flex flex-col justify-around py-5 md:py-8 lg:py-10">
      <DouLogo light class="mx-auto"/>

      <HeaderTitle />

      <flip-countdown v-if="startDate" :deadline="startDate" :labels="labels"></flip-countdown>

      <NewsLetter class="px-10" />

      <div class="mx-auto text-center">
        <SocialIcons class="mb-2"/>
        <LocalSelector />
      </div>
    </div>

  </div>
</template>

<script>
import DouLogo from 'dourou-components/DouLogo/index.vue';
import DouInput from 'dourou-components/DouInput/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import LocalSelector from '~/components/LocaleSelector/index.vue';
import FlipCountdown from 'vue2-flip-countdown';

import NewsLetter from '~/components/Comingsoon/Newsletter.vue';
import SocialIcons from '~/components/Comingsoon/SocialIcons.vue';
import HeaderTitle from '~/components/Comingsoon/HeaderTitle.vue';


export default {
  name: 'Comingsoon',
  layout: 'comingsoon',
  components: {
    DouLogo,
    FlipCountdown,
    DouInput,
    DouButton,
    LocalSelector,
    NewsLetter,
    SocialIcons,
    HeaderTitle
  },
  async mounted () {
    // const config = await this.$store.dispatch('config/get', 'open-date');
    // this.startDate = JSON.parse(config[0].value).value;
    this.startDate = '2022-02-01 00:00:00';
  },
  data () {
    return {
      labels: {
        days: this.$t('global.time.days'),
        hours: this.$t('global.time.hours'),
        minutes: this.$t('global.time.minutes'),
        seconds: this.$t('global.time.seconds'),
      },
      startDate: null,
    }
  },
}
</script>

<style scoped>
  /*  */
</style>