var expect = require('chai').expect;

import Venta from '../Venta.js';
import Servicio from '../Servicio.js';
import Articulo from '../Articulo.js';
import Producto from '../Producto.js';

describe('Venta', function () {

    it('total deberia devolver 0 si no hay productos', function () {
        let venta = new Venta();
        expect(venta.total()).equal(0);
    })

});
