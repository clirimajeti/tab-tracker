<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-items>
      <v-btn flat dark to="/" class="mr-4">
        Tab Tracker
      </v-btn>
      <v-btn flat dark router to="songs" >
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark router to="login" v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn flat dark router to="register" v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
      <v-btn flat dark router to="/" @click="logout" v-if="$store.state.isUserLoggedIn">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  },
}
</script>

<style scoped>

</style>
