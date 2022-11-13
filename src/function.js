////GIFS&RANDOMIZADOR
require("./aleatorio")
const interacciones = require("./interacciones");

////Funcion
for(const [key, value] of Object.entries(interacciones)) {
    module.exports[key] = function() {
        return value.random()
    }
}

////Exportar
module.exports.list = function() {
    return Object.keys(interacciones)
}