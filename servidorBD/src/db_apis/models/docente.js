const mongoose = require("mongoose");
const { Schema } = mongoose;

const DocenteSchema = new Schema({
  id_doc: { 
    type: String, 
    required: true,
   },
   nombre: { 
    type: String, 
    required: true,
  },
  ape_pat: { 
    type: String, 
    required: true,
  },
  ape_mat: { 
    type: String, 
    required: true,
  },
  dire: { 
    type: String, 
    required: true,
  },
  tel: { 
    type: String,  
    required: true,
  },
  turno: { 
    type: String,  
    required: true,
  },
  sexo: { 
    type: String,  
    required: true,
  },
  puesto: { 
    type: String,  
    required: true,
  },
  id_salario:{
      type:Object,
      required: true,
      ref:"salario"
  },
  id_depa:{
      type:Object,
      required: true,
      ref:"departamento"
  },
});

module.exports = mongoose.model("docente", DocenteSchema);
