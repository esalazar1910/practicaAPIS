const db = require('../../database/models');
const op = db.Sequelize.Op;

module.exports = {
    list: async function (req, res) {
        let allUsers = await db.Genre.findAll()
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: allUsers.length,
                    url: "api/genres"
                },
                data: allUsers
        })
    },

    detail : async function (req, res){
        let genreId = req.params.id;
        let genreFounded = await db.Genre.findByPk(genreId)
        return res.status(200).json({
            meta: {
                status: 200,
                url: "api/genres/" + genreId
            },
            data: genreFounded
        })
    }
}
