
exports.getTestData = (req, res) =>{
    res.status(200).json({
        status:"success",
        data:{
            info: "Hello from the api"
        }
    })
}