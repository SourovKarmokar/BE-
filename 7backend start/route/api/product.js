const express = require("express")
const {createProductController ,getAllProductController, getSingleProductController, updateProductController, deleteProductController } = require("../../controller/productController")
const router = express.Router()
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
  }
})

const upload = multer({ storage: storage })

router.post("/createproduct", upload.single('image'), createProductController);
router.get("/getallproduct", getAllProductController);
router.get("/singleproduct/:id", getSingleProductController);
router.patch("/updateproduct/:id", upload.single('image'), updateProductController);
router.delete("/deleteproduct/:id", deleteProductController);

module.exports = router;