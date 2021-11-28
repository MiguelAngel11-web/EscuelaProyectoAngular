const mongoose = require("mongoose");
const { Schema } = mongoose;

const AvisoSchema = new Schema({
  titulo: { 
    type: String, 
    required: true,
   },
  descripcion: { 
    type: String, 
    required: true,
  },
  fecha_creado: { 
    type: Date, 
    required: true,
  },
  fecha_actualizado: { 
    type: Date, 
    required: true,
  },
  creador: { 
    type: Object, 
    required: true,
    ref:"docente"
  },
  status: { 
    type: String,  
    required: true,
  },
  tipo: { 
    type: Number,  
    required: true,
  },
});

module.exports = mongoose.model("aviso", AvisoSchema);
