<template>
  <div>
    <DouTitle text="Utilisateurs" color="gray-200" />
    <div class="p-5 text-right">
      <button
        class="btn-sm btn btn-primary mb-3"
        @click="showForm"
      >
        Ajouter un utilisateur
      </button>
      <DouTable :items="users" :columns="columns"/>
    </div>

    <!-- create user form -->
    <DouModal :show="show">
      <UserForm @form:close="hideForm" />
    </DouModal>

  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouTable from 'dourou-components/DouTable/index.vue';
import DouButtonV2 from 'dourou-components/DouButtonV2/index.vue';
import DouModal from 'dourou-components/DouModal/index.vue';

import IconAdd from 'dourou-components/icons/add-circle.vue';
import UserForm from './form.vue';

export default {
  name: 'BackendUsersIndex',
  layout: 'backend',
  components: {
    DouTitle,
    DouTable,
    DouButtonV2,
    IconAdd,
    DouModal,
    UserForm,
  },
  data () {
    return {
      users: [
        { id: 0, username: 'jrb', email: 'jrb@dourou.tn', role: 'Admin', created_at: '2021-22-16' },
        { id: 1, username: 'mimita', email: 'mimita@dourou.tn', role: 'Admin', created_at: '2021-22-16' },
        // { id: 2, username: 'jean', email: 'jean@dourou.tn', role: 'Admin', created_at: '2021-22-16' },
        // { id: 3, username: 'rondino', email: 'rondino@dourou.tn', role: 'Admin', created_at: '2021-22-16' },
        // { id: 4, username: 'monta', email: 'monta@dourou.tn', role: 'Admin', created_at: '2021-22-16' },
        // { id: 5, username: 'pierto', email: 'pierto@dourou.tn', role: 'Admin', created_at: '2021-22-16' },
      ],
      columns: [
        { field: 'username', title: 'Username' },
        { field: 'email', title: 'email' },
        { field: 'role', title: 'role' },
        { field: 'created_at', title: 'Created At' },
      ],
      show: false,
    }
  },
  methods: {
    showForm () {
      this.show = true;
    },
    hideForm () {
      this.show = false;
    }
  }
}
</script>