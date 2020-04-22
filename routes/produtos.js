const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/produtos/all', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    });
});

// Insere um produto
router.post('/insere', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto inserido'
    })
}); 

// Retorna um produto especifico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if(id == 'especial'){
        res.status(200).send({
            mensagem: 'Voce descobriu o ID especial',
            id: id
        });
    } else {
        res.send({
            mensagem: 'Voce passou um ID'
        });
    }
});

// Altera um produto
router.patch('/altera', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto Alterado'
    })
});

// Exclui um produto
router.delete('/delete', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto excluido'
    });
});

module.exports = router;