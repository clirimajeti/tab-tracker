<template>
 <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel  title="Songs">               
        <v-btn fab class="cyan lighten-1" dark small absolute right middle slot="action" router to="/songs/create">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
 async mounted() {
    this.songs = (await SongsService.getAllPosts()).data
  }
}

</script>

<style scoped>

</style>
