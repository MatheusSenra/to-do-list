const express = require('express')

const router = express.Router();

const Checklist = require('../models/checklist')

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

router.post('/', async (req, res) => {
    
    let { name } = req.body;

    try {
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }

})

module.exports = router;