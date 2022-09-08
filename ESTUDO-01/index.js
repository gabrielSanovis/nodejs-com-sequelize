(async () => {

    const database = require("./db");
    const Produto = require("./produto")
    await database.sync();

    /* const novoProduto = await Produto.create({
        nome: "Rolo de LED",
        preco: 15,
        descricao: "contém todas cores RGB"
    })

    console.log(novoProduto) */

    const produtos = await Produto.findByPk(2);

    console.log(produtos);

    produtos.descricao = "Teclado não mecânico";
    produtos.save();

    await Produto.destroy({
        where: {
            preco: 15
        }
    })

})();