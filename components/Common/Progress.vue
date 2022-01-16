<template>
  <div class="progress_wrapper h-4 bg-gray-300 border-1 border-solid border-gray-300 rounded">
    <div
      :class="`bg-${color} rounded`"
      :style="{ width: value + '%', height: '0.864rem', 'margin-left': '0.02rem' }"
    />
  </div>
</template>


<script>
  export default {
    name: 'CommonProgress',
    props: {
      value: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        default: 'orange-500',
      }
    },
  }
</script>