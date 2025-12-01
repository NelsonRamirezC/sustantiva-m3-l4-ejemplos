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

console.log("Precios base:", precioProductos);

let preciosBruto = precioProductos.map((precio) => calcular_IVA(precio, "NETO"));

console.log("Precios BRUTO:", preciosBruto);

let preciosNeto = precioProductos.map((precio) => calcular_IVA(precio, "BRUTO"));

console.log("Precios NETO:", preciosNeto);