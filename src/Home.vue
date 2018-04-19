<template>
  <section class="container">
    <md-card class="card-panel"
             v-for="person in people">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <a href="#" class="card-title username">
              <span>{{ person.firstname}}</span>
              <span class="lastname">{{person.lastname}}</span>
            </a>
          </div>
          <div class="md-subhead">
            <div class="subtitle">{{person.entity}}</div>
            <div class="people-data">
              <div class="">
                <md-icon class="md-accent">email</md-icon>
                <span class="item">{{person.email}}</span>
              </div>
              <div class="">
                <md-icon class="md-accent">phone</md-icon>
                <span class="item">{{person.phone}}</span>
              </div>
            </div>
          </div>
        </md-card-header-text>
        <md-card-media md-big>
          <img class="picture" :src="person.photo"/>
        </md-card-media>
      </md-card-header>
      <md-card-content>
        <md-layout>
          <md-layout md-flex="33">
            <div>
              <span class="label">Manager: </span>
              <span class="item">{{person.manager}}</span>
            </div>
            <div>
              <span class="label">Location: </span>
              <span class="item">{{person.address.city}}</span>
            </div>
          </md-layout>
          <md-layout md-flex-offset="45">
            <a href="#">
              <md-icon class="md-accent">mode_edit</md-icon>
            </a>
            <a href="#">
              <md-icon class="md-accent">delete</md-icon>
            </a>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>
  </section>

</template>

<script>
  import peopleMock from './services/peopleService'
  import './_static/home.css'

  export default {

    name: "Home",
    data () {
      return {
        people: []
      }
    },
    created() {
      let peopleMockService = new peopleMock()
      this.people = peopleMockService.getAll()
    }

  }
</script>

<style scoped>

</style>
