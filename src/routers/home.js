const express = require('express')
const router = new express.Router()
const sharp = require('sharp')
const path = require("path");
const fs = require('fs');
const { Pasien } = require('../../models/')
const { Op } = require("sequelize");
const {pictureUpload} = require('../functions/multerConfiguration')
router.post('/pasien',pictureUpload.single('ktp'), async (req,res)=>{
    const userInput = Object.keys(req.body)
    const allowedUpdates = ['nama','jkn','alamat','status','tinggi_badan','berat_badan','usia']
    const isValidOperation = userInput.every((userInput) => allowedUpdates.includes(userInput))
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    try {
        const latestPasien = await Pasien.findOne({
            order: [
                ['createdAt', 'DESC']
            ]
        });

        let newReg;
        if (latestPasien) {
            const latestRegNumber = parseInt(latestPasien.reg.slice(1));
            newReg = 'P' + (latestRegNumber + 1).toString();
        } else {
            newReg = 'P1'; // Default value for the first record
        }
        const pasien = await Pasien.create({ ...req.body, reg: newReg, ktp:req.file.filename })
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
    const searchQuery = req.query.search || '';
    
    
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

    if (searchQuery) {
        whereClause[Op.or] = [
            { nama: { [Op.iLike]: '%' + searchQuery + '%' } },
            { alamat: { [Op.iLike]: '%' + searchQuery + '%' } }
        ];
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

        const pasienWithKtpUrl = pasien.map(record => {
            const ktpUrl = `http://127.0.0.1:3000/static/${record.ktp}`;
            return { ...record.toJSON(), ktpUrl };
        });

        res.send(pasienWithKtpUrl);
        
        // res.send(pasien);
    } catch (e) {
        res.status(500).send('Error! ' + e);
    }
});
module.exports = router