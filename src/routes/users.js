const express = require('express');
const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/roles');
const { cacheMiddleware } = require('../middleware/cache');

const router = express.Router();

// Todas las rutas requieren autenticación
router.use(auth);

// GET /api/users - Obtener todos los usuarios (solo admin, con cache)
router.get('/', authorize('administrador'), cacheMiddleware(180), getUsers);

// GET /api/users/:id - Obtener usuario por ID
router.get('/:id', getUserById);

// PUT /api/users/:id - Actualizar usuario
router.put('/:id', updateUser);

// DELETE /api/users/:id - Eliminar usuario (solo admin)
router.delete('/:id', authorize('administrador'), deleteUser);

module.exports = router;