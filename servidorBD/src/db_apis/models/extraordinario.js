const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExtraordinarioSchema = new Schema({
  nombre: { 
    type: String, 
    required: true,
   },
  intentos: { 
    type: Number,  
    required: true,
  },
  limite: {  
    type: Number, 
    required: true,
  },
  id_al: { 
    type: Object,  
    required: true,
    ref: "alumno",
  },
  id_materia: { 
    type: Object,  
    required: true,
    ref: "materia",
  },
  id_faltas: { 
    type: Object,  
    required: true,
    ref: "faltas",
  },

});

module.exports = mongoose.model("extraordinario", ExtraordinarioSchema);
