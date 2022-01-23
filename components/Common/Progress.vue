<template>
  <div class="progress_wrapper h-4 bg-purple-100 rounded">
    <div
      :class="`bg-${color} rounded h-full`"
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
        default: 'orange-500',
      }
    },
  }
</script>