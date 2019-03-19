import Api from '@/services/Api'

export default {
  getBookmarks (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  postBookmarks (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
  },
  deleteBookmarks (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
