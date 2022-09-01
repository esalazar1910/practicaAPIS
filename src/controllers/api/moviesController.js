let db = require('../../database/models');
const op = db.Sequelize.Op;

module.exports = {
    create : async function (req, res){
        console.log(req.body)
        return res.send(req.body)
    
        // db.Movie.create(req.body);
        // return res.status(200).json({
        //     status: 200,
        //     created: "OK"
        // })
    },

    delete: async function (req, res){
        db.Movie.destroy({
            where : {
                id : req.params.id
            }
        })

        return res.json({
            deleted: "OK"
        })
    }
}