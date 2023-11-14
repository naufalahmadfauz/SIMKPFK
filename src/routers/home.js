const express = require('express')
const router = new express.Router()
const sharp = require('sharp')
const path = require("path");
const fs = require('fs');
const { sequelize, Pasien } = require('../../models/')
const util = require("util")

router.post('/',async (req,res)=>{
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
module.exports = router