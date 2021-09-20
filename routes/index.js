const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index.ejs', { title: 'DarknessZ3R0' })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact.ejs', { title: 'Contact' })
});
router.get('/about', (req, res) => {
    res.render('pages/about.ejs', { title: 'about' })
});

module.exports = router;