module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial",{
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Tutorial;
};

// represents tutorials table in PostgreSQL database
// these columns will be generated automatically: id, title, description, published, createdAt, updatedAt
// Sequelize supports all CRUD functions
// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })