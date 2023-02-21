# ¡Bienvenido a la documentación del proyecto!

Este es un proyecto de API desarrollado en Node.js utilizando Express y Sequelize ORM para la gestión de una base de datos MySQL. El objetivo de este proyecto es implementar los principios de una Clean Architecture, que nos permita tener una estructura modular, independiente y escalable.

## Instalación

Clonar el repositorio: git clone <https://github.com/LuisHdezE/api-cmov2>
Instalar las dependencias: npm install
Configurar las variables de entorno en un archivo .env en la raíz del proyecto.
Crear la base de datos y ejecutar las migraciones: npm run db:init
Iniciar el servidor: npm run start
Estructura de archivos
El proyecto sigue una estructura modular que separa las diferentes capas de la aplicación. La estructura de archivos es la siguiente:

```
project
├── src
│   ├── data
│   │   ├── database.js
│   │   ├── models
│   │   │   ├── Clasificacion.js
│   │   │   ├── Division.js
│   │   │   ├── Subdivision.js
│   │   │   ├── Clase.js
│   │   │   ├── Orden.js
│   │   │   ├── Familia.js
│   │   │   ├── Genero.js
│   │   │   ├── Especie.js
│   │   │   ├── Clasificador.js
│   │   │   ├── Hospedante.js
│   │   │   ├── Parte.js
│   │   │   ├── Forma.js
│   │   │   ├── Formac.js
│   │   │   ├── Color.js
│   │   │   ├── Textura.js
│   │   │   ├── Borde.js
│   │   │   ├── Accion.js
│   │   │   ├── Uso.js
│   │   │   └── Extremo.js
│   │   └── repositories
│   │       └── CatalogoRepository.js
│   ├── domain
│   │   ├── entities
│   │   │   └── Catalogo.js
│   │   ├── repositories
│   │   │   └── CatalogoRepository.js
│   │   ├── services
│   │   │   ├── CatalogoService.js
│   │   │   └── AuthService.js
│   │   └── usecases
│   │       ├── catalogo
│   │       │   ├── CreateCatalogo.js
│   │       │   ├── GetCatalogoById.js
│   │       │   ├── ListCatalogos.js
│   │       │   └── UpdateCatalogo.js
│   │       └── auth
│   │           └── Login.js
│   ├── interfaces
│   │   ├── controllers
│   │   │   ├── CatalogoController.js
│   │   │   └── AuthController.js
│   │   ├── middlewares
│   │   │   └── AuthMiddleware.js
│   │   └── routes
│   │       ├── catalogos.js
│   │       └── auth.js
│   ├── config
│   │   └── config.js
│   └── app.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

Cada capa de la aplicación tiene su propia carpeta con sus respectivos archivos. El flujo de datos sigue el patrón Modelo-Vista-Controlador (MVC), donde los modelos representan la estructura de datos de la base de datos, los controladores manejan las solicitudes HTTP y la lógica de negocio se encuentra en los servicios.

### Capa de seguridad

La capa de seguridad se encuentra en la carpeta middlewares y utiliza el paquete jsonwebtoken para generar tokens de autenticación. Los endpoints que requieren autenticación deben incluir el token de acceso en la cabecera HTTP Authorization.

## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes enviar pull requests o abrir un issue en el repositorio. Asegúrate de seguir las guías de contribución y los estándares de código del proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.
