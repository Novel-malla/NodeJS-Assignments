var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var inventory = require('./inventory');

var app = express();
var router = express.Router();
router.use(bodyparser.json());

router.get('/', (req, res) => {
    inventory.find({})
    .then((foods) => {
        res.send(foods);
    }).catch((err) => {
        console.log(err.message);
    })
})

router.get('/:item', (req, res) => {
    inventory.find({ name : req.params.item})
    .then((item) => {
        if(item){
            res.send(item);
        } else {
            res.send('No item found');
        }
    })
})

router.post('/', (req,res)=>{
    inventory.create(req.body)
    .then((item)=>{
        res.send(item);
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

router.put('/', (req,res)=>{
    req.body.forEach((item)=>{
        inventory.findOneAndUpdate({name:item.name}, item)
    })
})

router.put('/:item', (req,res)=>{
    inventory.findOneAndUpdate({name:req.params.item}, req.body)
    .then(()=>{
        inventory.findOne({name:req.params.item}).then(function(item){
            res.send(item);
        }) 
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

router.delete('/', (req,res)=>{
    inventory.deleteMany()
    .then((item)=>{
        res.send('All items deleted');
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

router.delete('/:item', (req,res)=>{
    inventory.deleteOne({ name: req.params.item})
    .then((item)=>{
        res.send('item deleted');
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

module.exports = router;