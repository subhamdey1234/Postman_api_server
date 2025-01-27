import express from "express";
const app=express()

//middewares-----------
app.use(express.json());
app.use(express.urlencoded({extended:true}));

///--------------



//-----API's-----------------------
app.get("/",(req,res)=>{
    res.send("Hello");
})



app.post("/data",(req,res)=>{
console.log(req.body);
res.send(req.body);

   // res.send("Hyyyyy");
})

app.post("/urlData",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
    
})
//------------------------------------





//-----Routes-------------------------------------------------------
const productsRouter=express.Router()//Declaration of router
app.use("/product",productsRouter)//use the router as middleware

//Product Router Api's---------------------------
productsRouter.get("/",(req,res)=>{
    res.send({msg:"Products router is working"});
})

productsRouter.post("/add",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
    
})


//-------------------------------------------------------------------------



let port=5000;
app.listen(port,"localhost",()=>{
    console.log(`Server started at http://localhost:${port}`);
    
})