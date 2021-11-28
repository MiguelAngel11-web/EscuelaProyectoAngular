const express = require('express');
require('./routes/db-connection'); 
const routes = require('./routes/db-consultas');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Proyecto Angular - 👋🌎🌍🌏',
        author: 'Equipo Chidori',
        consultas: [{
            'Maestros': '/consulta/maestros',
            'Único maestro': '/consulta/maestro/:id',
            'Alumnos': '/consulta/alumnos',
            'Único alumno': '/consulta/alumno/:id',
            'Materias': '/consulta/materias',
            'Única materia': '/consulta/materia/:id',
            'Calificasiones': '/consulta/calificaciones',
            'Única calificación': '/consulta/calificaciones/:id',
            'Primera calificación': '/consulta/calif/primer',
            'Segunda calificación': '/consulta/calif/segunda',
            'Tercera calificación': '/consulta/calif/tercera',
            'La calificacion de un alumno(primera)': '/consulta/al/calif/primera/:id',
            'La calificacion de un alumno (segunda)': '/consulta/al/calif/segunda/:id',
            'La calificacion de un alumno (tercera)': '/consulta/al/calif/tercera/:id',
        }]
    });
});

router.use('/', routes);

module.exports = router;