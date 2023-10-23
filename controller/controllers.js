import Logis from "../model/model.js";

export const getLogis = async(req, res)=>{
    try {
        const respon = await Logis.findAll({
            attributes : ['id','barang','jumlah','harga','status','deskripsi']
        })
        res.status(200).json(respon)
    } catch (error) {
        res.status(404).json({msg : error})
    }
}

export const getLogisByid = async(req, res)=>{
    const get = await Logis.findOne({
        where : {
            id : req.params.id
        }
    })
    if (!get) return res.status(404).json({msg : "not found"})
    try {
        const respon = await Logis.findOne({
            where : {
                id : get.id 
            },
            attributes : ['id','barang','jumlah','harga','status','deskripsi']
        })
        res.status(200).json(respon)
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

export const createLogis = async(req, res)=>{
    const { barang, jumlah, harga, status, deskripsi } = req.body
    try {
        await Logis.create({
            barang : barang, 
            jumlah : jumlah, 
            harga : harga, 
            status : status, 
            deskripsi : deskripsi
        })
        res.status(201).json({msg : "berhasil"})
    } catch (error) {
        res.status(400).json({msg : error})
    }
}

export const editLogis = async(req, res)=>{
    const { barang, jumlah, harga, status, deskripsi } = req.body
    const find = await Logis.findOne({
        where : {
            id : req.params.id
        }
    })
    if(!find) return res.status(404).json({msg : 'not found'})
    try {
        const respon = await Logis.update({
            barang : barang, 
            jumlah : jumlah, 
            harga : harga, 
            status : status, 
            deskripsi : deskripsi
        },{
            where : {
                id : find.id
            }
        })
        res.status(200).json({msg : 'updated'})
    } catch (error) {
        res.status(400).json({msg : error})
    }
}

export const deleteLogis = async(req, res)=>{
    const find = await Logis.findOne({
        where : {
            id : req.params.id
        }
    })
    if(!find) return res.status(404).json({msg : 'not found'})
    try {
        await Logis.destroy({
            where:{
                id : find.id
            }
        })
        res.status(200).json({msg:"deleted"})
    } catch (error) {
        res.status(400).json({msg: error.massage})
    }
}