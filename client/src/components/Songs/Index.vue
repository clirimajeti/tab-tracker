<template>
 <v-layout row>
    <v-flex xs6 offset-xs3> 
       <search-song />            
       <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SearchSong from './SearchSong'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    SongsPanel,
    SearchSong
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
