import Api from '@/services/Api'

export default {
  getHistory (params) {
    return Api().get('history', {
      params: params
    })
  },
  postHistory (history) {
    return Api().post('history', {
      params: history
    })
  }
}
