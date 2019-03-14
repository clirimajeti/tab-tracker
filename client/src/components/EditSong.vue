<template>
    <v-layout>
      <v-flex xs4>
        <panel title="Song Metadata">
          <v-text-field type="text" name="title" v-model="song.title" label="Title" required :rules="[required]"/>
          <v-text-field type="text" name="artist" v-model="song.artist" label="Artist" required :rules="[required]"/>
          <v-text-field type="text" name="genre" v-model="song.genre" label="Genre" required :rules="[required]"/>
          <v-text-field type="text" name="album" v-model="song.album" label="Album" required :rules="[required]"/>
          <v-text-field type="text" name="album image url" v-model="song.albumImageUrl" label="Album Image Url" required :rules="[required]"/>
          <v-text-field type="text" name="youtubeId" v-model="song.youtubeId" label="Youtube Id" required :rules="[required]"/>
        </panel>
      </v-flex>
      <v-flex xs8>
        <panel title="Song Lyrics" class="ml-4">
            <v-textarea type="text" name="lyrics" v-model="song.lyrics" label="Lyrics" required :rules="[required]"/>
        </panel>
        <div class="error white--text ml-4 mt-2" dark v-if="error">{{error}}</div>
         <v-btn dark class="cyan" @click="saveSong">Save Song</v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '../services/SongsService.js'
export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null
            },
            required: (value) => !!value || "Required",
            error:null
        }
    },
    methods: {
        async saveSong () {
            this.error = null;
            const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
            if(!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields.'
                return
            }
            const songId = this.$store.state.route.params.songId;
            try {
                await SongsService.putSong(this.song)
                this.$router.push({
                    name: 'song',
                    params: {
                        songId: songId
                    }
                })
               
            } catch (error) {
            console.log(error)
            } 
        }
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId;
        this.song = (await SongsService.show(songId)).data
        },
    components: {
        Panel
    }
}
</script>

<style scoped>
    
</style>