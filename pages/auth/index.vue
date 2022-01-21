<template>
  <div class="page-home">

    <h2 class="text-purple-500 font-bold text-2xl text-center font-medium my-10">
      {{ register ? $t('global.auth.register.title') : $t('global.auth.login.title') }}
    </h2>

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-20" @keyup.enter="submitForm">

      <p class="text-center text-gray-500 mb-5">
        <span v-text="register ? $t('global.auth.register.login_call') : $t('global.auth.login.register_call') ">
        </span>
        <DouHref
          @click="toggleRegister"
          :text="register ? $t('global.auth.login.title') : $t('global.auth.register.title')"
        />.
      </p>

        <Alert
          v-if="apiError"
          class="animate-bounce"
          :title="$t(`global.auth.${register ? 'register' : 'login'}.apiError`)"
          :text="$t(`global.auth.errors.${apiError}`)"
        />

      <!-- Lastname (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.lastname"
          :label="$t('global.auth.form.lastname.label')"
          :placeholder="$t('global.auth.form.lastname.placeholder')"
          :hint="$t('global.auth.form.lastname.hint')"
          :error="errors.lastname"
        />
      </div>

      <!-- Firstname (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.firstname"
          :label="$t('global.auth.form.firstname.label')"
          :placeholder="$t('global.auth.form.firstname.placeholder')"
          hint="Ne serra pas visible au public"
          :error="errors.firstname"
        />
      </div>

      <!-- Email (register and !register) -->
      <div class="mb-4">
        <DouInput
          type="email"
          v-model="user.email"
          :label="$t('global.auth.form.email.label')"
          :placeholder="$t('global.auth.form.email.placeholder')"
          :error="errors.email"
        />
      </div>

      <!-- Password (register and !register) -->
      <div class="mb-6">
        <DouInput
          v-model="user.password"
          type="password"
          :label="$t('global.auth.form.password.label')"
          :placeholder="$t('global.auth.form.password.placeholder')"
          :error="errors.password"
        />
      </div>

      <!-- Confirm password (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.password_confirmation"
          type="password"
          :label="$t('global.auth.form.password_confirmation.label')"
          :placeholder="$t('global.auth.form.password_confirmation.placeholder')"
          :error="errors.password_confirmation"
        />
      </div>

      <!-- Username (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.username"
          :label="$t('global.auth.form.username.label')"
          :placeholder="$t('global.auth.form.username.placeholder')"
          :error="errors.username"
        />
      </div>

      <!-- Téléphone (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.phone"
          :label="$t('global.auth.form.phone.label')"
          :placeholder="$t('global.auth.form.phone.placeholder')"
          :error="errors.phone"
        />
      </div>

      <div class="flex items-center justify-between">
        <DouButton
          @click="submitForm"
          :label="register ? $t('global.auth.register.title') : $t('global.auth.login.title')"
        />

        <DouHref
          @click="toggleRegister"
          :text="$t('global.auth.form.forgot_password')"
        />

      </div>

    </form>

  </div>
</template>

<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import DouHref from 'dourou-components/DouHref/index.vue';

export default {
  name: 'PageAuth',
  middleware: 'auth',
  auth: 'guest',
  components: {
    DouInput,
    DouButton,
    DouHref,
  },
  data() {
    const defaultErrors = {
      email: null,
      password: null,
      password_confirmation: null,
      username: null,
      phone: null,
      firstname: null,
      lastname: null,
    };

    return {
      user: {
        email: '',
        password: '',
        password_confirmation: '',
        username: '',
        phone: '',
        firstname: '',
        lastname: '',
      },
      register: false,
      defaultErrors: defaultErrors,
      errors: Object.assign({}, defaultErrors),
      apiError: null
    }
  },
  methods: {
    async submitForm(e) {
      this.errors = [];
      this.register ? this.validateRegister() : this.validateLogin();

      if (Object.values(this.errors).filter(Boolean).length) {
        console.error(this.errors);
        return;
      }

      this.register ?
        await this.submitRegister() :
        await this.submitLogin();
    },
    validateLogin() {
      if (!this.user.email) this.errors.email = this.$t('global.auth.errors.email_is_required');
      if (!this.user.password) this.errors.password = this.$t('global.auth.errors.password_is_required');
    },
    validateRegister() {
      this.validateLogin();
      if (!this.user.phone) this.errors.phone = this.$t('global.auth.errors.phone_is_required');;
      if (!this.user.username) this.errors.username = this.$t('global.auth.errors.username_is_required');;
      if (!this.user.firstname) this.errors.firstname = this.$t('global.auth.errors.firstname_is_required');;
      if (!this.user.lastname) this.errors.lastname = this.$t('global.auth.errors.lastname_is_required');;
      if (!this.user.password_confirmation) this.errors.password_confirmation = this.$t('global.auth.errors.password_confirmation');;
    },
    async submitLogin() {
      try {
        await this.$auth.loginWith('local', { data: {
          email: this.user.email,
          password: this.user.password,
        }})
      } catch (error) {
        if (error.response) {
          this.apiError = error.response.data.message
        }
      }
    },
    async submitRegister() {
      try {
        const res = await this.$axios.$post('/auth/register', {
          email: this.user.email,
          password: this.user.password,
          phone: this.user.phone,
          username: this.user.username,
          lastname: this.user.lastname,
          firstname: this.user.firstname,
          password_confirmation: this.user.password_confirmation,
        })
        await this.$auth.setUserToken(res.data.token)
      } catch (error) {
        console.error('ERR4', error);
      }
    },
    toggleRegister () {
      this.register = !this.register
    },
    resetErrors () {
      this.errors = Object.assign({}, this.defaultErrors);
    }
  },
  watch: {
    user: {
      handler () {
        this.resetErrors();
        this.apiError = null;
      },
      deep: true,
    }
  }
}
</script>
