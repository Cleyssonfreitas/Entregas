const express = require('express');
const ProductManager = require('./ProductManager'); 

const app = express();
const PORT = 3000;

const produtoManager = new ProductManager('products.json'); 

// Rota para obter todos os produtos
app.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit; 
        let products = produtoManager.getProducts(); 

        if (limit) {
            products = products.slice(0, limit); 
        }

        res.json(products); 
    } catch (error) {
        console.error("Erro ao obter produtos:", error);
        res.status(500).send("Erro ao obter produtos");
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid); 
        const product = produtoManager.getProductById(productId); 

        if (product) {
            res.json(product); 
        } else {
            res.status(404).send("Produto não encontrado"); 
        }
    } catch (error) {
        console.error("Erro ao obter produto:", error);
        res.status(500).send("Erro ao obter produto");
    }
});

app.get('/', (req, res) => {
    res.redirect('/products');
});
// Inicialize o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
