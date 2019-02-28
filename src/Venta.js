class Venta {

    constructor() {
        this.productos = []
    }

    total() {
        if (this.productos.length > 0)
            return this.productos[0].cuantoPor();
        else
            return 0;
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(this.productos);
    }
}

module.exports = Venta;

