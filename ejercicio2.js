function sumar(...valores){
    let acumuladorSuma = 0;
    valores.forEach(function(valor){
        
        acumuladorSuma += valor;
        //acumuladorSuma = acumuladorSuma + valor;
    });
    return acumuladorSuma;
};

let resultadoSuma = sumar(5, 6, 2, 9, 20, 30);

console.log("Resultado suma:", resultadoSuma);

console.log("=".repeat(50));

//EJEMPLO SUMAR GASTOS, SUELDOS, ETC.

const sueldosDiciembre = [800_000, 550_000, 950_000, 1_150_000];

let totalSueldo = sumar(...sueldosDiciembre);

function formatear_moneda(valor){
    return valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
};

console.log("Total sueldos diciembre: ", formatear_moneda(totalSueldo));