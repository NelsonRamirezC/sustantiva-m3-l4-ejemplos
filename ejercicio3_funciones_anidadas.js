
function calculadora(numero1, numero2, opcion){
    let resultado = 0;

    function transformar_numero(valor){
        return Number(valor);
    }

    function sumar(){
        return numero1+numero2;
    };

    function restar(){
        return numero1-numero2;
    };

    numero1 = transformar_numero(numero1);
    numero2 = transformar_numero(numero2);


    if(opcion == "sumar"){
        resultado = sumar();
    }else if(opcion == "restar"){
        resultado = restar();
    }

    return resultado;
};


let resultado = calculadora("15", "6", "sumar");


if(!isNaN(resultado)){
    console.log("Resultado:", resultado);
}else {
    console.log("Revise los datos enviados.");
}