"use strict";
exports.__esModule = true;
exports.FacturaRepostiroy = exports.UsuarioRepository = void 0;
var UsuarioRepository = /** @class */ (function () {
    function UsuarioRepository() {
    }
    UsuarioRepository.prototype.create = function (params) {
        console.log('UsuarioRepository > params: ', params);
        //logica 
        //db.connection()
        //db.insert()
        return {
            id: 1,
            nombre: 'primer registro',
            sector: 'sector'
        };
    };
    return UsuarioRepository;
}());
exports.UsuarioRepository = UsuarioRepository;
//----------------------------------------
var Factura = /** @class */ (function () {
    function Factura(id, monto) {
        this.id = id;
        this.monto = monto;
    }
    return Factura;
}());
var FacturaRepostiroy = /** @class */ (function () {
    function FacturaRepostiroy() {
    }
    //tiene un constuctor por defecto!
    FacturaRepostiroy.prototype.create = function (params) {
        console.log('FacturaRepostiroy > params: ', params);
        return new Factura(1, 1500);
    };
    return FacturaRepostiroy;
}());
exports.FacturaRepostiroy = FacturaRepostiroy;
//instancias!
var facturaRepostiroy = new FacturaRepostiroy();
var params = {
    codigo: Math.random(),
    name: 'factura random',
    fecha: new Date()
};
var factura = facturaRepostiroy.create(params);
console.log(factura);
