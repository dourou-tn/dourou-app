<template>
  <DouTitle class="text-gray-500" text="Backend" />
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';

export default {
  name: 'BackendIndex',
  middleware: 'auth',
  layout: 'backend',
  components: { DouTitle },
}
</script>
