const precioProductos = [755, 760, 780, 890, 1_015];



function calcular_IVA(valor, opcion = "NETO"){

    opcion = opcion.toUpperCase();

    let resultado = 0;

    if(opcion == "NETO"){

        resultado = valor * 1.19;

    }else if(opcion == "BRUTO"){
        
        resultado = valor / 1.19;

    }else {
        console.log("opción incorrecta, debe elegir entre [NETO o BRUTO].");
    }

    return Math.round(resultado);

};


function procesar_precios(listaPrecios, opcion = "NETO"){
    
    opcion = opcion.toUpperCase();

    return listaPrecios.map((precio) => calcular_IVA(precio, opcion));
};

console.log("Precios base:", precioProductos);
console.log("Precios BRUTO:", procesar_precios(precioProductos, "NETO"));
console.log("Precios NETO:", procesar_precios(precioProductos, "BRUTO"));