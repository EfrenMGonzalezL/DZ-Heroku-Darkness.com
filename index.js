const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
//settings
express()
    .use(express.static(path.join(__dirname,'public')))
    .use(require('routes/index.js'))
    .set('views',path.join(__dirname,'views'))
    .set('view engine','ejs')
    .get('/', (req, res) => res.render('pages/index'))
    
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

//routers
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
//npm run dev
*/