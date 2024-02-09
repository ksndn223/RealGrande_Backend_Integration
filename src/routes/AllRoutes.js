let express = require("express");
const {housesModel,usersModel,inquiriesModel} = require("../models/allschemas");
let allroutes = express.Router();
const multer = require("multer");
const upload = multer();


allroutes.get('/',(req,res)=> {
   console.log("requested root");
   res.send("Welcome to realgrande backend server");

});

allroutes.get('/houses',async (req,res)=> {
    console.log("reached /houses");
    try{
     let houses = await housesModel.find({})
      res.send(houses);
    }
    catch(err){
     res.status(500).send(" error while fetching houses");
    }
   
 
 });

 allroutes.post('/signup',upload.none(),async (req,res) => {
   // store data in DB using model and send newly created object
  try{
    console.log(req.body);
    // use model and save to backend
   let newuser = new usersModel(req.body)
   let userfromDB = await newuser.save();
   console.log(userfromDB);
   res.send(userfromDB);
  }
  catch(err){
    console.log(" error while adding user. check if it is duplicate");
    console.log(err);
    res.status(500).send(err);
  }

 });

 allroutes.post('/login',upload.none(),async (req,res) => {
   // store data in DB using model and send newly created object
  try{
    console.log(req.body);
     // us model and find
     let response = await usersModel.find({email:req.body.email,password:req.body.password});
    console.log(response);
    res.send(response);
  
   }
  catch(err){
   console.log(err);
   res.status(500).send(err);
  }
   });
  
   allroutes.post('/addinquiry',upload.none(),async (req,res) => {
      // store data in DB using model and send newly created object
     try{
       console.log(req.body);
        // us model and save to backend
    
        let newInquiry = new inquiriesModel(req.body)
        let inquirySavedFromDB = await newInquiry.save();
       console.log(inquirySavedFromDB);
       res.send(inquirySavedFromDB);
     
      }
     catch(err){
      console.log(" error while adding inquiry");
      console.log(err);
      res.status(500).send(err);
     }
      });
      
      allroutes.get('/inquiries',async (req,res)=> {
         console.log("reached /inquiries");
         try{
          let inquiries = await inquiriesModel.find({});
           res.send(inquiries);
         }
         catch(err){
          res.status(500).send(" error while fetching inquiries");
         }

      });

module.exports=allroutes;