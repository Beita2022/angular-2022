"use strict";
exports.__esModule = true;
var listado_component_1 = require("./component/listado-component");
var client_rest_1 = require("./service/client-rest");
var service = new client_rest_1.AxiosReqRestRestClient();
var listadoComponent = new listado_component_1.ListadoComponent(service);
listadoComponent.onInit();
//fin!
