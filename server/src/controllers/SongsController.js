const {Song} = require('../models')
const { Op } = require('sequelize');

module.exports = {

    async getAllPosts (req, res) {
        try{
            const search = req.query.search;
            let songs = null;
            if (search) {
                songs = await Song.findAll({
                    where: {
                        [Op.or]: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                songs = await Song.findAll({
                    limit: 10
                })
            }
            res.send(songs)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
    },
    async show (req, res) {
        try{
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
    },
    async createPost (req, res) {
        try{
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to create a song'
            })
        }
    },
    async putPost (req, res) {
        try{
            await Song.update(req.body, {
                where:{
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status('500').send({
                error: 'An error has occured trying to update the song'
            })
        }
    }
}
