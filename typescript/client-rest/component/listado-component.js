"use strict";
exports.__esModule = true;
exports.ListadoComponent = void 0;
var ListadoComponent = /** @class */ (function () {
    //que service ya viene instanciado desde afuera!!!
    function ListadoComponent(service, repository) {
        this.service = service;
        this.repository = repository;
    }
    ListadoComponent.prototype.onInit = function () {
        var _this = this;
        var users = this.service.getUsers();
        console.log(users);
        //ahora creo los usuario con la respuesta del servicio
        users.data.forEach(function (user) { return _this.repository.create({
            codigo: user.id,
            name: user.first_name,
            sector: user.email
        }); });
        var singleUser = this.service.getUser();
        console.log(singleUser);
    };
    return ListadoComponent;
}());
exports.ListadoComponent = ListadoComponent;
