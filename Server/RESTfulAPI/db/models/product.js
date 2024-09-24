const mongoose=require('mongoose');
const Schema=mongoose.Schema

const ContactSchema=new Schema({
    name:String,
    email:String,
    phone:String,
   
});

const ManufactureScheme=new Schema({
    name:String,
    country:String,
    website:String,
    description:String,
    address:String,
    contact:ContactSchema,
});
const ProductSchem=new Schema({
    name:String,
    sku:String,
    description:String,
    price:Number,
    category:String,
    manufacturer:ManufactureScheme,
    amountInStock:Number,
});

const productModel=mongoose.model("Product",ProductSchem);
module.exports=productModel;