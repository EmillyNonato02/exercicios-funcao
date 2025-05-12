function calcularVolume(raio) {
    return (4 / 3.0) * 3.14159 * (raio * raio * raio);
  }
  
  let raio1 = 3;
  let raio2 = 15;
  let raio3 = 1523;
  
  let volume1 = calcularVolume(raio1);
  let volume2 = calcularVolume(raio2);
  let volume3 = calcularVolume(raio3);
  
  console.log(`VOLUME = ${volume1.toFixed(3)}`);
  console.log(`VOLUME = ${volume2.toFixed(3)}`);
  console.log(`VOLUME = ${volume3.toFixed(3)}`);
 
  