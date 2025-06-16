# Sistema Backend Seguro con Express.js

Sistema backend completo con autenticación JWT, autorización basada en roles, y optimizaciones de rendimiento.

## 🚀 Características

- ✅ API RESTful completa
- 🔐 Autenticación JWT
- 👥 Autorización basada en roles (usuario/administrador)
- 🛡️ Medidas de seguridad avanzadas
- ⚡ Optimizaciones de rendimiento (cache, rate limiting)
- 📊 Escalabilidad (compresión, paginación)
- 🔍 Logging y monitoreo

## 🛠️ Instalación

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear archivo `.env` con las variables de entorno
4. Iniciar MongoDB
5. Ejecutar: `npm run dev`

## 📚 Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/profile` - Obtener perfil
- `POST /api/auth/logout` - Cerrar sesión

### Usuarios
- `GET /api/users` - Listar usuarios (admin)
- `GET /api/users/:id` - Obtener usuario por ID
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario (admin)

## 🔒 Roles

- **Usuario**: Puede ver y editar su propio perfil
- **Administrador**: Acceso completo a todos los usuarios

## 🧪 Pruebas con Postman

### 1. Registrar Admin
```json
POST /api/auth/register
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "123456",
  "role": "administrador"
}