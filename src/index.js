const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 4000;

// Rutas
const noteRoutes = require('./routes/routes');

// Database
require('./database');

// Configurar los Cors y los headers

app.use( express.json() );
app.use('/', noteRoutes);

app.listen( PORT, () =>{
    console.log(`Server running http://localhost:${app.get('port')}`);
});

