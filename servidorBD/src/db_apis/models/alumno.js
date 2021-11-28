const mongoose = require("mongoose");
const { Schema } = mongoose;

const AlumnoSchema = new Schema({
    id_al: { 
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
  grado: { 
    type: Number,  
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
  edad: { 
    type: Number,  
    required: true,
  },
  status: { 
    type: String, 
    required: true,
  },
  materias_cursando:{
      type:Array,
      required: false,
      ref:"materia"
  },
  faltas:{
      type:Object,
      required: false,
      ref:"faltas"
  },
});

module.exports = mongoose.model("alumno", AlumnoSchema);
