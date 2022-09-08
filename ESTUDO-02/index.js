(async () => {

    const database = require("./db");
    const Produto = require("./models/produto")
    const Fabricante = require("./models/fabricante")
    const Categoria =  require("./models/categoria")
    await database.sync();

    /*const novoFabricante = await Fabricante.create({
        nome: "Xiaomi"
    })

    const novoProduto = await Produto.create({
        nome: "POCO X3 PRO",
        preco: 1889,
        descricao: "Celular da Xiaomi",
        idFabricante: novoFabricante.id
    })

    console.log(novoProduto) 

    const produtos = await Produto.findByPk(1, {include: Fabricante});*/

    const fabricante = await Fabricante.findByPk(1, {include: Produto})

    console.log(fabricante.produtos);

    /*produtos.descricao = "Teclado não mecânico";
    produtos.save(); 

    await Produto.destroy({
        where: {
            preco: 15
        }
    })*/

})();