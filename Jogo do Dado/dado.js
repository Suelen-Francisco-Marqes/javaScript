/**
*JS - Aula6: Jogo do Dado
*@author Estudante Suelen Marques 
*/

//vai aredonda para um numero inteiro e sorteia 6 numeros aleatorios
//match.random começa do numero zero e vai até 5 
var sorteio = Math.floor(Math.random() * 6 +1);

//enquando for chamado a variavel sorteio faca
//caso o sorteio foi 1 vai substitui a imagema tual
//se for isso sai da estrutura de repetição
switch(sorteio){
	case 1: 
	   document.getElementById("face").src="face1.png";
	   break;
	case 2: 
       document.getElementById("face").src="face2.png";
       break;	
    case 3: 
       document.getElementById("face").src="face3.png";
       break;
	case 4: 
	   document.getElementById("face").src="face4.png";
	   break;
	case 5: 
       document.getElementById("face").src="face5.png";
       break;	
    case 6: 
       document.getElementById("face").src="face6.png";
       break;
	default:
       //caso contrario
        break;	   
}