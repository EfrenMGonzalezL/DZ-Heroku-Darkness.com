const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index.ejs', { title: 'DarknessZ3R0' })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact.ejs', { title: 'Contactame!' })
});
router.get('/about', (req, res) => {
    res.render('pages/About.ejs', { title: 'Acerca de mi.' })
});
router.get('/thanks', (req, res)=>{
    res.render('pages/thanks.ejs', { title: 'Gracias!' })
})
router.get('/about_', (req, res) => {
    res.render('partials/About-info.ejs')
})
router.get('/img', (req, res) => {
    res.render('partials/img.ejs')
})

module.exports = router;