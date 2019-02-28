import Producto from './Producto'

class Articulo extends Producto {
    constructor(nombre, precio, saldo = 0) {
        super()
        this.nombre = nombre;
        this.precio = precio;
        this.saldo = saldo;
    }

    estaDisponible(cantidad) {

    }

    cuantoPor() {
        return this.precio - this.saldo;
    }
}

module.exports = Articulo;