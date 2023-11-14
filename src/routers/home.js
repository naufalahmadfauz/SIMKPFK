const express = require('express')
const router = new express.Router()
const sharp = require('sharp')
const path = require("path");
const fs = require('fs');
const { sequelize, Pasien } = require('../../models/')
const util = require("util")

router.post('/',async (req,res)=>{
    
    const userInput = Object.keys(req.body)
    const allowedUpdates = ['reg', 'nama','jkn','alamat','status']
    const isValidOperation = userInput.every((userInput) => allowedUpdates.includes(userInput))
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    const {reg, nama, jkn, alamat, status} = req.body
    
    
    try {
        const pasien = await Pasien.create({reg, nama, jkn, alamat, status})
        res.send(pasien)
    }catch (e) {
        console.log(e)
        res.status(500).send('Error! ' + e)
    }
})

router.get('/',async (req,res)=>{
    try {
        const pasien = await Pasien.findAll()
        res.send(pasien)
    }catch (e) {
        res.status(500).send('Error! ' + e)
    }
})
router.get('/:reg',async (req,res)=>{
    try {
        const pasien = await Pasien.findByPk(req.params.reg)
        res.send(pasien)
    }catch (e) {
        res.status(500).send('Error! ' + e)
    }
})

router.patch('/:reg',async (req,res)=>{    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['reg', 'nama','jkn','alamat','status']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    
    try {
        const pasien = await Pasien.findByPk(req.params.reg)
        if (!pasien) {
            return res.status(404).send()
        }
        
        updates.forEach((update => pasien[update] = req.body[update]))
        
        await pasien.save()
        console.log(req.body.reg)
        
        res.send(pasien)
    }catch (e) {
        res.status(500).send('Error! ' + e)
    }
})
router.delete('/:reg', async (req, res) => {
    try {
        const pasien = await Pasien.findByPk(req.params.reg)
        if (!pasien) {
            return res.status(404).send()
        }

        await pasien.destroy()
        res.send(pasien)
    } catch (e) {
        res.status(500).send('Error! ' + e)
    }
})
module.exports = router