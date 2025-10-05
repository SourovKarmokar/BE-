const express = require("express")
const registrationController = require("../../controller/registrationController")
const {otpController, resendOtpController} = require("../../controller/otpController")


const router = express.Router()

router.post("/registration",registrationController)

router.post("/varifybyotp",otpController)

router.post("/resendotp", resendOtpController)


module.exports = router