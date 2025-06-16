const NodeCache = require('node-cache');

// Cache con TTL de 5 minutos
const cache = new NodeCache({ stdTTL: 300 });

const cacheMiddleware = (duration = 300) => {
    return (req, res, next) => {
        // Solo cachear GET requests
        if (req.method !== 'GET') {
            return next();
        }

        const key = req.originalUrl;
        const cachedData = cache.get(key);

        if (cachedData) {
            console.log(`Cache HIT para: ${key}`);
            return res.json(cachedData);
        }

        // Interceptar res.json para guardar en cache
        const originalJson = res.json;
        res.json = function(data) {
            cache.set(key, data, duration);
            console.log(`Cache SET para: ${key}`);
            return originalJson.call(this, data);
        };

        next();
    };
};

module.exports = { cache, cacheMiddleware };