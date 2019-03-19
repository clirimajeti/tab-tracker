const {History, Song, User} = require('../models')
const _ = require('lodash')

module.exports = {
    async getHistory (req, res) {
        try{
            const {songId, userId} = req.query;
            const where = {
                UserId: userId
            }
            if(songId) {
                where.SongId = songId
            }
            const history = await History.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ]
            }).map(history => history.toJSON())
              .map(history => _.extend({}, history, history.Song))
            res.send(_.uniq(history))
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to fetch the bookmarks'
            })
        }
    },
    async postHistory (req, res) {
        try{
            let songId = req.body.params.SongId
            let userId = req.body.params.UserId
            console.log(songId, "SONG ID SONG ID SONG ID ")  
            console.log(userId, "USERUSER USER USER USER") 
            console.log(songId, "SONG ID SONG ID SONG ID ")  
            console.log(userId, "USERUSER USER USER USER")       
            console.log(songId, "SONG ID SONG ID SONG ID ")  
            console.log(userId, "USERUSER USER USER USER")   
            const history = await History.create({
                SongId: songId,
                UserId: userId
            })
            res.send(history)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to create the history object'
            })
        }
    }
}