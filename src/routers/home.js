const express = require('express')
const router = new express.Router()
const sharp = require('sharp')
const path = require("path");
const fs = require('fs');
const { sequelize, Pasien } = require('../../models/')
const util = require("util")

router.post('/',async (req,res)=>{
    console.log(req.body)
    const userInput = Object.keys(req.body)
    const allowedUpdates = ['reg', 'nama','jkn','alamat','status','tinggi_badan','berat_badan','usia']
    const isValidOperation = userInput.every((userInput) => allowedUpdates.includes(userInput))
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    const {reg, nama, jkn, alamat, status, tinggi_badan, berat_badan, usia} = req.body


    try {
        const pasien = await Pasien.create({reg, nama, jkn, alamat, status, tinggi_badan, berat_badan, usia})
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
// router.get('/:reg',async (req,res)=>{
//     try {
//         const pasien = await Pasien.findByPk(req.params.reg)
//         res.send(pasien)
//     }catch (e) {
//         res.status(500).send('Error! ' + e)
//     }
// })

router.patch('/:reg',async (req,res)=>{    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['reg', 'nama','jkn','alamat','status','tinggi_badan','berat_badan','usia']
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