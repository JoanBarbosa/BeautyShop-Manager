# BeautyShop Manager

**BeautyShop Manager** es una aplicación web Full Stack diseñada para gestionar integralmente las operaciones comerciales y administrativas de un negocio de maquillaje y accesorios femeninos.

El proyecto busca centralizar la administración de productos, inventarios, ventas, clientes, compras, proveedores y finanzas mediante una plataforma intuitiva, escalable y segura.

## Arquitectura tecnológica

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Context API
- CSS

### Backend
- Node.js
- Express
- API REST
- Helmet
- CORS
- JWT
- bcrypt

### Base de datos
- PostgreSQL
- Driver `pg`
- Consultas parametrizadas

### Arquitectura del proyecto
- Frontend organizado por funcionalidades.
- Backend estructurado por capas: rutas, controladores, servicios y repositorios.
- Comunicación entre frontend y backend mediante API REST.

## Requisitos previos

Para ejecutar el proyecto necesitas:

- Node.js 20 o superior.
- npm 10 o superior.
- PostgreSQL 15 o superior (para las siguientes etapas de desarrollo).

**Nota:** La versión inicial puede ejecutarse sin una conexión activa a PostgreSQL.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/JoanBarbosa/BeautyShop-Manager.git
```

Ingresa a la carpeta:

```bash
cd BeautyShop-Manager
```

### Configuración del Backend

```bash
cd backend
npm install
```

Crea el archivo de variables de entorno:

```powershell
Copy-Item .env.example .env
```

### Configuración del Frontend

Regresa a la carpeta principal:

```bash
cd ../frontend
npm install
```

Crea el archivo de variables de entorno:

```powershell
Copy-Item .env.example .env
```

**Importante:** Configura las variables de entorno de acuerdo con tu instalación local. No publiques archivos `.env` ni credenciales reales.

## Ejecución del proyecto

Para ejecutar la aplicación, abre dos terminales independientes en Visual Studio Code.

**Terminal 1 - Backend**

```bash
cd backend
npm run dev
```

El servidor estará disponible en:

`http://localhost:4000`

**Terminal 2 - Frontend**

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en:

`http://localhost:5173`

## Verificación de la API

El backend dispone de un endpoint de comprobación de estado:

```http
GET /api/health
```

URL:

`http://localhost:4000/api/health`

Respuesta esperada:

```json
{
  "success": true,
  "message": "BeautyShop Manager API funcionando"
}
```

## Módulos funcionales proyectados

El sistema contempla el desarrollo progresivo de los siguientes módulos:

1. Autenticación y autorización de usuarios.
2. Panel de control.
3. Gestión de productos y categorías.
4. Administración de inventarios y movimientos.
5. Gestión de ventas y detalles de ventas.
6. Administración de clientes.
7. Gestión de compras.
8. Administración de proveedores.
9. Control de ingresos, gastos y finanzas.
10. Reportes y configuración del sistema.

## Estado del proyecto

**Fase inicial de desarrollo.**

Actualmente se contempla la implementación de la estructura técnica, la pantalla inicial y el endpoint de salud de la API.

Los módulos comerciales, la persistencia de datos y los mecanismos de autenticación se implementarán progresivamente en las siguientes etapas.

## Autor

**Joan Stiven Barbosa Galeano**

Ingeniería de Software | Desarrollo Full Stack

GitHub: [@JoanBarbosa](https://github.com/JoanBarbosa)