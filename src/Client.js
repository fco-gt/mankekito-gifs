const gif = require("./funcion")

class Client {
    constructor() {
        for(const [key, value] of Object.entries(gif)){
            this[key] = value
        }
    }
}

module.exports = Client