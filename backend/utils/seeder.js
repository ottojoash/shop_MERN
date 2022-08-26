const Product = require('../models/product')
const dotenv = require('dotenv');
const connectDatabase =require('../config/database');

const products = require('../data/products');
const { connect } = require ('mongoose');

//setting dotenv file
dotenv.config({path: 'backend/config/config.env'})

connectDatabase();

const seedProducts = async () => {
    try{

        await Product.deleteMany();
        console.log('Products a Deleted');

        await products.inserMany(products)
        console.log('All products a added')

    }catch(error){
        console.log(error.message);
        process.exit();
    }
    
}
seedProducts()

