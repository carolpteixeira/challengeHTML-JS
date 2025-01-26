let title = document.querySelector('h1');
title.innerHTML = 'Hora do desafio';

function clickedConsole() {
    console.log('O botão foi clicado');
}

function clickedAlert() {
    alert('Eu amo JS');
}
 
function clickedPrompt() {
    let city = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${city} e lembrei de você`);
}

function clickedSoma() {
    let num1 = parseInt(prompt('Digite um número inteiro:'));
    let num2 = parseInt(prompt('Digite outro número inteiro:'));
    let soma = num1+num2;
    alert(`A soma dos números que você digitou é: ${soma}`);
}