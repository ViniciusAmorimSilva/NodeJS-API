const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/pedidos', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    });
});

// Insere um pedido
router.post('/insere', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Insere um pedido'
    })
}); 

// Retorna um pedido especifico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    res.status(200).send({
        mensagem: 'Detalhes do Pedido',
        id_pedido: id
    });
    
});

// Exclui um pedido
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido excluido'
    });
});

module.exports = router;