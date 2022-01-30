<template>
  <div class="comingsoon">
    <p class="mb-3 font-semibold">
      {{ $t("comingsoon.contact.headline") }}
    </p>
    <div class="flex items-center justify-center" v-if="!loading && !success">
      <DouInput
        class="mb-1 flex-1 h-8 max-w-sm "
        v-model="email"
        :placeholder="$t('global.auth.form.email.placeholder')"
        @keyup="validateEmail"
        :error="emailError"
      />
      <DouButton
        v-if="validEmail"
        :label="$t('global.wording.save')"
        color="orange-500"
        textColor="purple-500"
        size="text-sm"
        @click.native="saveNewsletter"
      />
    </div>
    <h2 v-if="success">{{ $t('comingsoon.contact.success') }}</h2>
    <DouLoader v-if="loading" class="mt-2" color="white" />
  </div>
  
</template>
<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import DouLoader from 'dourou-components/DouLoader/index.vue';

export default {
  name: 'ComingsoonNewsletter',
  components: { DouInput, DouButton, DouLoader, },
  data: () => ({
    email: '',
    validEmail: false,
    loading: false,
    success: false,
    emailError: null,
  }),
  methods: {
    async saveNewsletter () {
      this.validateEmail();
      if (!this.validEmail) {
        console.log('NOT VALID', this.email);
        return;
      };

      this.loading = true;
      try {
        const response = await this.$store.dispatch('comingsoon/newsLetter', this.email);
        if (response.success) {
          this.success = true;
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.emailError = this.$t(`global.auth.errors.${error.response.data.message}`);
        }
      } finally {
        this.loading = false;
      }
    },
    validateEmail () {
      this.validEmail = String(this.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ? true : false;
    },
  },
  watch: {
    email () {
      this.emailError = null;
    }
  }
}
</script>

