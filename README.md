# React Material UI Template

Template de app React con las siguientes características:
- [Material UI](https://material-ui.com/getting-started/installation/)
- [Material Icons](https://www.npmjs.com/package/@material-ui/icons)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Estructura del proyecto
- **public/**: Contenido estático del proyecto, incluyendo el archivo index.html
- **src/**: Código fuente del proyecto
  - **App.js**: Componente raíz de la app
  - **AppDrawer.js**: Menú de la barra lateral izquierda
  - **AppMenu.js**: Barra superior de menú de la app
  - **AppRouter.js**: Rutas de la app
  - **index.js**: Archivo principal
  - **theme.js**: Configuración del tema de la app
  - **views/**: Vistas de la app (componentes asociados a rutas)

## Scripts disponibles

Desde el directorio del proyecto, puedes ejecutasr los siguientes comandos:

### `yarn start`

Ejecuta la app en modo desarrollo.

La página se actualizará conforme se edita el código.<br />
Los errores que tenga el código aparecerán en consola.

### `yarn test`

Ejecuta el servidor de pruebas y vigila los camios realizados en el proyecto.<br />
Para más información visite la sección [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `yarn build`

Crea una versiónde la app lista para producción en el folder `build`.

Para más información visite la sección [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `yarn eject`

**Nota: Este comando es irreversible**

Este comando retirará los scripts de react por default,  de tal forma que se pueda integrar herramientas de terceros.
