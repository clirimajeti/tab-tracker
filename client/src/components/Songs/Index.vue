<template>
 <v-layout row>
   <v-flex xs4 >
      <songs-bookmarks/>
      <songs-history class="mt-2"/>
    </v-flex>
    <v-flex xs8 ml-2> 
       <search-song />            
       <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SearchSong from './SearchSong'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongBookmarks'
import SongsHistory from './SongsHistory'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    SongsPanel,
    SearchSong,
    SongsBookmarks,
    SongsHistory
  },
  data () {
    return {
      songs: null,
    }
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
