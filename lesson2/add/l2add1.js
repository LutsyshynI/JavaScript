let v1 = 3.0;
let v2 = 3.6;
let v3 = 4.2;
let engines = [v1, v2, v3];
console.log(engines);

console.log(engines[1])
engines[2] = 5.0;
console.log(engines);
engines[3] = 6.0;
console.log(engines);
let flor = Math.floor(engines.length / 2);
console.log(flor);
engines[flor] = 'jjjjjj';
console.log(engines);
