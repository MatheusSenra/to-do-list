const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    console.log('ola');
    res.send();
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
})

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Delete: ${req.params.id}`);
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

module.exports = router;