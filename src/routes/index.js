const express = require('express');
const router = express.Router();
const path = require('path');

const publicDir = path.join(__dirname, '../../public');

// Página principal
router.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

module.exports = router;
