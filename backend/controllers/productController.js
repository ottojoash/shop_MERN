const Product = require('../models/product')

//create new product => /api/v1/product/new
exports.newPrdouct = async(req,res,next) => {

    const product = await Product.create(req.body)

    res.status(201).json({
        sucess:true,
        product
    })
}


exports.getProducts =(req, res,next) =>{
    res.status(200).json({
        sucess:true,
        message: 'this route will show all products in database.'
    })
}