const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
            return privateCounter;
        },

        decrement() {
            changeBy(-1);
            return privateCounter;
        },

        value() {
            return privateCounter;
            
        },
    };
})(); //FUNCIÓN IIFE


console.log("Contador inicial:", counter.value());
console.log("Nuevo valor contador:", counter.increment());
console.log("Nuevo valor contador:", counter.increment());


counter.privateCounter = 5;

console.log("Contador inicial:", counter.value());

