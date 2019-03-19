<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
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
import BookmarkService from '@/services/BookmarkService'
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
            bookmarks: []
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
      this.bookmarks = (await BookmarkService.getBookmarks({
          userId: this.user.id
        })).data
    }
  }
}
</script>