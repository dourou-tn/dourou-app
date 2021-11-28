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
          @click="submitLogin"
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
    async submitLogin () {
      if (!this.user.email || !this.user.password) {
        return;
      }

      let action = 'login';
      const user = {
        email: this.user.email,
        password: this.user.password,
      };

      if (this.register) {
        action = 'register';
        user.phone = this.user.phone;
        user.username = this.user.username;
        user.lastname = this.user.lastname;
        user.firstname = this.user.firstname;
        user.confirm_password = this.user.confirm_password;
      }

      await this.$store.dispatch(`auth/${action}`, user)
      console.log('Login');
    },
    toggleRegister () {
      console.log('Hello');
      this.register = !this.register
    }
  }
}
</script>
