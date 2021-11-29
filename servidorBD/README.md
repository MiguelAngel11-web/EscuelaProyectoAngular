# servidorBD
# :tada: Parte back-end con MongoDB y NodeJS :tada:
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

## :triangular_flag_on_post: ¿Que configurar para la conexión a mi BD? :triangular_flag_on_post: 
Para que sea posible la comunicasión con la base de datos de MongoDB que quisieramos integrar. Debemos editar el archivo **/src/db_apis/routes/db-connection.js**
y sólo cambiamos **localhost/escuela** esos dos datos, en caso de que estemos haciendo localmente dejar localhost.
## 📖¿Dónde se encuentan mis consultas?
En la carpeta **src/db_apis/routes/db-consultas.js.** En esta están las GET, POST, PUT y DELETE, se pueden modificar sin problema y cada aparatado viene comentado

En  **src/db_apis/index.js** se pueden ver que consultas puede realizar el sistema de base de datos.
## Inicio de la ejecución
Al ejecutar npm start y despues poner la ruta consultas podremos ver el contenido de ese index, en donde de manera resumida están las urls de nuestra api, las cuales
se conectan a nuestra base de datos.

## 🛠️ Pruebas de rutas
Las pruebas se realizaron con la extension de Visual Studio Code llamada **REST Client** el archivo se encuentra en este mismo directorio y se llama **Peticiones.http**.
