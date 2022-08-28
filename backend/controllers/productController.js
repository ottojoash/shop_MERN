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

//get single product details => /api/v1/product/id


exports.getSingleProduct = async (req, res, next) =>{
    const product = await Product.findById(req.parans.id);

    if(!product){
        return res.status(404).json({
            sucess:false,
            message: 'product not found'
        })
    }


    res.status(200).json({
        sucess:true,
        product
    })
}