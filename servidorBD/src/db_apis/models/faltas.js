const mongoose = require("mongoose");
const { Schema } = mongoose;

const FaltasSchema = new Schema({
  tot: { 
    type: Number, 
    required: true,
   },
  limite: {  
    type: Number, 
    required: true,
  },
  perido_incial:{
    type:Date,
    required: true
  },
  perido_final:{
    type:Date,
    required: true
  },

});

module.exports = mongoose.model("faltas", FaltasSchema);
