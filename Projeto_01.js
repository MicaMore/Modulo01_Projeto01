var prompt = require('prompt-sync')();

let contagemSim = 0

console.log(`A MONTANHA VERMELHA

"A missão sempre acaba, quando voltamos para casa" - a frase tatuada no braço era o que Stan,
um experiente alpinista levava como lema em cada nova aventura.
Stan escolheu você como companheiro nessa jornada: escalar a imponente Montanha Vermelha.
Ao final, caso consiga atingir seus objetivos, você ganhará uma medalha do próprio Stan, como
símbolo da sua conquista.

Responda com "sim' ou "não" e tome suas decisões nessa incrível aventura.`);

const pergunta01 = prompt(`"Acha que devemos levar casacos extras?" - pergunta Stan a você. `);
    if (pergunta01 == `sim`){
       contagemSim++;
    }

const pergunta02 = prompt(`Ainda sobre itens para levar, Stan está em dúvida:
"Podemos levar somente uma grande mochila, assim revezamos
para que nenhum de nós fique cansado demais. O que acha?" `);
    if (pergunta02 == `sim`){
       contagemSim++;
    }

const pergunta03 = prompt(`A subida começa, e os fortes ventos vão contra toda a sua coragem.
Stan vendo o medo passar adiante de você pergunta:
 "Amigo(a), podemos fazer um 'pitstop' se desejar. Você gostaria?" `);
    if (pergunta03 == `sim`){
       contagemSim++;
    }

const pergunta04 = prompt(`A jornada continua e com a chegada da longa noite ártica,
Stan finalmente declara o que você mais temia: "Droga! Nos perdemos da rota!
Teremos que chamar atenção da equipe de resgate com o sinalizador.
Você o colocou na mochila, certo?" `);
    if (pergunta04 == `sim`){
       contagemSim++;
    }

const pergunta05 = prompt(`O resgate ocorre pouco tempo depois.
"A partir desse trecho estaremos a 3h do final da
nossa jornada" - afirma Stan. A decisão de continuar é sua.
Você continua? `);
    if (pergunta05 == `sim`){
       contagemSim++;
    }

if(contagemSim==5){
    console.log(`PARABÉNS! Agora uma linda medalha brilha em seu peito.`);

}else if(contagemSim==4){
    console.log(`VOCÊ CHEGOU, MAS NADA DE MEDALHA.
    "É preciso honra total para merecer reconhecimento"`);

}else if(contagemSim==3){
    console.log(`TÃO PERTO...
    O silêncio de Stan é ensurdecedor.`);

}else if(contagemSim==2 || contagemSim ==1){
    console.log(`QUASE LÁ!
    "A experiência deve sempre ter a voz mais alta dentro de si" - Stan começa a refletir consigo mesmo.`);

}else if(contagemSim==0){
    console.log(`VOCÊ FALHOU!
    "Devo selecionar melhor a companhia da próxima vez" - esbraveja Stan.`);
}