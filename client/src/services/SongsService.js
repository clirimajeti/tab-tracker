import Api from '@/services/Api'

export default {
  getAllPosts (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  createPost (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  putSong (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
