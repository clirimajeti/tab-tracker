import Api from '@/services/Api'

export default {
  getAllPosts () {
    return Api().get('songs')
  },
  createPost (song) {
    return Api().post('songs', song)
  }
}
