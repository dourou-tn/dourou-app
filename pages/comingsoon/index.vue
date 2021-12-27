<template>
  <div class="flex items-center justify-center h-screen bg-purple-500">
    <select v-model="$i18n.locale">
      <option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
        >{{ lang.name }}</option
      >
    </select>
  <!-- <div class="container"> -->
    <div class="">
      <div class="text-center">

        <h2 class="text-white text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
          {{$t('comingsoon.title')}}
        </h2>

        <h3 class="text-white text-xl md:text-3xl mt-10">{{$t('comingsoon.subtitle')}}</h3>

        <p class="text-md md:text-xl mt-10"><a class="hover:underline" href="https://www.quicktoolz.com">Quicktoolz</a> is a website help you provide simple productivity tools for your daily need online for free.</p>

      </div>
      <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3 text-center">
          <p class="text-white">{{ $t("comingsoon.contact.headline") }}</p>
          <input type="text" v-model="contact.email"/>
          <div class="social-icons">
            <a href="#">{{ $t('global.social.facebook') }}</a>
            <a href="#">{{ $t('global.social.instagram') }}</a>
            <a href="#">{{ $t('global.social.youtube') }}</a>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</div>
</template>

<script>
export default {
  name: 'Comingsoon',
  layout: 'comingsoon',
  data() {
    return {
      contact: {
        email: '',
      },
    }
  },
}
</script>