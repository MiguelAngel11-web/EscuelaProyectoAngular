const mongoose = require("mongoose");
const { Schema } = mongoose;

const DepartamentoSchema = new Schema({
  nombre: { 
    type: String, 
    required: true,
   },
  num_edificio: { 
    type: Number,  
    required: true,
  },
  encargado: { 
    type: Object, 
    required: false,
    ref:"docente"
  },
  suplente: { 
    type: Object,  
    required: false,
    ref:"docente"
  },
  materias: { 
    type: Array, 
    required: false,
  },

});

module.exports = mongoose.model("departamento", DepartamentoSchema);
