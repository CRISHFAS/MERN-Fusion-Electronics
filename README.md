# Fusion Electronics: Una aplicación de comercio electrónico basada en MERN

¡Bienvenidos a **Fusion Electronics**, una **aplicación de comercio electrónico basada en MERN**! Este proyecto es una demostración funcional de una aplicación web full-stack desarrollada con la pila MERN (MongoDB, Express.js, React.js, Node.js). Su objetivo es ofrecer un ejemplo completo de cómo construir una plataforma de comercio electrónico moderna, abarcando la interfaz de usuario frontend, la lógica del servidor backend, la gestión de bases de datos y la integración con bibliotecas de terceros.

## Índice

1. [Introducción](#introducción)
2. [Implementación en vivo](#implementación-en-vivo)
3. [Características](#características)
4. [Tecnologías utilizadas](#tecnologías-utilizadas)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Ejecución de la aplicación](#ejecución-de-la-aplicación)
7. [Pruebas de APIs](#probando-las-apis)
8. [Documentación de la API de Swagger](#documentación-de-la-api-de-swagger)
9. [Especificación de OpenAPI](#especificación-de-openapi)

- [Uso del archivo `openapi.yaml`](#usando-el-archivo-openapiyaml)

10. [Implementación](#implementación)
11. [Contenedorización](#contenedorización)
12. [Contribución](#contribución)
13. [Licencia](#licencia)

## Introducción

Este proyecto es una demostración de la creación de una aplicación de comercio electrónico utilizando la pila MERN, compuesta por MongoDB (base de datos), Express.js (servidor), React.js (frontend) y Node.js (entorno de ejecución). La aplicación permite a los usuarios explorar productos, añadirlos al carrito de compra, finalizar la compra y simular el procesamiento del pedido. Incluye validaciones básicas para las entradas del usuario y simula el proceso de pago en el backend.

## Implementación en vivo

La aplicación está implementada en vivo en Vercel. Puede acceder a ella en la siguiente URL: [Fusion Electronics](https://fusion-ecommerce-app.vercel.app).

> **Nota**: El servidor backend puede tardar unos segundos en reactivarse si ha estado inactivo durante un tiempo. Para su información, está alojado en la versión gratuita de Render, con solo 0.1 CPU y 512 MB de memoria, por lo que puede tardar un poco más en responder a las solicitudes, especialmente después de periodos de inactividad.

## Características

- **Gestión de productos:**

- Ver la lista de productos.
- Ver información detallada del producto.
- Añadir productos al carrito de compras.

- **Carrito de compras:**

- Ver artículos en el carrito de compras.
- Eliminar artículos del carrito.
- Calcular la cantidad total de artículos en el carrito.

- **Proceso de pago:**
- Introducir información de facturación, envío y pago.
- Simular el proceso de creación de pedidos en el backend.
- Recibir confirmación de pedidos completados correctamente.

## Tecnologías utilizadas

- **Frontend:**

  - React.js
  - Material-UI para el estilo
  - Axios para las solicitudes de API
  - `react-credit-cards-2` para la visualización de tarjetas de crédito
  - `react-router-dom` para el enrutamiento
  - `react-hook-form` para la validación de formularios
  - `react-toastify` para las notificaciones de notificaciones
  - Biblioteca de pruebas de Jest y React para pruebas

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB (con Mongoose ODM)
  - Axios para solicitudes API externas
  - JsonWebToken para autenticación de usuarios
  - Bcrypt para hash de contraseñas
  - Dotenv para variables de entorno
  - Cors para compartir recursos entre orígenes
  - Swagger para documentación de API
  - Nodemon para recarga en caliente del servidor
  - **Middleware**: JWT para proteger los endpoints de API

- **Herramientas de desarrollo:**
  - Jetbrains WebStorm (IDE)
  - Postman (para pruebas de API)
  - Git (control de versiones)
  - npm (gestor de paquetes)

## Estructura del Proyecto

El proyecto se organiza en dos pilas principales: el backend se encuentra en el directorio `backend`, que alberga todos los datos de productos y pedidos, y el frontend se encuentra en el directorio `root`. A continuación, se presenta un resumen de la estructura del proyecto:

```
fullstack-ecommerce/
├── backend/ # Archivos del servidor Node.js
│ ├── config/ # Archivos de configuración
│ │ └── db.js # Conexión a la base de datos
│ ├── models/ # Modelos de Mongoose
│ │ └── product.js # Esquema del producto
│ ├── route/ # Controladores de ruta
│ │ ├── products.js # Rutas del producto
│ │ ├── search.js # Rutas de búsqueda
│ │ └── checkout.js # Rutas de pago
│ ├── seed/ # Semilla de la base de datos datos
│ │ └── products.js # Datos de la semilla del producto
│ ├── .env # Variables de entorno
│ └── index.js # Punto de entrada del servidor
├── public/                        # Recursos públicos del frontend
│ ├── index.html # Plantilla HTML
│ ├── manifest.json # Manifiesto de la aplicación web
│ └── favicon.ico # Favicon
├── src/ # Archivos del frontend de React.js
│ ├── component/ # Componentes reutilizables
│ │ ├── CheckoutForm.jsx # Componente del formulario de pago
│ │ ├── ProductCard.jsx # Componente de la tarjeta de producto
│ │ ├── NavigationBar.jsx # Componente de la barra de navegación
│ │ ├── OrderConfirmation.jsx # Componente de confirmación de pedido
│ │ ├── ProductListing.jsx # Componente de listado de productos
│ │ ├── SearchResults.jsx # Componente de resultados de búsqueda
│ │ └── ShoppingCart.jsx # Componente de carrito de compras
│ ├── dev/                       # Utilidades de desarrollo
│ │ ├── index.js # Punto de entrada para el desarrollo
│ │ ├── palette.jsx # Paleta de colores
│ │ ├── preview.jsx # Vista previa del componente
│ │ └── useInitials.js # Gancho de iniciales
│ ├── pages/ # Componentes de página
│ │ ├── Cart.jsx # Componente de la página del carrito
│ │ ├── Checkout.jsx # Componente de la página de pago
│ │ ├── Home.jsx # Componente de la página de inicio
│ │ ├── ProductDetails.jsx # Detalles del producto Componente de página
│ │ ├── OrderSuccess.jsx # Componente de página de pedido exitoso
│ │ ├── ProductDetails.jsx # Componente de la página de detalles del producto
│ │ └── Shop.jsx # Componente de la página de la tienda
│ ├── App.jsx # Componente principal de la aplicación
│ ├── App.css # Estilos principales de la aplicación
│ └── index.js # Punto de entrada de React
├── build/ # Archivos de compilación de producción del frontend
├── tests/ # Archivos de prueba
├── .gitignore # Archivo de ignorados de Git
├── package.json # Archivo de paquete NPM
├── jsconfig.json # Archivo de configuración de JS
└── setupProxy.js # Configuración del proxy
```

### Requisitos previos

Antes de ejecutar este proyecto, asegúrese de tener instalado lo siguiente:

- Node.js (con npm)
- MongoDB (con instancia local o remota)
- Git

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/CRISHFAS/MERN-Fusion-Electronics
   cd MERN-Fusion-Electronics  # Arregla la ruta si es necesario
   ```

2. Instalar las dependencias del proyecto:

   ```bash
   # Install server (backend) dependencies
   cd backend
   npm install

   # Install client (frontend) dependencies
   cd ..
   npm install
   ```

3. Configurar el backend:

   - Cree un archivo `.env` en el directorio `backend/` y agregue la siguiente variable de entorno (reemplace la URI con su cadena de conexión MongoDB):

     ```
     MONGO_URI=mongodb://localhost:27017/Ecommerce-Products
     JWT_SECRET=your_secret_key
     ```

   Para tu información, estoy usando MongoDB Atlas para este proyecto. Puedes crear una cuenta gratuita y obtener tu cadena de conexión desde allí si quieres implementar la aplicación en la nube.

   - Asegúrese de que su servidor MongoDB esté en ejecución. Si usa Mac, puede iniciar el servidor MongoDB con el siguiente comando:

   ```bash
   brew services start mongodb-community
   ```

   - Sembrar la base de datos con datos de muestra:
     ```bash
     cd backend/seed
     node productSeeds.js dev
     ```
   - Ejecute el servidor backend: (primero `cd` en el directorio backend)
     ```bash
     cd ..
     npm start
     ```

4. Configura la interfaz:
   - Primero, `cd` en el directorio `root` si aún no estás allí:
     ```bash
     cd ..
     ```
     O
     ```bash
     cd fullstack-ecommerce
     ```
   - Iniciar el servidor de desarrollo frontend:
     ```bash
     npm start
     ```
     **Nota:** El servidor frontend se ejecutará en `http://localhost:3000` por defecto. Si encuentra algún error relacionado con el paquete `react-credit-cards-2` al iniciar, puede ignorarlo, ya que la aplicación seguirá funcionando correctamente.

## Ejecución de la aplicación

- Abra su navegador y navegue a `http://localhost:3000` para ver la aplicación.

## Prueba de las API

- Simplemente abra su navegador y navegue a `http://localhost:5000/api/products` para ver la lista de productos.
- También puede cambiar los datos de muestra navegando a `backend/seed/productSeeds.js` y modificando los datos allí.

## Documentación de la API de Swagger

- El servidor backend incluye la documentación de la API de Swagger, accesible en `http://localhost:5000/api-docs`.
- Antes de acceder a la URL anterior, asegúrese de que el servidor backend esté en ejecución.
- La interfaz de usuario de Swagger ofrece una descripción detallada de los puntos finales de la API, los esquemas de solicitud/respuesta y ejemplos de solicitudes.
- Si todo está configurado correctamente, debería consultar la página de documentación de la interfaz de usuario de Swagger:

## Especificación de OpenAPI

### Uso del archivo `openapi.yaml`

1. **Consultar la documentación de la API**

- Abre el [Editor Swagger](https://editor.swagger.io/).
- Sube el archivo `openapi.yaml` o pega su contenido.
- Visualiza e interactúa con la documentación de la API.

2. **Prueba la API**

- Importa `openapi.yaml` en [Postman](https://www.postman.com/):
- Abre Postman → Importar → Selecciona `openapi.yaml`.
- Prueba los endpoints de la API directamente desde Postman.
- O usa [Swagger UI](https://swagger.io/tools/swagger-ui/):
- Proporciona la URL del archivo o súbelo para ver y probar los endpoints.

3. **Generar bibliotecas de cliente**

- Instalar el generador OpenAPI:
  ```bash
  npm install @openapitools/openapi-generator-cli -g
  ```
- Generar una biblioteca de cliente:
  ```bash
  openapi-generator-cli generate -i openapi.yaml -g <language> -o ./client
  ```
- Reemplace `<language>` con el lenguaje de programación deseado.

4. **Generar stubs de servidor**

- Generar un stub de servidor:
  ```bash
  openapi-generator-cli generate -i openapi.yaml -g <framework> -o ./server
  ```
- Reemplace `<framework>` con el marco deseado.

5. **Ejecutar un servidor simulado**

- Instalar Prism:
  ```bash
  npm install -g @stoplight/prism-cli
  ```
- Start the mock server:
  ```bash
  prism mock openapi.yaml
  ```

6. **Validar el archivo OpenAPI**

- Use [Swagger Validator](https://validator.swagger.io/):
  - Cargue `openapi.yaml` o pegue su contenido para verificar si hay errores.

Esta guía le permite ver, probar y utilizar la API. Puede generar bibliotecas de cliente, stubs de servidor y ejecutar un servidor simulado utilizando la especificación OpenAPI.

## Implementación

Para implementar la aplicación:

- Configure los ajustes de implementación tanto para el frontend (React) como para el backend (Node.js) según el proveedor de alojamiento elegido (por ejemplo, AWS, Heroku, Netlify).

## Contenedorización

Este proyecto se puede contenerizar con Docker. Primero, asegúrese de que Docker Desktop esté ejecutándose en su sistema. Luego, para crear una imagen de Docker, ejecute el siguiente comando:

```bash
docker compose up --build
```

Este comando creará una imagen de Docker para el frontend y el backend, y ejecutará la aplicación en un entorno en contenedores.

## Contribuciones

¡Agradecemos tus contribuciones a este proyecto! Aquí tienes algunas maneras de contribuir:

- Reportar errores y solicitar mejoras abriendo incidencias.
- Implementar nuevas funciones o mejoras y enviar solicitudes de incorporación de cambios.
- Mejorar la documentación y los archivos README.

## License

Este proyecto está licenciado bajo la **Licencia MIT** - consulte el archivo [LICENCIA](LICENCIA) para obtener más detalles.

---

Gracias por explorar **Fusion Electronics, una aplicación de comercio electrónico de MERN Stack**. Si tiene alguna pregunta o comentario, no dude en contactarnos o abrir un problema.

**Happy coding! 🚀**
