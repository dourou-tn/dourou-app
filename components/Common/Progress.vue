<template>
  <div class="progress_wrapper h-4 bg-gray-500">
    <div
      class="h-4"
      :class="`bg-${color}`"
      :style="{ width: value + '%' }"
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
        default: 'orange',
      }
    },
  }
</script>