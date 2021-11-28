# servidorBD
# **:triangular_flag_on_post: Proyecto de base de datos, parte back-end
Hola amix. aquí les dejo el proyecto de parte del back-end. En este haremos todas las consultas.

### **Instalación**
Para la instalación sólo debes ejecutar `npm install` y los modulos necesarios se instalaran.

### Ejecutar el proyecto

```bash
npm start
```

## :tada:¿Que configurar para la conexión a mi BD? :tada:
En el archivo **src/db_apis/routes/db-connection.js** cambien los parametros **user** , **password** y el **connectString** dejenlo igual.

## 📖¿Dónde poner mis consultas?
Fácil se van a la carpeta **src/db_apis/routes/db-consultas.js.** En esta están las GET, POST son las que he agregado en el link que le mande saque la información

Ahi agregan sus consultas y para que todos sepamos cuales llevamos tenemos el src/db_apis/index.js.

Al ejecutar npm start y despues poner la ruta consultas podremos ver el contenido de ese index, en donde de manera resumida están las urls de nuestra api, las cuales
se conectan a nuestra base de datos.

## :rocket: Eso es todo, ánimo a trabajar :)
