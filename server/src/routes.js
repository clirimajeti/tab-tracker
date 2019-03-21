const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const SongsHistoryController = require('./controllers/SongsHistoryController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {

    app.post('/register',
      AuthenticationControllerPolicy.register,
      AuthenticationController.register
      )
    app.post('/login',
      AuthenticationController.login)

    app.get('/songs',
      SongsController.getAllPosts)

    app.get('/songs/:songId',
      SongsController.show)

    app.put('/songs/:songId',
      SongsController.putPost)  

    app.post('/songs',
      SongsController.createPost)

    app.get('/bookmarks',
      isAuthenticated,
      BookmarksController.getBookmark)

    app.post('/bookmarks',
      isAuthenticated,
      BookmarksController.postBookmark)

    app.delete('/bookmarks/:bookmarkId',
      isAuthenticated,
      BookmarksController.deleteBookmark)

    app.get('/history',
      isAuthenticated,
      SongsHistoryController.getHistory)

    app.post('/history',
      isAuthenticated,
      SongsHistoryController.postHistory)
  
    }


