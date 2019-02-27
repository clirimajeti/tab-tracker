<template>
<v-container>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type="email" name="email" v-model="email" label="Email" required/>
          <v-text-field type="password" name="password" v-model="password" label="Password" required/>
          <div v-html="error" class="error"/>
            <br>
          <v-btn @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
        email: this.email,
        password: this.password 
      })       
      } catch (error) {
        this.error = error.response.data.error
      } 
    }
  },
  watch: {
    
  },
  mounted () {

  }
}

</script>

<style scoped>
.error{
  color:red;
}
</style>
