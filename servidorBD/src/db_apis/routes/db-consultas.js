const express = require("express");
const Docente = require("../models/docente");
const Salario = require("../models/salario");
const Departamento = require("../models/departamento");
const Alumno = require("../models/alumno");

var router = express.Router();

/* Acceso a la base de datos (Metodos) */

/*###########################################*/
/* Consultas para docentes */
/* Todos los docentes */
router.get("/docente/getall", async (req, res) => {
  await Docente.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send("Error: " + err.message));
});
/* Get por id de docente */
router.get("/docente/get/:id", async (req, res) => {
  /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
  const id = req.params.id;
  await Docente.findOne({ id_doc: id })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send("Error: " + err.message));
});
/* Insertar docente */
router.post("/docente/add", async (req, res) => {
  const {
    nombre,
    ape_pat,
    ape_mat,
    dire,
    tel,
    turno,
    sexo,
    puesto,
    salario,
    departamento,
  } = req.body;

  const id_salario = await Salario.findOne({ cantidad: salario })
    .then((id) => id._id)
    .catch((err) => res.status(400).send("Error:" + err.message));

  const id_depa = await Departamento.findOne({ nombre: departamento })
    .then((id) => id._id)
    .catch((err) => res.status(400).send("Error:" + err.message));
  /* Generar el id del docente para después verificar que no se repita */
  const min = 100000;
  const max = 999999;
  var id_doc = "doc" + Math.floor(min + Math.random() * max);

  var id_find_docente = await Docente.findOne({ id_doc: id_doc })
    .then((id) => {
      if (id !== null) {
        id_doc = "al" + Math.floor(min + Math.random() * max);
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => null);

  while (id_find_docente) {
    const data = await Docente.findOne({ id_doc: id_doc });
    if (data !== null) {
      id_doc = "doc" + Math.floor(min + Math.random() * max);
      id_find_docente = true;
    } else {
      id_find_docente = false;
    }
  }
  /* Termino de id docente */
  /* Verificar los demás datos y que no se repitan */
  const find_name = await Docente.findOne({
    nombre: nombre,
    ape_pat: ape_pat,
    ape_mat: ape_mat,
  })
    .then((id) => id)
    .catch((err) => res.status(400).send("Error" + err.message));

  if (find_name === null) {
    const new_docente = new Docente({
      id_doc: id_doc,
      nombre: nombre,
      ape_pat: ape_pat,
      ape_mat: ape_mat,
      dire: dire,
      tel: tel,
      turno: turno,
      sexo: sexo,
      puesto: puesto,
      id_salario: id_salario,
      id_depa: id_depa,
    });

    await new_docente.save();
    res.json({
      message: "Se insertaron los datos correctamente",
      datos: new_docente,
    });
  } else {
    res.status(400).send("Error ese nombre ya existe");
  }
});
/* Actualizar datos de docente */
router.put("/docente/update/:id", async (req, res) => {
  const update_data = req.body;
  const id_doc = await Docente.findOne({ id_doc: req.params.id })
    .then((data) => data.id)
    .catch((err) => res.status(400).send("Error: " + err.message));

  const result = await Docente.findByIdAndUpdate(id_doc, update_data);

  res.send(result);
});
/*###########################################*/
/* Consultas para alumno */
router.get("/al/getall", async (req, res) => {
  await Alumno.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send("Error: " + err.message));
});
/* Agregar alumno */
router.post("/al/add", async (req, res) => {
  const {
    nombre,
    ape_pat,
    ape_mat,
    dire,
    tel,
    grado,
    turno,
    sexo,
    edad,
    status,
  } = req.body;

  /* Generar el id del alumno para después verificar que no se repita */
  const min = 100000;
  const max = 999999;
  var id_al = "al" + Math.floor(min + Math.random() * max);

  var id_find_al = await Docente.findOne({ id_al: id_al })
    .then((id) => {
      if (id !== null) {
        id_al = "al" + Math.floor(min + Math.random() * max);
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => null);

  while (id_find_al) {
    const data = await Alumno.findOne({ id_al: id_al });
    if (data !== null) {
      id_al = "al" + Math.floor(min + Math.random() * max);
      id_find_al = true;
    } else {
      id_find_al = false;
    }
  }
  /* Termino de id alumno */
  /* Verificar los demás datos y que no se repitan */
  const find_name = await Alumno.findOne({
    nombre: nombre,
    ape_pat: ape_pat,
    ape_mat: ape_mat,
  })
    .then((id) => id)
    .catch((err) => res.status(400).send("Error" + err.message));

  if (find_name === null) {
    const new_al = new Alumno({
      id_al: id_al,
      nombre: nombre,
      ape_pat: ape_pat,
      ape_mat: ape_mat,
      dire: dire,
      tel: tel,
      grado: grado,
      turno: turno,
      sexo: sexo,
      edad: edad,
      status: status,
    });

    await new_al.save();
    res.json({
      message: "Se insertaron los datos correctamente",
      datos: new_al,
    });
  } else {
    res.status(400).send("Error ese nombre ya existe");
  }
});

router.get("/alumno/:id", async (req, res) => {
  let id = req.params.id;
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT * FROM alumno WHERE id_al = ${id}` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});

/*###########################################*/
/* Para las materias */
router.get("/materias", async (req, res) => {
  /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT * FROM materia` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  });
});
/*###########################################*/
router.get("/materia/:id", async (req, res) => {
  let id = req.params.id;
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT * FROM materia WHERE id_mat = ${id}` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});

/*###########################################*/
/* Para las calificaciones */
router.get("/calificaciones", async (req, res) => {
  /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT * FROM calif` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  });
});
/*###########################################*/
router.get("/calificacion/:id", async (req, res) => {
  let id = req.params.id;
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT * FROM calif WHERE id_calif = ${id}` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});
/*###########################################*/
/* Para la calificacacion */
router.get("/calif/primer", async (req, res) => {
  /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT calif1 FROM calif` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  });
});
/*###########################################*/
router.get("/calif/segunda", async (req, res) => {
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT calif2 FROM calif` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});

/*###########################################*/
router.get("/calif/tercera", async (req, res) => {
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT calif3 FROM calif` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});
/*###########################################*/
/*###########################################*/
router.get("/al/calif/primera/:id", async (req, res) => {
  let id = req.params.id;
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT calif1 FROM calif WHERE id_calif_al=${id}` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});
/*###########################################*/
/*###########################################*/
router.get("/al/calif/segunda/:id", async (req, res) => {
  let id = req.params.id;
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT calif2 FROM calif WHERE id_calif_al=${id}` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});
/*###########################################*/
/*###########################################*/
router.get("/al/calif/tercera/:id", async (req, res) => {
  let id = req.params.id;
  let exitoConectado = conexion.conexionBD();
  exitoConectado.then(async (connection) => {
    try {
      /* Eso es lo que cambiara nuestra consulta */
      const result = await connection.execute(
        `SELECT calif3 FROM calif WHERE id_calif_al=${id}` // bind value for :id
      );
      /* Imprimiros por consola y en el navegador */
      console.log(result.rows);
      res.send(JSON.stringify(result.rows));
    } catch (err) {
      /* Por si hay errores */
      console.error(err);
      res.json({
        message: "Lo sentimos a habido un error 👋",
      });
    } finally {
      /* Esto debe hacerse siempre para que se cierre la conexión */
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
          res.send(JSON.stringify(err));
        }
      }
    }
  });
});
/*###########################################*/

/* Salario */
router.post("/salario/add", async (req, res) => {
  const {
    cantidad,
    modalidad,
    horas_extras,
    impuestos,
    prestaciones,
    periodo_inicial,
    periodo_final,
  } = req.body;

  const new_salario = new Salario({
    cantidad: cantidad,
    modalidad: modalidad,
    horas_extras: horas_extras,
    impuestos: impuestos,
    prestaciones: prestaciones,
    periodo_inicial: periodo_inicial,
    periodo_final: periodo_final,
  });
  await new_salario.save();
  res.json({
    message: "Se insertaron los datos correctamente",
    datos: new_salario,
  });
});

/*###########################################*/
/* Departamento */
router.post("/depa/add", async (req, res) => {
  const { nombre, num_edificio } = req.body;
  /* encargado,suplente,materias<----- AGREGAR DESPUES DE TENER DATOS EN DOCENTE */
  const new_depa = new Departamento({
    nombre: nombre,
    num_edificio: num_edificio,
  });
  await new_depa.save();
  res.json({
    message: "Se insertaron los datos correctamente",
    datos: new_depa,
  });
});
module.exports = router;
