const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Middleware ----------

// Parsear JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Servir Bootstrap y Popper desde node_modules
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/@popperjs/core/dist/umd')));

// ---------- Rutas ----------

const indexRoutes = require('./routes/index');
const trabajosRoutes = require('./routes/trabajos');
const estudiosRoutes = require('./routes/estudios');
const hobbiesRoutes = require('./routes/hobbies');

app.use('/', indexRoutes);
app.use('/trabajos', trabajosRoutes);
app.use('/estudios', estudiosRoutes);
app.use('/hobbies', hobbiesRoutes);

// ---------- Manejo de errores ----------

// 404 - Página no encontrada
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'), (err) => {
        if (err) {
            res.status(404).send('<h1>404 - Página no encontrada</h1>');
        }
    });
});

// Error general del servidor
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('<h1>500 - Error interno del servidor</h1>');
});

// ---------- Iniciar servidor ----------

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
