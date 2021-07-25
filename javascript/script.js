function soma(){
    var tn1 = document.getElementById(`numero1`);
    var tn2 = document.getElementById(`numero2`);
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var result = n1 + n2;

    var mostra_resultado = document.getElementById(`resultado`);
    mostra_resultado.innerHTML = `<p> O Resultado é: <strong>${result}</strong></p>`;
}
function subtrai(){
    var tn1 = document.getElementById(`numero1`);
    var tn2 = document.getElementById(`numero2`);
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var result = n1 - n2;

    var mostra_resultado = document.getElementById(`resultado`);
    mostra_resultado.innerHTML = `<p> O Resultado é: <strong>${result}</strong></p>`;
}
function multiplica(){
    var tn1 = document.getElementById(`numero1`);
    var tn2 = document.getElementById(`numero2`);
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var result = n1 * n2;

    var mostra_resultado = document.getElementById(`resultado`);
    mostra_resultado.innerHTML = `<p> O Resultado é: <strong>${result}</strong></p>`;
}
function divide(){
    var tn1 = document.getElementById(`numero1`);
    var tn2 = document.getElementById(`numero2`);
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var result = n1 / n2;

    var mostra_resultado = document.getElementById(`resultado`);
    mostra_resultado.innerHTML = `<p> O Resultado é: <strong>${result}</strong></p>`;
}
function easteregg(){
    var troll1 = document.getElementById(`rodape`)
    
    troll1.innerHTML = `Te amo Tatita &#128152;`
}