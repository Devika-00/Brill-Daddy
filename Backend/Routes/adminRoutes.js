const Router = require("express")
const adminRoute = Router();

const {addCategory,addBrand,getcategories,updateCategory,deleteCategory,getBrand,editBrand,deleteBrand,addProduct} = require("../Controller/adminController")

adminRoute.post("/addcategory",addCategory);
adminRoute.get("/categories",getcategories);
adminRoute.put('/updateCategory/:id',updateCategory);
adminRoute.delete('/deleteCategory/:id',deleteCategory);

adminRoute.post("/addbrand",addBrand);
adminRoute.get("/brands",getBrand);
adminRoute.put('/updateBrand/:id',editBrand);
adminRoute.delete("/deleteBrand/:id",deleteBrand);

adminRoute.post("/addProducts",addProduct);

module.exports = adminRoute;