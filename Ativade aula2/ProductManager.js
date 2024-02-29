class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
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
}

getProductById (id) {
const product = this.products.find(produto => produto.id === id);
if (product) {
    return product;} else {
        console.error("Não encontrado");
    }
}
ListaDeProdutos() {
    console.log("Lista de todos os produtos:");
    this.products.forEach(product => {
        console.log(product);
    });
}
}




const NovoProduto = new ProductManager();

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
NovoProduto.addProduct({
    title: "Monitor Sansung",
    description: "Monitor 24 polegadas",
    price: 300,
    thumbnail:"caminho/generico/monitor.jpg",
    code : "A5B5C5",
});
NovoProduto.addProduct({
    title: "Monitor Philips",
    description: "Monitor 24 polegadas",
    price: 250,
    thumbnail:"caminho/generico/monitorphilips.jpg",
    code : "A4B4C4",
    stock: "8",
});

NovoProduto.ListaDeProdutos();

