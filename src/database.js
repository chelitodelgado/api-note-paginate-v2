const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( db => console.log(db.connection.host) )
  .catch( err => console.log( err ));