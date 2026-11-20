# Base de datos

La persistencia se implementará con PostgreSQL. En esta etapa no se crean tablas comerciales ni migraciones, porque el modelo de datos depende de los módulos que se diseñarán en etapas posteriores.

Variables previstas en `backend/.env`:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_SSL`

Las consultas futuras deben usar parámetros de `pg`, por ejemplo `pool.query('SELECT * FROM tabla WHERE id = $1', [id])`.
