let mongoose = require('mongoose');
let houseSchema = new mongoose.Schema(
    {
        "_id":{
          "type":"String"
        },
        "address": {
          "type": "String"
        },
        "county": {
          "type": "String",
          "require": true
        },
        "description": {
          "type": "String",
          "require": true
        },
        "price": {
          "type": "Number",
          "require": true
        },
        "photo": {
          "type": "String",
          "require": true
        }
      }
);

let userSchema = new mongoose.Schema(
  {
    "name": {
      "type": "String",
      "required": true
    },
    "email": {
      "type": "String",
      "required": true,
      unique:true
    },
    "password": {
      "type": "String",
      "required": true
    },
    "phone": {
      "type": "String",
      "required": true
    },
    "role": {
      "type": "String",
      "required": true,
      "default":"customer"
    }
  }
);

// Inquiry schema
let inquirySchema = new mongoose.Schema(
{
  "address":{
    "type": "String"
  },
  "name":{
    "type": "String"
  },
  "email": {
    "type": "String"
  },
  "mobilenum":{
    "type": "String"
  },
  "remarks": {
    "type": "String"
  },
  "submittedDate":{
    "type": Date,
    "default":new Date()
  }
}
);

let housesModel = mongoose.model('House',houseSchema);
let usersModel = mongoose.model('User',userSchema);
let inquiriesModel = mongoose.model('Inquiry', inquirySchema);

module.exports = {housesModel,usersModel,inquiriesModel};