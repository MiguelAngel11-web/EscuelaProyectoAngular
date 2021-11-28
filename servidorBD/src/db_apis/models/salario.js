const mongoose = require("mongoose");
const { Schema } = mongoose;

const SalarioSchema = new Schema({
  cantidad: { 
    type: Number, 
    required: true,
   },
  modalidad: {  
    type: String,   
    required: true,
  },
  horas_extras:{
    type:Number,
    required: true
  },
  impuestos:{
    type:Array,
    required: true
  },
  prestaciones:{
    type:Array,
    required: true,
  },
  periodo_inicial:{
    type:Date,
    required: true
  },
  periodo_final:{
    type:Date,
    required: true
  },

});

module.exports = mongoose.model("salario", SalarioSchema);