const express = require('express');
const router = express.Router();
const path = require('path');

const publicDir = path.join(__dirname, '../../public');

// Página de trabajos / experiencia laboral
router.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'trabajos.html'));
});

module.exports = router;
