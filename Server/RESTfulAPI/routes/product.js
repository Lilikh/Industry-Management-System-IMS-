const express=require('express')
const router=express.Router();
const {
    createProduct,
    findProduct,
    findProductById,
    updateProduct,
    deletProduct,
    deletAllProduct,
    getLowStockProduct,
    getCriticalStockProduct,
    getTotalStockValue,
    getManufacturers,
    getTotalStaockValueByMnufacturer,
}=require('../db/productCrud')
const productModel=require('../db/models/product')

router.get('/', async(req,res)=>{
    try {
       const{
        page=1,
        limit=10,
        category,
        manufactorer,
        amountInStock,
       } =req.query
       let filter={};
       if (category) filter.category=category;
       if (manufactorer) filter.manufacturer=manufactorer;
       if (amountInStock) filter.amountInStock={$gte:Number(amountInStock)};

       const product= await productModel
       .find(filter)
       .skip((page-1)*limit)
       .limit(parseInt(limit))
       res.json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})






module.exports=router;