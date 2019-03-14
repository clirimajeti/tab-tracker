<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
        <panel title="Login">
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field type="email" name="email" v-model="email" label="Email" required/>
            <v-text-field type="password" name="password" v-model="password" label="Password" required/>
            <div v-html="error" class="error"/>
              <br>
            <v-btn dark class="cyan" @click="login">Login</v-btn>
          </div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password 
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)     
      } catch (error) {
        this.error = error.response.data.error
      } 
    }
  },
  components: {
    Panel
  },
  mounted () {

  }
}

</script>

<style scoped>
.error{
  color:#f4f4f4;
  
}
</style>
