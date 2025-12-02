//INSTRUCCIÓN CONTINUE -> MÉTODO FILTER

const listaClientes = ["1-1", "2-2", "3-3", "4-4"];

// let elementosFiltrados = [];

// let rutNoBuscado = "2-2";

// for (const rut of listaClientes ) {
    
//     if(rut == rutNoBuscado){
//         continue;
//     }
//     elementosFiltrados.push(rut);
// }

// console.log(elementosFiltrados);

let rutNoBuscado = "2-2";
let clientesFiltrados = listaClientes.filter(rut => rut != rutNoBuscado);

console.log(clientesFiltrados);
