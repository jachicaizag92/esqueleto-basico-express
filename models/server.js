const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        //inicializando propiedades
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/api'

        //Middlewares
        this.middlewares();
        //Rutas Server
        this.routes();
    }


    /**
     * routes
     * Contienen los diferentes endpoint del servidor 
     */
    routes(){
        this.app.use(this.path, require('../routes/user.routes'))
    }


    middlewares(){
        //Directorio Publico
        this.app.use(express.static('public'))
        //Cors
        this.app.use(cors());
        //recibe informacion tipo json
        this.app.use(express.json);
    }

    /**
     * Listen
     * escucha activa en el puerto definido en el constructor
     */
    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }


}

module.exports = Server;