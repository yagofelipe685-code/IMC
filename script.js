alert("JavaScript conectado com sucesso!");
function calcularIMC() {

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let resultado = document.getElementById("resultado");

    // Verifica se os campos foram preenchidos
    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Digite um peso e uma altura válidos.";
        return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Classificação
    let classificacao;

    if (imc < 17) {
        classificacao = "Muito Abaixo do peso";
    } else if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso adequado";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade I";
    } else if (imc < 40) {
        classificacao = "Obesidade II (Severa)"
    } else if (imc > 40) {
        classificacao = "Obesidade III (Mórbida)"
    }

    // Mostra o resultado
    resultado.innerHTML =
        "Seu IMC é: " + imc.toFixed(2) +
        "<br>Classificação: " + classificacao;
}