const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  const BooksSchema = new Schema({
    author:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    serialNo:{
        type: Number,
        required: true

    },
    
    PublicationDate:{
        type:Number,
        
    },
    saved:{
        type:Date,
        default:Date.now
    }
  });

  const Books = mongoose.model('Books', BooksSchema)
  
  module.exports = Books