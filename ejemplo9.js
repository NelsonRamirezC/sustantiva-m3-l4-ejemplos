let producto1  = {
    id:1,
    precio: 4_500,
    nombre: "Producto 1"
};
let producto2  = {
    id:2,
    precio:15_000,
    nombre: "Producto 2"
};
let producto3  = {
    id:3,
    precio: 50_000,
    nombre: "Producto 3"
};

const listaProductos = [producto1, producto2, producto3];

//MOSTRAR EN CONSOLA LOS NOMBRES DE TODOS LOS PRODUCTOS (LISTA)

for (const producto of listaProductos) {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
};


//BUSCAR PRODUCTOS POR ID

let idBuscado = 5;

let foundProducto = listaProductos.find(producto => producto.id == idBuscado);

if(foundProducto){
    console.log("Producto ha sido encontrado", foundProducto);
}else {
    console.log(`No existe el producto con ID: ${idBuscado} en el sistema.`);
}



// FILTRAR PRODUCTO POR RANGO DE PRECIOS

console.log("=".repeat(50));
let precioDesde = 1_000;
let precioHasta = 20_000;


let productosFiltrados = listaProductos.filter(producto => producto.precio >= precioDesde && producto.precio <=  precioHasta);

// let productosFiltrados = listaProductos.filter(producto => {
//     let filtroDesde = producto.precio >= precioDesde;
//     let filtroHasta = producto.precio <=  precioHasta;
    
//     if(filtroDesde && filtroHasta){
//         return true;
//     }else{
//         return false;
//     }
// });


if(productosFiltrados.length != 0){
    console.log(productosFiltrados);
}else{
    console.log("No hay productos que cumplan con ese criterio.");
}