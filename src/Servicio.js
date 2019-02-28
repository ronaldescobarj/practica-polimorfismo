import Producto from './Producto'

class Servicio extends Producto {

    constructor(nombre, precio) {
        super();
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