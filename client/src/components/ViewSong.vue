<template> 
    <v-layout>  
          <v-flex xs12 fill-height>
            <v-card color="cyan darken-2" flat class="white--text" >
              <v-layout>
                <v-flex xs4 class="ml-3 mt-3 justify-center">

                  <v-img :src="song.albumImageUrl" max-width="100%"></v-img>
                  <v-btn dark class="cyan" small router :to="{name: 'song-edit', params: {songId: song.id}}">Edit Song</v-btn>

                  <v-btn  dark class="cyan" small 
                          @click="setBookmark"
                          v-if="isUserLoggedIn && !bookmark">
                          Bookmark
                          <v-icon dark >bookmark_border</v-icon>
                  </v-btn>
                  <v-btn  dark class="cyan" small 
                          @click="unsetBookmark"
                           v-if="isUserLoggedIn && bookmark">
                          Unbookmark
                          <v-icon dark >bookmark</v-icon>
                  </v-btn>
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
import BookmarkService from '@/services/BookmarkService'
import SongsHistoryService from '@/services/SongsHistoryService'
import Panel from '@/components/Panel'
import {mapState} from 'vuex'

export default {
    components: {
        Panel
    },
    data() {
        return {
            song:{},
            bookmark: null
        }
    },
    computed:{
      ...mapState([
        'isUserLoggedIn',
        'user',
        'route'
      ])
    },
    watch: {
      async song () {
        if(!this.isUserLoggedIn){
          return;
        }
        try {
        const bookmarks = (await BookmarkService.getBookmarks({
          songId: this.route.params.songId,
          userId: this.user.id
        })).data
        if(bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
        } catch (error) {
        console.log(error)
        }
      }
    },
    async mounted() {
      try {
        const songId = this.route.params.songId;
        console.log(songId)
        this.song = (await SongsService.show(songId)).data
        if(this.isUserLoggedIn){
          SongsHistoryService.postHistory({
            SongId: songId,
            UserId: this.user.id
          })
        }
        
      } catch (error) {
        console.log(error)
      }

    },
    methods: {
      async setBookmark () {
        try {
          this.bookmark = (await BookmarkService.postBookmarks({
          songId: this.song.id,
          userId: this.user.id
        })).data
        } catch (error) {
          console.log(error)
        } 
      },
      async unsetBookmark () {
         try {
          await BookmarkService.deleteBookmarks(this.bookmark.bookmarkId)
          this.bookmark = null;
        } catch (error) {
          console.log(error)
        }
      }
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
