const express = require('express')
const app = express();
const port = 3000

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({extended:false}));
app.use(bodyPs.json());

const dpiRoutes = require('./routes/dpi')
app.use('/api/dpi', dpiRoutes)

const pemilikRoutes = require('./routes/pemilik')
app.use('/api/pml',pemilikRoutes)

const alatTKPRoutes = require('./routes/alattangkap')
app.use('/api/alat',alatTKPRoutes)

const kapalRoutes = require('./routes/kapal')
app.use('/api/kapal',kapalRoutes)
app.listen(port,()=>{
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})