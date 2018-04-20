<template>
  <md-card class="card-panel">
    <md-card-header v-if="editMode">
      <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
      <div class="md-subhead">{{person.id}}</div>
    </md-card-header>
    <md-card-content>
      <img class="picture" :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'"/>
      <md-input-container
        :class="{'md-input-invalid': errors.has('firstname')}"
      >
        <label>Firstname</label>
        <md-input
          v-validate="'required|min:2'"
          :class="{'input': true, 'is-danger': errors.has('firstname')}"
          name="firstname"
          v-model="person.firstname"
          ></md-input>
        <span v-show="errors.has('firstname')" class="help is-danger md-input-invalid">{{ errors.first('firstname') }}</span>
      </md-input-container>
      <md-input-container>
        <label>Lastname</label>
        <md-input name="lastname" v-model="person.lastname"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Email</label>
        <md-input name="email" v-model="person.email"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Phone</label>
        <md-input name="phone" v-model="person.phone"></md-input>
      </md-input-container>
    </md-card-content>
    <md-card-actions>
      <md-button @click.native="cancel">Cancel</md-button>
      <md-button @click.native="submit"
      :disabled="errors.any()">Submit</md-button>
    </md-card-actions>
  </md-card>

</template>
<script>
  export default {
    props: {
      person: {
        type: Object,
        default: function () {
          return {firstname: '', lastname: '', email: '', phone: ''};
        }
      }
    },
    data () {
      return {
      }
    },
    computed: {
      editMode: function () {
        return this.person && this.person.id;
      }
    },
    methods: {
      submit: function () {
        this.$emit('save', this.person);
      },
      cancel: function () {
        this.$emit('cancel');
      }
    }
  }

</script>
<style scoped>
  .card-panel {
    padding: 10px;
    margin: 10px !important;
    min-width: 500px;
  }

  .card {
    margin: 0;
  }

  .picture {
    border-radius: 50%;
    width: 80px;
  }
  .is-danger{
    color:#f44336
  }
</style>
