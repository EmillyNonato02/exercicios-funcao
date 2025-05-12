const consumoMedio = (distancia, combustivel) => (distancia / combustivel).toFixed(3);

let resultado1 = consumoMedio(500, 35.0);
let resultado2 = consumoMedio(2254, 124.4);
let resultado3 = consumoMedio(4554, 464.6);

console.log(`${resultado1} km/l`);
console.log(`${resultado2} km/l`);
console.log(`${resultado3} km/l`);
