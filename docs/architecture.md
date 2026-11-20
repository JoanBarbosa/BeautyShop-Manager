# Arquitectura inicial

## Estilo general

BeautyShop Manager utiliza una arquitectura cliente-servidor. React consume una API REST de Express mediante Axios. El backend separa las responsabilidades por capas para evitar que las rutas contengan lógica de negocio o consultas SQL.

## Flujo de una petición

1. El navegador realiza una petición HTTP desde la interfaz React.
2. Axios envía la petición a la API.
3. Express aplica middlewares transversales (seguridad, CORS y parseo JSON).
4. El router dirige la petición al controlador.
5. En etapas futuras, el controlador validará la entrada y delegará al servicio.
6. El servicio coordinará las reglas de negocio y el repositorio.
7. El repositorio ejecutará SQL parametrizado sobre PostgreSQL.
8. El controlador devuelve una respuesta JSON.

## Responsabilidad de carpetas

### Backend

- `config/`: configuración de entorno y conexiones externas, incluida PostgreSQL.
- `controllers/`: reciben solicitudes HTTP y construyen respuestas.
- `middlewares/`: funciones transversales como autenticación, manejo de errores y validación.
- `routes/`: definición y agrupación de endpoints.
- `services/`: reglas y casos de uso del negocio.
- `repositories/`: acceso a datos y consultas SQL parametrizadas.
- `validators/`: validación de parámetros, cuerpo y consultas.
- `utils/`: utilidades compartidas.
- `docs/`: documentación técnica de la API.
- `app.js`: configuración de Express y middlewares.
- `server.js`: carga de variables de entorno e inicio del servidor.

### Frontend

- `assets/`: imágenes, iconos y recursos estáticos.
- `components/`: componentes reutilizables.
- `context/`: estado global con Context API.
- `hooks/`: hooks personalizados.
- `layouts/`: estructuras visuales compartidas.
- `pages/`: vistas asociadas a rutas.
- `routes/`: configuración de React Router.
- `services/`: comunicación HTTP con el backend.
- `styles/`: estilos globales y variables CSS.
- `utils/`: funciones auxiliares.
- `App.jsx`: composición principal.
- `main.jsx`: punto de entrada de React.

## Seguridad y datos

- Las contraseñas se protegerán con bcrypt cuando se implemente autenticación.
- Los tokens de sesión se firmarán y verificarán con JWT.
- Las consultas a PostgreSQL se realizarán con parámetros (`$1`, `$2`, etc.) y no mediante concatenación de datos del usuario.
- Las variables sensibles se almacenarán en archivos `.env` excluidos de Git.
- Helmet y CORS se configuran desde el inicio. El origen permitido se controla con `FRONTEND_URL`.
