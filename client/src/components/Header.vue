<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-items>
      <v-btn flat dark to="/" class="mr-4">
        Tab Tracker
      </v-btn>
    </v-toolbar-items>
   <!-- <v-toolbar-items>
      <v-btn flat dark>Browser</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark router to="login">
        Login
      </v-btn>
      <v-btn flat dark router to="register">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
