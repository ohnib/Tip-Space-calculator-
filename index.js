"use strict";
//Texto do resultado e div pra trocar de cor
const resultado = document.getElementById('resultado');
const resultado_div = document.querySelector('.resultado');
//Valores das tips
const BRL_um = document.getElementById('1BRL');
const BRL_cinco = document.getElementById('5BRL');
const BRL_dez = document.getElementById('10BRL');
//Valores das loses
const um_lose = document.getElementById('1BRL-lose');
const cinco_lose = document.getElementById('5BRL-lose');
const dez_lose = document.getElementById('10BRL-lose');
//Array pra usar nos event listener
const arrayListener = [BRL_um, BRL_cinco, BRL_dez, um_lose, cinco_lose, dez_lose];
function calcularTip() {
    if (resultado) {
        let lose = (um_lose?.value * 1) + (cinco_lose?.value * 5) + (dez_lose?.value * 10);
        let wins = (BRL_um?.value * 1 * 0.84) + (BRL_cinco?.value * 5 * 0.84) + (BRL_dez?.value * 10 * 0.84);
        resultado.innerText = `Ganho total: ${(wins - lose).toFixed(2)}`;
        console.log(wins - lose);
        if (wins - lose < 0) {
            resultado_div?.classList.add('lose');
            resultado_div?.classList.remove('win');
        }
        else if (wins - lose > 0) {
            resultado_div?.classList.remove('lose');
            resultado_div?.classList.add('win');
        }
        else {
            resultado_div?.classList.remove('win', 'lose');
        }
    }
}
arrayListener.forEach(function (item, index) { });
{
    addEventListener('keyup', calcularTip);
}
