const express = require('express');
const router = express.Router();
const path = require('path');

const publicDir = path.join(__dirname, '../../public');

// Página de hobbies / pasatiempos
router.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'hobbies.html'));
});

module.exports = router;
