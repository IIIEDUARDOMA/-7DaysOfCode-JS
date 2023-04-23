const area = prompt ("Qual area você quer seguir, Front-End ou Back-End?");
var front = (area == "front-End" || area == "Front-End" || area == "frontend" || area == "front-end");
var back = (area == "Back-End" || area == "back-End" || area == "backend" || area == "back-end");

if (front) {
 const frontEnd = prompt("Que legal! Você prefere aprender React ou aprender Vue?");     
} 

else if (back) {
const backEnd = prompt("Que legal! Você prefere aprender C# ou aprender Java?");
}
else {
    alert ("Resposta inválida!")
}


const Continue = prompt("Você pretende seguir se especializando na area ou seguir se desenvolvendo para se tornar Fullstack? Responda 1 para continuar especilizando na area ou 2 para seguir como fullstack");

if (Continue == 1) {
    alert ("Que ótimo! É uma excelente area para se especializar. Continue estudando que colherá otimos frutos!");
} else if (Continue == 2) {
    alert ("Excelente escolha! Se tornar um Fullstack é um ótimo caminho para seguir. Continue estudando que colherá ótimos frutos");
} else {
    alert ("Resposta inválida!")
}
 let msg = prompt("Tem mais alguma tecnologias você gostaria de especializar ou conhecer?Digite 'ok' caso positivo");

 while (msg == "ok") {
    let novatecnologia = prompt("qual?");
    alert(`${novatecnologia} é realmente muito legal!`)
    msg = prompt("Tem mais alguma tecnologias você gostaria de especializar ou conhecer?Digite 'ok' caso positivo");
 }


