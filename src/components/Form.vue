<template>
  <md-card class="card-panel">
    <md-card-content>
      <img class="picture" src="https://randomuser.me/api/portraits/lego/6.jpg"/>
      <form>
        <md-input-container>
          <label>Firstname</label>
          <md-input name="firstname" v-model="person.firstname"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Lastname</label>
          <md-input name="lastname"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Email</label>
          <md-input name="email"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Phone</label>
          <md-input name="phone"></md-input>
        </md-input-container>
      </form>
    </md-card-content>
    <md-card-actions>
      <md-button @click="$emit('cancel', this.person)">Cancel</md-button>
      <md-button @click="$emit('save', this.person)">Submit</md-button>
    </md-card-actions>
  </md-card>


</template>

<script>
  export default {
    name: "Form",
    data () {
      return {
        person: {}
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

</style>
