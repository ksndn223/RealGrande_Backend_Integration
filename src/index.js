let express = require('express');
let app = express();
let allroutes = require('./routes/AllRoutes');
const mongoose = require('mongoose');
const cors= require('cors');
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let corspolicy ={
  origin: '*',
  methods: ['POST', 'GET','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corspolicy));

// connect to db
  // add my connection stream
// schema
//model
// from middleware, using model to get data from DB

app.use((req,res,next) =>{
   console.log(" Request received at " + new Date(Date.now()));
   next();  
});

let db = async () =>{

  try{
   console.log(process.env.DBURI);
   await mongoose.connect(process.env.DBURI);
   console.log(" connect to database");
} 
  catch(err){
     console.log(' error connecting');
     res.status(500).send(err);
  }
}
db();

app.use('/',allroutes);

// connect to database
// schema
//model
// middleware, use model to get data from DB



app.listen(4000,()=>{ console.log("Backend server listening at port 4000")});
