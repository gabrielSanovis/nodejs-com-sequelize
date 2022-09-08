const Sequelize = require("sequelize");
const database = require("./db");

const Produto = database.define("produto", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL,
    },
    descricao: {
        type: Sequelize.STRING
    }
})

module.exports = Produto;