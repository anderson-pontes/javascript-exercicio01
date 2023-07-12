let numberOne = Number(prompt("Informe o primeiro número: "));

let numberTwo = Number(prompt("Informe outro númeor: "));

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert("A soma dos dois números é " + sum);
alert("A subtração dos dois números é " + sub);
alert("A multiplicação dos dois números é " + mult);
alert("A divisão dos dois números é "+ div);
alert("O resto da divisão dos dois números é "+ rest);

if(sum % 2 === 0){
    alert("O resultado da soma dos dois números é par " + sum);
}else{
    alert("O resultado da soma dos dois números é impar " + sum);
}

if(numberOne != numberTwo){
    alert("Os números inseridos não diferentes!")
}else{
    alert("Os números inseridos são iguais!")
}

