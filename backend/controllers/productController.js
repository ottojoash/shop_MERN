const Product = require('../models/product')

//create new product => /api/v1/product/new
exports.newPrdouct = async(req,res,next) => {

    const product = await Product.create(req.body)

    res.status(201).json({
        sucess:true,
        product
    })
}

//get all products => /api/v1/products
exports.getProducts =(req, res,next) =>{


    const products = await Products.find();


    res.status(200).json({
        sucess:true,
        count: Products.length,
        products
        //message: 'this route will show all products in database.'
    })
}