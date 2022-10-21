import { ListadoComponent } from "./component/listado-component";
import { AxiosReqRestRestClient } from "./service/client-rest";
const service = new AxiosReqRestRestClient();
const listadoComponent = new ListadoComponent(service);
listadoComponent.onInit();
//fin!