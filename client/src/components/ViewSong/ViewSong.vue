<template> 
    <v-layout>  
          <v-flex xs12 fill-height>
            <v-card color="cyan darken-2" flat class="white--text" >
              <v-layout>
                <v-flex xs4 class="ml-3 mt-3 justify-center">

                  <v-img :src="song.albumImageUrl" max-width="100%"></v-img>
                  <v-btn dark class="cyan" small router :to="{name: 'song-edit', params: {songId: song.id}}">Edit Song</v-btn>

                  <v-card-title class="justify-center" >
                      <div>
                        <div class="song-title">{{song.title}}</div>
                        <div class="song-artist">{{song.artist}}</div>
                        <div>{{song.album}} - {{song.genre}}</div>
                      </div> 
                  </v-card-title>
                   
                </v-flex>
                <v-flex xs8 class="pl-5 mt-3 pb-5">
                  <youtube player-height="50%" player-width="50%"  :video-id="song.youtubeId"></youtube>
                  <div class="song-lyrics">{{song.lyrics}}</div>
                </v-flex>
              </v-layout>
            </v-card>
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
    data() {
        return {
            song:{}
        }
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId;
        this.song = (await SongsService.show(songId)).data
        },
    
}
</script>
<style>
 .coverAlbum{}
 .song-title{
     font-size:2rem;
 }
 .song-artist{
   font-size: 1.5rem;
 }
 .song-lyrics{

  background-size: cover;
  border-bottom: 0.5px solid #d4d4d4;
  white-space: pre-line;
  height: 380px;
  overflow-y: auto;
 }


</style>
