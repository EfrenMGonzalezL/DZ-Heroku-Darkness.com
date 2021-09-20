const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'DarknessZ3R0' })
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact' })
});
router.get('/about', (req, res) => {
    res.render('About.html', { title: 'about' })
});

module.exports = router;