const mongoose =require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/sellhere',{useNewUrlParser:true})

const User=mongoose.model('User',{
    name:String,
    email:String,
    address:String,
    phone:String,
    password:String
})
const Product=mongoose.model('Product',{
    photo:String,
    pname:String,
    discription:String,
    date:String,
    phone:String,
    email:String,
    address:String
})
const Cart=mongoose.model('Cart',{
    phone:String,
    sphone:String,
    saddress:String,
    semail:String,
    pname:String,
    discription:String,
    date:String,
    approval:Boolean
})
const Inbox=mongoose.model('Inbox',{
    rphone:String,
    remail:String,
    pname:String,
    date:String,
    sphone:String
})

module.exports={User,Product,Cart,Inbox}