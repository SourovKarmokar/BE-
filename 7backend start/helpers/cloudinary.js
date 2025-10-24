const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

async function uploadImage(imgPathUrl) {
  try {
    const result = await cloudinary.uploader.upload(imgPathUrl);
    fs.unlinkSync(imgPathUrl)
    return result;
  } catch (error) {
    fs.unlinkSync(imgPathUrl);
    console.log(error);
  }
}

module.exports = uploadImage;
