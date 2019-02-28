var expect = require('chai').expect;

import Venta from '../src/Venta.js';
import Servicio from '../src/Servicio.js';
import Articulo from '../src/Articulo.js';
import Producto from '../src/Producto.js';

describe('Venta', function () {

    it('total deberia devolver 0 si no hay productos', function () {
        let venta = new Venta();
        expect(venta.total()).equal(0);
    })

    it('Total agregando un articulo deberia devolver el precio del producto', function () {
        let venta = new Venta();
        let pantalla = new Articulo("Mouse Razer", 150);
        venta.agregarProducto(pantalla, 1)
        expect(venta.total()).equal(150)
    })

});
