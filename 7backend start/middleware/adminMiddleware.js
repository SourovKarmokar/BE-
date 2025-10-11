function adminMiddleware (req,res,next){
    console.log("admin middleware");
    console.log(req.userInfo)
    if(req.userInfo.role !== "admin"){
        return res.status(401).json({
            success: false,
            message:"Access Denied . you are not admin . Please check your role"
        })
    }
    next()
}
module.exports = adminMiddleware