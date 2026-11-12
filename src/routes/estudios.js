const express = require('express');
const router = express.Router();
const path = require('path');

const publicDir = path.join(__dirname, '../../public');

// Página de estudios / formación académica
router.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'estudios.html'));
});

module.exports = router;
