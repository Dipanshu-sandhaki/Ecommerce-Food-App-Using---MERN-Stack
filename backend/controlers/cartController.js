import userModel from "../models/userModel.js"

// Add items to user cart 

const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
            {
                cartData[req.body.itemId] = 1;
            }
            else{
                cartData[req.body.itemId] += 1;
            }
            await userModel.findbyIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"Added To Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// Remove items from user cart 

const removeFromCart = async (req,res) => {

}

// Fetchuser cart data 

const getCart = async (req,res) => {

}


export {addToCart,removeFromCart,getCart}