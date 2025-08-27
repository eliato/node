const mongoose = require('mongoose');

URI='mongodb://localhost:27017/nodeBaseDeDatos'
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    module.exports = mongoose;
