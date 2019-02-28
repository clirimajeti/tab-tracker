const {User} = require('../models')

module.exports = {
    async register (req,res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status('400').send({
                error: 'This email account is already in use.'
            })
        }  
    },
    async login () {
        try{
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
               return res.status(403).send({
                    error:"Login information is wrong"
                })
            }
            const isPasswordValid = password === user.password;
            if(!isPasswordValid){
                return res.status(403).send({
                    error:"Login information is wrong"
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch (err) {
            res.status('400').send({
                error: 'This email account is already in use.'
            })
        }
    }
}
