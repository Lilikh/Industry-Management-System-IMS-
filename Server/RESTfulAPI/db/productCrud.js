const productModel=require('./models/product')

// Create a new product
const createProduct=async(productData)=>{
    try {
        const existProduct= await productModel.findOne({
           $or:[{ name:productData.name,
            sku:productData.sku}]
        });
        if(existProduct){
            throw new Error("Product with the same name or SKU already exits, please try a gain");
        }
        const product=new productModel(productData)
        return product.save();
    } catch (error) {
      throw new Error(`${error.message}`);  
    }
};

const findProduct=async()=>{
    return await productModel.find();
}

const findProductById=async(id)=>{
    return await productModel.findById(id);
}

const updateProduct=async(id,productData)=>{
    return productModel.findByIdAndUpdate(id,productData,{new:true});
}
const deletProduct=async(id)=>{
    return productModel.findByIdAndDelete(id);
}
const deletAllProduct=async=>{
    return productModel.deleteMany({});
}
//Get product with low stock(less than 10 units)
const getLowStockProduct=async()=>{
    try {
        const lowStockProduct=await productModel.find({
            amountInStock:{ $lt:10 }
        });
        return lowStockProduct;
    } catch (error) {
        throw new Error(`Failed to retrieve stock products: ${error.message}`)
    }
};

const getCriticalStockProduct= async()=>{
    try {
        const criticalStockProduct= await productModel.find({
            amountInStock:{ $lt:5 },
        })
        .select("manufacturer contact.name contact.phone contact.email amountInStock")
    } catch (error) {
        throw new Error(`Failed to retrieve critical stock product:${error.message}`)
    }
};

//get total stock value of all product
const getTotalStockValue=async()=>{
    try{
        const products=await findProduct();
        return products.reduce((total, product)=>total+product.price * product.amountInStock,0);

    }catch(error){
        throw new Error(`Failed to get manufacturers: ${error.message}`)
    }

}
// Get a list of all manufacturers
const getManufacturers = async () => {
    try {
      const manufacturers = await productModel.distinct("manufacturer");
      return manufacturers;
    } catch (error) {
      throw new Error(`Failed to get manufacturers: ${error.message}`);
    }
  };
  const getTotalStaockValueByMnufacturer=async()=>{
    try {
        const stockValueByManufacturer=await productModel.aggregate([
            { $group: { 
                _id: "$manufacturer.name",
                 totalStockValue: { 
                    $sum: {$multiply:["$price", "$amounInStock"]},
                 }
                
                } },
            
        ]);
        return stockValueByManufacturer;
    } catch (error) {
       throw new Error(`Failed to calculate total stock value by manufacturer:${error.message}`) 
    }
  }



module.exports={
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
}