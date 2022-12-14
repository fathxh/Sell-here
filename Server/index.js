const express=require ('express')
const { connect } = require('mongoose')
const use=require('./service')
const cors=require('cors')

const app=express()
app.use(express.json())

app.use(cors({
    origin:"http://localhost:4200"
}))

const appmidleware=(req,res,next)=>{
    console.log("application middleware is working");
    next()
}
app.use(appmidleware)

app.post('/register',(req,res)=>{
    use.register(req.body.name,req.body.email,req.body.address,req.body.phone,req.body.password)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})
app.post('/login',(req,res)=>{
    use.login(req.body.phone,req.body.password)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})
app.post('/addproduct',(req,res)=>{
    use.addproduct(req.body.photo,req.body.pname,req.body.discription,req.body.date,req.body.phone,req.body.email,req.body.address)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})
app.post('/listproduct',(req,res)=>{
    use.listproduct(req.body.phone)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})
app.post('/addcart',(req,res)=>{
    use.addcart(req.body.phone,req.body.sphone,req.body.saddress,req.body.semail,req.body.pname,req.body.discription,req.body.date)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})
app.post('/listcart',(req,res)=>{
    use.listcart(req.body.phone)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})
app.post('/approve',(req,res)=>{
    use.approve(req.body.phone,req.body.pname)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})

app.listen('3010',()=>{
    console.log("server listening at 3010");
})