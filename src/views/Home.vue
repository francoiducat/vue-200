<template>
  <sfeir-card :person="person"></sfeir-card>
</template>

<script>
  import peopleService from '../services/PeopleService.js';
  import CardPanel from '../components/CardPanel.vue';

  export default {
    data () {
      return {
        person: {}
      }
    },
    beforeRouteEnter (route, redirect, next) {
      peopleService
        .fetchRandom()
        .then(person => next(vm => {
          vm.person = person;
        }))
        .catch(console.log.bind(console))
    },
    methods: {
      random: function () {
        peopleService
          .fetchRandom()
          .then(person => this.person = person)
          .catch(console.log);
      }
    },
    components: {
      'sfeir-card': CardPanel
    }
  }
</script>

<style scoped>

</style>
