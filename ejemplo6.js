//EJEMPLO DE FOR OF

const lista = [4,5,6,7,8,9];

// for (let index = 0; index < lista.length; index++) {
//     console.log(lista[index]);
// }

// lista.forEach(numero => console.log(numero));

// for (const element of lista) {
//     console.log(element);
// }


const listaClientes = ["1-1", "2-2", "3-3", "4-4"];

let clienteBuscado;
let rutBuscado = "1-1";

for (const rutCliente of listaClientes) {

    if(rutCliente == rutBuscado){
        clienteBuscado = rutCliente;
        break;
    }
    // console.log(rutCliente);
}

if(clienteBuscado){
    console.log("Rut:", clienteBuscado);
}else {
    console.log("No se encuentra ningún cliente con el rut:", rutBuscado);
}