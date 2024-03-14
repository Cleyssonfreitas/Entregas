const fs = require('fs');
class ProductManager {
    constructor(filePath) {
        this.path = filePath;
        this.products = [];
        this.nextId = 1;
        this.loadProducts();

    }
    loadProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data);
            if (!Array.isArray(this.products)) {
                this.products = [];
            }
        } catch (err) {
            console.error("Erro ao carregar produtos:", err);
        }
    }

    saveProducts() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2));
        } catch (err) {
            console.error("Erro ao salvar produtos:", err);
        }
    }
addProduct(product) {
   if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
    console.log("por favor insira todos dados do produto");
    return;
}

if (this.products.some(serie=>serie.code===product.code)) {
    console.log("O codigo ja foi usado, por favor insira outro");
    return;
}
product.id = this.nextId++;
this.products.push(product);
this.saveProducts();
console.log("Produto adicionado com sucesso");
}
getProducts() {
    return this.products;
}
getProductById (id) {
const product = this.products.find(produto => produto.id === id);
if (product) {
    return product;} 
    else {
        console.error("Não encontrado");
        return null;
    }
}
updateProduct(id, updatedFields) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedFields };
        this.saveProducts();
        console.log("Produto atualizado com sucesso");
    } else {
        console.error("Produto não encontrado");
    }
}


ListaDeProdutos() {
    console.log("Lista de todos os produtos:");
    this.products.forEach(product => {
        console.log(product);
    });
}
deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
        this.products.splice(index, 1);
        this.saveProducts();
        console.log("Produto excluído com sucesso");
    } else {
        console.error("Produto não encontrado");
    }
}
}
const NovoProduto = new ProductManager('products.json');


NovoProduto.addProduct({
    title: "Xiaomi Redmi",
    description: "celular com otima bateria",
    price: 2320,
    thumbnail:"caminho/generico/celular.jpg",
    code : "A2B2C2",
    stock: "5",
});
NovoProduto.addProduct({
    title: "Controle ps5 orininal",
    description: "Controle sem fio",
    price: 320,
    thumbnail:"caminho/generico/controle.jpg",
    code : "A3B3C3",
    stock: "12",
});
NovoProduto.addProduct({
    title: "Teclado RedDragon",
    description: "Teclado  Mecanico",
    price: 240,
    thumbnail:"caminho/generico/teclado.jpg",
    code : "A4B4C4",
    stock: "15",
});

NovoProduto.ListaDeProdutos();

module.exports = ProductManager;