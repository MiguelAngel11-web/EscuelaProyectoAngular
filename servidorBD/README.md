# servidorBD
# **:triangular_flag_on_post: Proyecto para la materias de Angular, parte back-end con MongoDB y NodeJS
Nuevo proyecto creado para la materia de Angular utilizando las teconologias de MongoDB y NodeJS.
Consta de una base de datos para la simulación de un página escolar, en la cual podemos hacer
lo más importante para la administración de docentes y alumnos de una escuela.

### **Instalación**
Para la instalación sólo debes ejecutar `npm install` y los modulos necesarios se instalaran.

### Ejecutar el proyecto
Simplemente en tu terminal ejecuta el siguiente comando
```bash
npm start
```

## :tada:¿Que configurar para la conexión a mi BD? :tada:
Para que sea posible la comunicasión con la base de datos de MongoDB que quisieramos integrar. Debemos editar el archivo ./src/db_apis/routes/db_connection.

## 📖¿Dónde poner mis consultas?
Fácil se van a la carpeta **src/db_apis/routes/db-consultas.js.** En esta están las GET, POST son las que he agregado en el link que le mande saque la información

Ahi agregan sus consultas y para que todos sepamos cuales llevamos tenemos el src/db_apis/index.js.

Al ejecutar npm start y despues poner la ruta consultas podremos ver el contenido de ese index, en donde de manera resumida están las urls de nuestra api, las cuales
se conectan a nuestra base de datos.

## :rocket: Eso es todo, ánimo a trabajar :)
