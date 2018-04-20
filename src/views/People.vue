<template>
  <div>
    <sfeir-card
      :person="person"
      v-for="person in people"></sfeir-card>
  </div>

</template>

<script>
  import peopleService from '../services/PeopleService';
  import CardPanel from '../components/CardPanel.vue';

  export default {
    data () {
      return {
        people: []
      }
    },
    beforeRouteEnter (route, redirect, next) {
      peopleService
        .fetch()
        .then(people => next(vm => {
          vm.people = people;
        }))
        .catch(console.log.bind(console))
    },
    components: {
      'sfeir-card': CardPanel
    }
  }

</script>

<style scoped>

</style>
