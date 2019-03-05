<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form action="" autocomplete="off">
          <v-text-field type="email" name="email" v-model="email" label="Email" autocomplete="new-password" required/>
          <v-text-field type="password" name="password" v-model="password" label="Password" required/>
          <div v-html="error" class="error"/>
            <br>
          <v-btn dark class="cyan" @click="register">Register</v-btn>
          </form>
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
    async register() {
      try {
        const response = await AuthenticationService.register({
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
  color:white;
}
</style>
