let nota1 = 77;
let nota2 = 33;
let nota3 = 80;
let nota4 = 55;

let media = (nota1+nota2+nota3+nota4)/4;

console.log(media)

if(media <=30){
    console.log("Reprovado");
}else if(media >=31 && media <=60){
    console.log("Recuperação");
}else if(media >=70){
    console.log("Aprovado")
}

