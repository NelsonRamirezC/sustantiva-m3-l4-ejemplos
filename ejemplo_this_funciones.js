let persona = {
    nombre: "Pedro",
    apellido: "Soto",
    nombre_completo: function(){
        return `${this.nombre} ${this.apellido}`;
    },
    nombre_completo_UPPER: function(){
        return this.nombre_completo().toUpperCase();
    }
};


console.log(persona.nombre);
console.log(persona["apellido"]);

console.log(persona.nombre_completo_UPPER());