# BeautyShop Manager

Aplicación web Full Stack para la futura administración de inventarios, ventas, clientes, compras, proveedores y finanzas de un negocio de maquillaje y accesorios femeninos.

## Arquitectura

- **Frontend:** React + Vite, React Router DOM, Axios, Context API y CSS.
- **Backend:** Node.js + Express, API REST, Helmet, CORS, JWT y bcrypt.
- **Persistencia prevista:** PostgreSQL mediante `pg` y consultas parametrizadas.
- **Organización:** frontend por funcionalidades y backend por capas (rutas, controladores, servicios y repositorios).

En esta etapa solo se implementa la base técnica, la pantalla inicial y el endpoint de salud. No se implementan todavía operaciones comerciales ni autenticación.

## Requisitos

- Node.js 20 o superior (recomendado LTS).
- npm 10 o superior.
- PostgreSQL 15 o superior para las siguientes etapas. La aplicación base puede arrancar sin conectar la base de datos.

## Instalación

Abre una terminal en la raíz del repositorio y ejecuta:

```bash
cd backend
npm install
cp .env.example .env
cd ../frontend
npm install
cp .env.example .env
```

En Windows PowerShell, si `cp` no está disponible, usa `Copy-Item .env.example .env`.

Edita `backend/.env` con los datos locales de PostgreSQL cuando se implemente la conexión. No publiques archivos `.env`.

## Ejecución

Abre dos terminales:

Terminal 1:
```bash
cd backend
npm run dev
```

Terminal 2:
```bash
cd frontend
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:4000  
Comprobación: http://localhost:4000/api/health

## Validación

La ruta `GET /api/health` debe responder HTTP 200 con una estructura similar a:

```json
{
  "success": true,
  "message": "BeautyShop Manager API funcionando"
}
```

La página inicial del frontend muestra el estado de conexión consultando ese endpoint.

## Módulos funcionales previstos

1. Autenticación y autorización.
2. Panel de control.
3. Productos y categorías.
4. Inventario y movimientos.
5. Ventas y detalle de ventas.
6. Clientes.
7. Compras.
8. Proveedores.
9. Gastos, ingresos y finanzas.
10. Reportes y configuración.

Estos módulos se desarrollarán en etapas posteriores.
