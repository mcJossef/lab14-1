const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('BD Conectada');
        
    } catch (error) {
        console.error('Error al conectar a la BD:', error.message);
        process.exit(1); // Detenemos la app
    }
};

module.exports = conectarDB;
