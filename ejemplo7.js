const listaClientes = ["1-1", "2-2", "3-3", "4-4"];

let rutBuscado = "2-6";

let clienteBuscado = listaClientes.find(rut => rut== rutBuscado);

if(clienteBuscado){
    console.log("Rut:", clienteBuscado);
}else {
    console.log("No se encuentra ningún cliente con el rut:", rutBuscado);
}