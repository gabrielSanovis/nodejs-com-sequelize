const Sequelize = require("sequelize");
const database = require("../db");
const Fabricante = require("./fabricante");
const Categoria = require("./categoria")
const CategoriaProduto = require("./categoriaProduto")

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

Produto.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: "idFabricante"
})

Fabricante.hasMany(Produto, {
    foreignKey: "idFabricante"
})

Produto.belongsToMany(Categoria, {
    through: {
        model: CategoriaProduto
    },
    constraint: true,
    foreignKey: "idProduto"
})

Categoria.belongsToMany(Produto, {
    through: {
        model: CategoriaProduto
    },
    constraint: true,
    foreignKey: "idCategoria"
})


module.exports = Produto;