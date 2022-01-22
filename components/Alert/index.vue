<template>
  <div
    class="max-w-2xl mx-auto  shadow-lg rounded-lg mb-2"
    :class="`bg-${ type === 'error' ? 'red' : 'green' }-500`"
  >
    <div class="px-6">
        <div class="flex items-center">
            <!-- Icons -->
            <IconError v-if="type === 'error'" class="animate-pulse" />
            <IconSuccess v-if="type === 'success'" class="animate-pulse" />

            <!-- Card content -->
            <div class="flex-grow truncate">
              <!-- Card header -->
              <div class="w-full sm:flex justify-between items-center">
                <!-- Title -->
                <h2 class="text-xl leading-snug  truncate text-gray-50">{{ title }}</h2>
                <!-- Like and comment buttons -->
              </div>
              <!-- Card body -->
              <div class="flex items-end justify-between whitespace-normal">
                <!-- Paragraph -->
                <div class="text-sm max-w-md">
                  {{ text }}
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import IconError from '~/components/Alert/IconError.vue';
import IconSuccess from '~/components/Alert/IconSuccess.vue';

export default {
  name: 'Alert',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'error'
    },
    icon: {
      type: String,
      default: 'error'
    }
  },
  components: {
    IconError,
    IconSuccess,
  },
}
</script>