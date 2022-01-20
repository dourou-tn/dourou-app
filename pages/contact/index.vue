<template>
  <div class="page-contact">
    <div
      class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg mb-20 mt-6">
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-purple-700 text-4xl lg:text-5xl font-bold leading-tight">{{ $t('contact.title') }}</h2>
          <div class="text-gray-700 mt-8">{{ $t('contact.subtitle') }}</div>
        </div>
        <div class="mt-8 text-center">
          <SVG-Contact />
        </div>
      </div>
      <div class="">
        <div>
          <span class="uppercase text-sm text-gray-600 font-bold">{{ $t('contact.form.name') }}</span>
          <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">{{ $t('contact.form.email') }}</span>
          <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text">
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">{{ $t('contact.form.message') }}</span>
          <textarea
            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="mt-8">
          <button
            class="text-smuppercase font-bold tracking-wide bg-orange-500 rounded-lg hover:shadow-md py-2 rounded-lg w-full">
            {{ $t('contact.form.send') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContact',
  data() {
    return {
      
    }
  }
}
</script>
