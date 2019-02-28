class Venta {

    constructor() {
        this.productos = []
    }

    total() {
        let total = 0;
        for (let producto of this.productos) {
            total += producto.cuantoPor();
        }
        return total;
    }

    agregarProducto(producto, cantidad = 1) {
        for (let i = 0; i < cantidad; i++)
            this.productos.push(producto);
    }
}

module.exports = Venta;

