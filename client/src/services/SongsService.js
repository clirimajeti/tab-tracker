import Api from '@/services/Api'

export default {
  getAllPosts () {
    return Api().get('songs')
  },
  post () {
    return Api().post('song')
  }
}
