import Producto from './Producto'

class Servicio extends Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    estaDisponible(cantidad) {
    }

    cuantoPor() {
        return this.precio;
    }
}

module.exports = Servicio;