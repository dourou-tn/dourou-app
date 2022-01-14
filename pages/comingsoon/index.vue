<template>
  <div class="text-center flex flex-col	items-center justify-center pt-10 pb-10">

      <DouLogo light width="32" class="mb-10" />

      <!-- title & subtitle -->
      <div class="px-2">
        <h2 class="comingsoon-title text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-15 font-bold">
          {{$t('comingsoon.title')}}
        </h2>

        <h3 class="text-white text-2xl md:text-5xl lg:text-6xl xl:text-7xl mb-10">{{$t('comingsoon.subtitle')}}</h3>

      </div>

      <!-- image token -->
      <img :src="tokenImage" width="100" alt="Image du jeton dourou.tn" class="mb-10 image__token">

      <!-- counter -->
      <flip-countdown deadline="2022-01-13 14:00:00" :labels="labels"></flip-countdown>

      <div class="flex flex-wrap mt-20 justify-center ">
        <div class="m-3 text-center">
          <p class="text-white">{{ $t("comingsoon.contact.headline") }}</p>
          <input v-model="contact.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" :placeholder="$t('global.auth.form.email.placeholder')">

          <div class="social-icons mt-10">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'facebook-square']" class="mx-2 fa-3x text-white" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'instagram-square']" class="mx-2 fa-3x text-white" />
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'youtube-square']" class="mx-2 fa-3x text-white" />
            </a>
          </div>
        </div>
      </div>

      <div class="flags">
        <LocalesSelector />
      </div>
</div>
</template>

<script>
import DouLogo from 'dourou-components/DouLogo/index.vue';
import FlipCountdown from 'vue2-flip-countdown'

export default {
  name: 'Comingsoon',
  layout: 'comingsoon',
  components: { FlipCountdown, DouLogo },
  data () {
    return {
      contact: {
        email: '',
      },
      labels: {
        days: this.$t('global.time.days'),
        hours: this.$t('global.time.hours'),
        minutes: this.$t('global.time.minutes'),
        seconds: this.$t('global.time.seconds'),
      },
      tokenImage: require('~/assets/image/token.png')
    }
  }
}
</script>

<style scoped>
.flip-clock__slot {
  color: white;
  display: none;
}

@keyframes flip_animation {
  from {transform: rotateY(0deg);}
  to {transform: rotateY(360deg);}
}

@keyframes flip_animation_leave {
  from {transform: rotateY(360deg);}
  to {transform: rotateY(0deg);}
}

.image__token {
  animation-name: flip_animation;
  animation-duration: 1s;
}
.image__token:hover {
  animation-name: flip_animation_leave;
  animation-duration: 1s;
}
</style>