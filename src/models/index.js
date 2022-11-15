const CategoriaProduto = require("./CategoriaProduto");
const Categorias = require("./Categorias");
const Fabricantes = require("./Fabricantes");
const Produtos = require("./Produtos");

Produtos.belongsTo(Fabricantes, {
    foreignKey: 'fabricante_id',
});

Fabricantes.hasMany(Produtos, {
    foreignKey: 'fabricante_id',
});

Produtos.belongsToMany(Categorias, {
    foreignKey: "produto_id",
    through: CategoriaProduto,
});

Categorias.belongsToMany(Produtos, {
    foreignKey: "categoria_id",
    through: CategoriaProduto,
});

module.exports = {
    Fabricantes,
    Produtos,
    Categorias
}