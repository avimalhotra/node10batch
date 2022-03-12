const express=require("express");
const router=express.Router();

router.use((req,res,next)=>{
     console.log(`Admin login at ${new Date(Date.now()).toLocaleString()}`);
     next();
})

router.get("/",(req,res)=>{
     res.status(200).send("Hello Admin");
});
router.get("/login",(req,res)=>{
     res.status(200).send(" Admin login");
});
router.get("/logout",(req,res)=>{
     res.status(200).send(" Admin logout");
});
router.get("/add",(req,res)=>{
     res.status(200).send(" Used added by admin");
});

module.exports=router;