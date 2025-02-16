const orderModel = require("../../models/orderProductModel")

const orderController=async(req,res)=>{
    try{
        const currentUserId=req.userId
        const orderList=await orderModel.find({userId:currentUserId}).sort({createdAt:-1})

        res.json({
            data:orderList,
            message:"Order List",
            success:true
        })
    }catch(err){
        res.status(500).json({
            message:err.message ||err,
            err:true
        })
    }
}

module.exports=orderController