<template>
  <panel title="History" v-if="isUserLoggedIn">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="songs">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.title}}
        </td>
        <td class="text-xs-left">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>

import {mapState} from 'vuex'
import SongsHistoryService from '@/services/SongsHistoryService'
import Panel from '../Panel'
export default {
    components: {
        Panel
    },
    data() {
        return {
            headers: [
                {
                    text: 'Title',
                    value: 'title'
                },
                {
                    text: 'Artist',
                    value: 'artist'
                }
            ],
            pagination: {
                sortBy: 'createdAt',
                descending: true
            },
            songs: []
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    async mounted () {
    if (this.isUserLoggedIn) {
      this.songs = (await SongsHistoryService.getHistory({
          userId: this.user.id
        })).data
    }
  }
}
</script>