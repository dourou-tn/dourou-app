<template>
  <div class="max-w-2xl mx-auto bg-red-500 shadow-lg rounded-lg mb-2">
    <div class="px-6">
        <div class="flex items-center">
            <!-- Icon -->
            <svg class="fill-current flex-shrink-0" width="80" height="80" viewBox="0 0 25 22">
              <path class="text-red-900" d="M18.344,16.174l-7.98-12.856c-0.172-0.288-0.586-0.288-0.758,0L1.627,16.217c0.339-0.543-0.603,0.668,0.384,0.682h15.991C18.893,16.891,18.167,15.961,18.344,16.174 M2.789,16.008l7.196-11.6l7.224,11.6H2.789z M10.455,7.552v3.561c0,0.244-0.199,0.445-0.443,0.445s-0.443-0.201-0.443-0.445V7.552c0-0.245,0.199-0.445,0.443-0.445S10.455,7.307,10.455,7.552M10.012,12.439c-0.733,0-1.33,0.6-1.33,1.336s0.597,1.336,1.33,1.336c0.734,0,1.33-0.6,1.33-1.336S10.746,12.439,10.012,12.439M10.012,14.221c-0.244,0-0.443-0.199-0.443-0.445c0-0.244,0.199-0.445,0.443-0.445s0.443,0.201,0.443,0.445C10.455,14.021,10.256,14.221,10.012,14.221"></path>
            </svg>
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
                  <p>
                    {{ text }}
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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
}
</script>