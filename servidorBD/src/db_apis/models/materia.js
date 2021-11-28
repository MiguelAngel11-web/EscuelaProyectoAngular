const mongoose = require("mongoose");
const { Schema } = mongoose;

const MateriaSchema = new Schema({
  nombre: { 
    type: String, 
    required: true,
   },
  plan_estudio: {  
    type: String,  
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
  id_mat_doce:{
    type:Object,
    required: true,
    ref:"docente"
  },

});

module.exports = mongoose.model("materia", MateriaSchema);