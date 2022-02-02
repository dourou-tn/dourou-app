<template>
  <div class="page-contact max-w-screen-md mx-auto">
    <section
      class="sm:my-8 bg-purple-300 shadow-md rounded-lg px-8 grid gap-8 grid-cols-1 md:grid-cols-2 py-8 mx-auto">
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-purple-500 text-4xl lg:text-5xl font-bold leading-tight">{{ $t('contact.title') }}</h2>
          <div class="text-purple-400">{{ $t('contact.subtitle') }}</div>
        </div>
        <div class="mt-8 text-center">
          <SVG-Contact />
        </div>
      </div>
      <div class="">
        <div>
          <span class="uppercase text-sm text-purple-500 font-bold">{{ $t('contact.form.name') }}</span>
          <DouInput
            :placeholder="$t('contact.form.name')"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-purple-500 font-bold">{{ $t('contact.form.email') }}</span>
          <DouInput
            :placeholder="$t('contact.form.email')"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-purple-500 font-bold">{{ $t('contact.form.message') }}</span>
          <textarea
            class="w-full h-32 bg-purple-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-purple-500 border border-1 border-purple-400 "></textarea>
        </div>
        <div class="mt-8">
          <DouButton
            :label="$t('contact.form.send')"
            class="w-full"
            color="orange-500"
            textColor="purple-500"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import SVGContact from '~/components/SVG/contact.vue';
export default {
  name: 'PageContact',
  transition: 'home',
  components: {
    DouInput,
    DouButton,
    SVGContact,
    DouTitle
  },
  data() {
    return {
      
    }
  }
}
</script>
