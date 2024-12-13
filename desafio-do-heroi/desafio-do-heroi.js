let nameHero = "Anna";
let xpHero = 1000000;
let levelHero = "";

// Se XP for menor do que 1.000 = Ferro
if(xpHero <=1000){
    levelHero = "Ferro";
}
// Se XP for entre 1.001 e 2.000 = Bronze
else if(xpHero<=2000){
    levelHero = "Bronze";

}
// Se XP for entre 2.001 e 5.000 = Prata
else if(xpHero<=5000){
    levelHero = "Prata";
}
// Se XP for entre 5.001 e 7.000 = Ouro
else if(xpHero<=7000){
    levelHero = "Ouro";

}
// Se XP for entre 7.001 e 8.000 = Platina
else if(xpHero<=8000){
    levelHero = "Platina";

}
// Se XP for entre 8.001 e 9.000 = Ascendente
else if(xpHero<=9000){
    levelHero = "Ascendente";

}
// Se XP for entre 9.001 e 10.000= Imortal
else if(xpHero<=10000){
    levelHero = "Imortal";
}
// Se XP for maior ou igual a 10.001 = Radiante
else if(xpHero >=10000){
    levelHero = "Radiante";
}


console.log(`O Herói de nome ${nameHero} está no nível de ${levelHero}`);