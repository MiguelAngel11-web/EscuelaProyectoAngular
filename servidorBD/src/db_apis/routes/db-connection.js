const mongose = require('mongoose');
//Para que lea las variables de entorno

//Conexión a nuestra base de datos de mongodb
mongose.connect(`mongodb://localhost/escuela`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
