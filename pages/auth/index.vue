<template>
  <div class="page-home">

    <h2 class="text-purple font-bold text-2xl text-center font-medium my-10">
      {{ register ? 'Inscription' : 'Se connecter' }}
    </h2>

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <p class="text-center text-gray-500 mb-5">
        <span v-text="register ? `Vous avez déjà un compte?` : `Vous n'avez pas de compte?` ">
        </span>
        <DouHref
          @click="toggleRegister"
          :text="register ? 'Connexion' : 'Inscription'"
        />.
      </p>

      <!-- Lastname (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.lastname"
          label="Nom"
          placeholder="ex: Ben Falten"
          hint="Ne serra pas visible au public"
        />
      </div>

      <!-- Firstname (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.firstname"
          label="Prénom"
          placeholder="ex: Flen"
          hint="Ne serra pas visible au public"
        />
      </div>

      <!-- Email (register and !register) -->
      <div class="mb-4">
        <DouInput
          type="email"
          v-model="user.email"
          label="Email"
          placeholder="Votre email"
        />
      </div>

      <!-- Password (register and !register) -->
      <div class="mb-6">
        <DouInput
          v-model="user.password"
          type="password"
          label="Mot de passe"
          placeholder="*********"
        />
      </div>

      <!-- Confirm password (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.confirm_password"
          type="password"
          label="Confirmez votre mot de passe"
          placeholder="********"
        />
      </div>

      <!-- Username (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.username"
          label="Pseudo"
          placeholder="Pseudo de jeu"
        />
      </div>

      <!-- Téléphone (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.phone"
          label="Téléphone"
          placeholder="ex: 55 555 555"
        />
      </div>

      <div class="flex items-center justify-between">
        <DouButton
          @click="submitForm"
          label="Se connecter"
        />

        <DouHref
          @click="toggleRegister"
          text="Mot de passe oublié?"
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
    return {
      user: {
        email: '',
        password: '',
        confirm_password: '',
        username: '',
        phone: '',
        firstname: '',
        lastname: '',
      },
      register: false
    }
  },
  methods: {
    async submitForm() {
      const errors = this.register ? this.validateRegister() : this.validateLogin();

      if (errors.length) {
        console.error(errors);
        return;
      }

      this.register ?
        await this.submitRegister() :
        await this.submitLogin();
    },
    validateLogin() {
      const errors = [];
      if (!this.user.email) errors.push({ field: 'email', error: 'L\'email est obligatoire!' });
      if (!this.user.password) errors.push({ field: 'password', error: 'Le mot de passe est obligatoire!'});

      return errors;
    },
    validateRegister() {
      const errors = this.validateLogin();
      if (!this.user.phone) errors.push({ field: 'phone', error: 'Le téléphone est obligatoire!' });
      if (!this.user.username) errors.push({ field: 'username', error: 'Le pseudo est obligatoire!'});
      if (!this.user.firstname) errors.push({ field: 'firstname', error: 'Le prénom est obligatoire!'});
      if (!this.user.lastname) errors.push({ field: 'lastname', error: 'Le nom est obligatoire!'});
      if (!this.user.confirm_password) errors.push({ field: 'confirm_password', error: 'Les mots de passe doivent être identique!'});
      return errors;
    },
    async submitLogin() {
      await this.$auth.loginWith('local', { data: {
        email: this.user.email,
        password: this.user.password,
      }})
    },
    async submitRegister() {
      const res = await this.$axios.$post('/auth/register', {
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone,
        username: this.user.username,
        lastname: this.user.lastname,
        firstname: this.user.firstname,
        confirm_password: this.user.confirm_password,
      })
      await this.$auth.setUserToken(res.data.token)
    },
    toggleRegister () {
      this.register = !this.register
    }
  }
}
</script>
