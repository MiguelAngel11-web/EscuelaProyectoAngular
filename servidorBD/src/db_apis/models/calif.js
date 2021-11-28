const mongoose = require("mongoose");
const { Schema } = mongoose;

const CalifSchema = new Schema({
  calfi_alumno: { 
        id_al:{type: Object,required: true},
        materia:{type: Object,required: true},
        calif:{type: Number,required: true},
        parcial:{type: Number,required: true},
   },
  
});

module.exports = mongoose.model("calif", CalifSchema);
