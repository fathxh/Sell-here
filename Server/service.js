const db=require('./database')

const register=(name,email,address,phone,password)=>{
    return db.User.findOne({phone})
    .then(data=>{
        if(data){
            return{
                statuscode:404,
                status:false,
                message:"User Already Exist,Please Login"
            }
        }else{
            const newUser= new db.User({
                name,email,address,phone,password
            })
            newUser.save()
            return{
                statuscode:200,
                status:true,
                message:"registered successfully"
            }
        }
    })
}

const login=(phone,password)=>{
    return db.User.findOne({phone,password})
    .then(data=>{
        if(data){
            return{
                statuscode:203,
                status:true,
                message:"login success",
                phone,
                email:data.email,
                name:data.name,
                address:data.address

            }
        }else{
                return{
                    status:false,
                    statuscode:404,
                    message:"Account not found"
                }
            }
        
    })
}

const addproduct=(photo,pname,discription,date,phone,email,address)=>{
    return db.Product.findOne({phone,pname})
    .then(data=>{
        if(data){
            return{
                statuscode:404,
                status:false,
                message:"Product Already Exist"
            }
        }else{
            const newProduct= new db.Product({
                photo,
                pname,
                discription,
                date,
                phone,
                email,
                address
            })
            newProduct.save()
            return{
                statuscode:203,
                status:true,
                message:"Product Added successfully"
            }
        }
    })
}

const listproduct=(phone)=>{
    return db.Product.find({phone:{$ne:phone}})
    .then(data=>{
        if(data){
            return{
                statuscode:203,
                status:true,
                data
            }
        }
    })
}

const addcart=(phone,sphone,saddress,semail,pname,discription,date)=>{
   return db.Cart.findOne({phone,pname}) 
   .then(data=>{
        if(data){
            return{
                statuscode:404,
                status:false,
                message:"Product Already In Your Cart"
            }
        }else{
            const newCart= new db.Cart({
                phone,
                sphone,
                saddress,
                semail,
                pname,
                discription,
                date,
                approval:false
            })
            newCart.save()
            return{
                statuscode:203,
                status:true,
                message:"Product Added In Cart"
            }
        }
   })
}

const listcart=(phone)=>{
    return db.Cart.find({phone})
    .then(data=>{
        if(data){
            return{
                statuscode:203,
                status:true,
                data
            }
        }
    })
}

const approve=(phone,pname)=>{
    return db.Cart.updateOne({phone,pname},{$set:{approval:true} })
    .then(data=>{
        if(data){
            return{
                statuscode:203,
                status:true,
                acknowledged:data.acknowledged,
            }
        }
    })

}




module.exports={register,login,addproduct,listproduct,addcart,listcart,approve}