let a = 4 | 3; //operador bit a bit
/* | compara bit a bit, onde for 1 e 0 = 1,
onde for 1 e 1 = 1
Todas as operações são feitas com 32 bits
o mesmo vale para as demais operações
*/

let b = 3 & 1; //1 e 1 = 1, demais 0. operador bit a bit
let c = 5 ^ 2; //1 e 0 = 1, demais 0
let d = ~2; //inverte os bits
let e = 4 << 2; //desloca para esquerda 2 casas, como se 4 multiplica por 2 e por 2
let f = 128 >> 1; //desloca uma casa para a direita, como se dividisse por 2
let g = -2 >>> 1; //

//converte o 4 para base 2, exibe um total de 32 bits 
//preenchidos com 0 no início
let a1 = (4).toString(2).padStart(32,0);
let a2 = (3).toString(2).padStart(32,0);
console.log(a1);
console.log(a2);
console.log(a);


console.log(b);
console.log(c);
console.log(d);
let d1 = (2).toString(2).padStart(32,0);
let d2 = (~2 >>> 0).toString(2).padStart(32,0);
console.log(e);
console.log(f);
console.log(g);
let g1 = (-2 >>> 0).toString(2).padStart(32,0);
let g2 = -2 >>> 1;
let g3 = (g2).toString(2).padStart(32,0);
