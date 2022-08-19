const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required:[true, 'please enter product Price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required:[true, 'please enter product description'],
        
    },
    ratings:{
        type:Number,
        default: 0
    },
    images:{
        public_id:{
            type: String,
            required: true
        },
        url:{
           type: String,
           required:true 
        }
    },
    category:{
        type:String,
        required: [true, 'please select catgory for this product'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptops',
                'accessories',
                'Headphones',
                'Food',
                'books',
                'Clothes/shoes',
                'Beauty/Health',
                'Sports',
                'outdoor',
                'home'
            ],
            message: 'please select correct category for product'
        }
    },
    seller:{
        type:String,
        required:[true, 'please enter product seller']
    },
    stock: {
        type:NUmber,
        required: [true, 'please enter product stock'],
        maxLength: [5, 'product name cannot exeed 5 characters'],
        default: 0
    },
    numOfReview:{
        type: Number,
        default: 0
    },
    reviews:[{
        name:{
           type:String,
           required: true 
        },
        ratings:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAT:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.node('product',productSchema)