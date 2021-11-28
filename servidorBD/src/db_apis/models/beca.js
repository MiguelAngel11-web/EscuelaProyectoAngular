const mongoose = require("mongoose");
const { Schema } = mongoose;

const BecaSchema = new Schema({
  nombre: { 
    type: String, 
    required: true,
   },
  inicia: { 
    type: Date,  
    required: true,
  },
  finaliza: { 
    type: Date, 
    required: true,
  },
  modalidad: { 
    type: String, 
    required: true,
  },
  bonificacion: { 
    type: Number, 
    required: true,
  },
  limite: { 
    type: Number,  
    required: true,
  },
});

module.exports = mongoose.model("beca", BecaSchema);
