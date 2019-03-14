<template>
 <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel  title="Songs">               
        <v-btn fab class="cyan lighten-1" dark small absolute right middle slot="action" router to="/songs/create">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout>
            <v-flex xs6 class="song-desc">
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-album">
                {{song.album}} - {{song.genre}}
              </div>
              <v-btn dark class="cyan"
                router :to="{name: 'song', params: {songId: song.id}}">
                View Song</v-btn>
            </v-flex>

            <v-flex xs6>
              <img alt="" class="album-cover" :src="song.albumImageUrl">
            </v-flex>
          </v-layout>
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
      songs: null,
    }
  },
  methods:{
  },
 async mounted() {
    this.songs = (await SongsService.getAllPosts()).data
  }
}

</script>

<style scoped>
  .album-cover{
    width:80%;
    margin: 0 auto;
    object-fit: cover;
  }
  .song{
    margin:25px;
  }
  .song-desc{
    padding-top:20px;
  }
  .song-title{
    font-size:24px;
  }
  .song-artist{
    font-size:18px;
  }
  .song-genre{
    font-size:18px;
  }
</style>
