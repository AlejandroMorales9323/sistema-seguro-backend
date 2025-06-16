# Sistema Backend Seguro con Express.js
sistema backend de autenticación JWL, basada en roles donde el administrador puede dar autorización.

Caracteristicas principales:

- API RESTful completa
- Autenticación JWT
- Autorización basada en roles (usuario/administrador)
- Medidas de seguridad avanzadas
- cache
- Escalabilidad mongodb
- Login

instalación 

1. Clonar el repositorio con git clone https://github.com/AlejandroMorales9323/sistema-seguro-backend.git
2. Instalar dependencias: `npm install`
3. Crear archivo `.env` con las variables de entorno
4. Iniciar MongoDB
5. Ejecutar: `npm run dev`


Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/profile` - Obtener perfil
- `POST /api/auth/logout` - Cerrar sesión

Usuarios
- `GET /api/users` - Listar usuarios opción para administrador
- `GET /api/users/:id` - Obtener usuario por ID
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario solo puede utilizar esta opción el administrador

Roles

- Usuario: Puede ver y editar su propio perfil
- Administrador: Acceso completo a todos los usuarios

Pruebas con Postman
Registrar Admin
```json
POST /api/auth/register
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "123456",
  "role": "administrador"
}
