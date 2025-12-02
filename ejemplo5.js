let producto = { 
    id: 1,
    nombre: "producto 1",
    precio: 4500
};

// console.log("ID:", producto.id);
// console.log("Nombre:", producto.nombre);
// console.log("Precio:", producto.precio);

let keys = Object.keys(producto);
let values = Object.values(producto);
let entries = Object.entries(producto);

// console.log(keys);
// console.log(values);
console.log(entries);

// keys.forEach(key => {
//     console.log(key);
// })


for (const key in producto) {
    console.log(producto[key]);
}
