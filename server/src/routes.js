const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const SongsHistoryController = require('./controllers/SongsHistoryController')

module.exports = (app) => {

    app.post('/register',
      AuthenticationControllerPolicy.register,
      AuthenticationController.register
      )
    app.post('/login',AuthenticationController.login)

    app.get('/songs',SongsController.getAllPosts)

    app.get('/songs/:songId',SongsController.show)

    app.put('/songs/:songId', SongsController.putPost)  

    app.post('/songs', SongsController.createPost)

    app.get('/bookmarks', BookmarksController.getBookmark)

    app.post('/bookmarks', BookmarksController.postBookmark)

    app.delete('/bookmarks/:bookmarkId', BookmarksController.deleteBookmark)

    app.get('/history', SongsHistoryController.getHistory)

    app.post('/history', SongsHistoryController.postHistory)
  
    }


