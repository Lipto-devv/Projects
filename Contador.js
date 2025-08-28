/* Contador, crea un contador que:
Incremente por 1, decremente por 1, y regrese al valor inicial. */

var createCounter = function(init) {
let current = init;
function incremento(){
    return ++current;
}
function Decremento(){
    return --current;
}
function Reseteo(){
    current = init;
    return current;
}
return {
    incremento,
    Decremento,
    Reseteo
};
};
const counter = createCounter(8);
console.log(counter.incremento());
console.log(counter.Reseteo());
console.log(counter.Decremento());

