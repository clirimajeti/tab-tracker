const {
    Bookmark, 
    Song, 
    User
} = require('../models')
const _ = require('lodash')

module.exports = {
    async getBookmark (req, res) {
        try{
            const userId = req.user.id
            const {songId} = req.query;
            const where = {
                UserId: userId
            }
            if(songId) {
                where.SongId = songId
            }
            const bookmark = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ]
            }).map(bookmark => bookmark.toJSON())
              .map(bookmark => _.extend({
                  bookmarkId: bookmark.id
              }, bookmark.Song))
            res.send(bookmark)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to fetch the bookmarks'
            })
        }
    },
    async postBookmark (req, res) {
        try{
            const songId = req.body.params.songId
            const userId = req.user.id
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            if(bookmark) {
                return res.status(400).send({
                    error: 'you already have this set as a bookmark'
                })
            }
            
            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            
            res.send(newBookmark)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to create the bookmark'
            })
        }
    },
    async deleteBookmark (req, res) {
        try{
            const userId = req.user.id
            const {bookmarkId} = req.params;
            const bookmark = await Bookmark.findOne({
                where: {
                    id: bookmarkId,
                    UserId: userId
                }
            })
            if (!bookmark){
                res.status(403).send({
                    error: "You dont have access to this resource"
                })
            }
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to delete the bookmark'
            })
        }
    }
}