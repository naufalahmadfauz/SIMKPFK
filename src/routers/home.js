const express = require('express')
const router = new express.Router()
const sharp = require('sharp')
const path = require("path");
const fs = require('fs');
const { sequelize, Pasien } = require('../../models/')
const util = require("util")

router.post('/',async (req,res)=>{
    const userInput = Object.keys(req.body)
    const allowedUpdates = ['reg', 'nama','jkn','alamat','status','tinggi_badan','berat_badan','usia']
    const isValidOperation = userInput.every((userInput) => allowedUpdates.includes(userInput))
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    try {
        const pasien = await Pasien.create(req.body)
        res.send(pasien)
    }catch (e) {
        console.log(e)
        res.status(500).send('Error! ' + e)
    }
})

router.get('/pasien/:reg',async (req,res)=>{
    try {
        const pasien = await Pasien.findByPk(req.params.reg)
        res.send(pasien)
    }catch (e) {
        res.status(500).send('Error! ' + e)
    }
})

router.patch('/pasien/:reg',async (req,res)=>{    
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nama','jkn','alamat','status','tinggi_badan','berat_badan','usia']
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

router.delete('/pasien/bulk', async (req, res) => {
    const regs = req.body;
    console.log(regs)
    try {
        const numDeleted = await Pasien.destroy({
            where: {
                reg: regs
            }
        });
        res.send({ deleted: numDeleted });
    } catch (e) {
        res.status(500).send('Error! ' + e);
    }
});
router.get('/pasien', async (req, res) => {
    const sortField = req.query.sort || 'createdAt';
    const sortOrder = req.query.order || 'ASC';
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const jknFilter = req.query.jkn;
    const statusFilter = req.query.status;
    const validSortFields = ['jkn','status','usia', 'berat_badan', 'tinggi_badan', 'createdAt','updatedAt'];
    if (!validSortFields.includes(sortField)) {
        return res.status(400).send({ error: 'Invalid sort field' });
    }

    const validSortOrders = ['ASC', 'DESC'];
    if (!validSortOrders.includes(sortOrder)) {
        return res.status(400).send({ error: 'Invalid sort order' });
    }

    let whereClause = {};
    if (jknFilter) {
        whereClause.jkn = jknFilter;
    }
    if (statusFilter) {
        whereClause.status = statusFilter;
    }
    
    try {
        const pasien = await Pasien.findAll({
            where: whereClause,
            order: [
                [sortField, sortOrder]
            ],
            limit: limit,
            offset: offset
        });
        res.send(pasien);
    } catch (e) {
        res.status(500).send('Error! ' + e);
    }
});
module.exports = router