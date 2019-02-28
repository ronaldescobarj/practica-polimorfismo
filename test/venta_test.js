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

    it('Total agregando una unidad de un articulo deberia devolver el precio del articulo', function () {
        let venta = new Venta();
        let mouse = new Articulo("Mouse Razer", 150);
        venta.agregarProducto(mouse);
        expect(venta.total()).equal(150)
    })

    it('Total agregando dos unidades de un articulo deberia devolver el precio del articulo*2', function () {
        let venta = new Venta();
        let mouse = new Articulo("Mouse Razer", 150);
        venta.agregarProducto(mouse, 2);
        expect(venta.total()).equal(300)
    })

    it('Total agregando una unidad de un servicio deberia devolver el precio del servicio', function () {
        let venta = new Venta();
        let limpieza = new Servicio("Limpieza", 60);
        venta.agregarProducto(limpieza);
        expect(venta.total()).equal(60)
    })

    it('Total agregando tres unidades de un servicio deberia devolver el precio del servicio*3', function () {
        let venta = new Venta();
        let limpieza = new Servicio("Limpieza", 60);
        venta.agregarProducto(limpieza, 3);
        expect(venta.total()).equal(180)
    })

});
