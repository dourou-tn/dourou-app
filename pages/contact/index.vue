<template>
  <div class="page-contact">
    <div
      class="bg-purple-300 shadow-md rounded-lg max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg mb-20 mt-6">
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
          <!-- <button
            class="text-sm uppercase font-bold tracking-wide bg-orange-500 rounded-lg hover:shadow-md py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500">
            {{  }}
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';

export default {
  name: 'PageContact',
  components: {
    DouInput,
    DouButton,
  },
  data() {
    return {
      
    }
  }
}
</script>
