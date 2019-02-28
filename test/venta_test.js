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

});
