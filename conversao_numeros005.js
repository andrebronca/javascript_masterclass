let a = Number("10");
let b = Number("9.9");
let c = Number("0xFF");
let d = Number("0b10");
let e = Number("0o10");
let f = Number();
let g = Number("javascript");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log("---------------------");
console.log(~~"10");
console.log(+"10");
console.log("10" - 1);
console.log("10" * 2);
console.log("10" / 2);
console.log("10" + 1);
console.log("---------------------");

let h1 = (0xA).toString(10); //hexadecimal para decimal
let h2 = (0b1010).toString(16); //binário para hexadecimal
let h3 = (010).toString(2); //octal para binario
let h4 = (10).toString(8); //decimal para octal
console.log(h1);
console.log(h2);
console.log(h3);
console.log(h4);
console.log("---------------------");

let i1 = parseInt("10", 10); //converte 10 string para decimal
let i2 = parseInt("9.9", 10); //por padrão a conversão é para base 10
let i3 = parseInt("A", 16); //tem que dizer a base senão retorna NaN
let i4 = parseInt("11", 2);
let i5 = parseInt("010", 8);
console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);
console.log(i5);
console.log("---------------------");

let j1 = parseFloat("10");
let j2 = parseFloat("2.5");
let j3 = parseFloat("0xff");
let j4 = parseFloat("0b10");
console.log(j1);
console.log(j2);
console.log(j3);
console.log(j4);

