(function(){
                
    function calcularImc(peso, altura) {
        return peso / (altura * altura);
    }

    function classificarImc(imc) {
        
        if (imc <= 15.9) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Magreza grau III, IMC < 16 ");
        } else if (imc >= 16.0 && imc <= 16.9) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Magreza grau II, IMC entre 16.0 - 16.9 ");
        } else if (imc >= 17.0 && imc <= 18.4) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Magreza grau I, IMC entre 17.0 - 18.4 ");
        } else if (imc >= 18.5 && imc <= 24.9) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Adequado, IMC entre 18.5 - 24.9 ");
        } else if (imc >= 25.0 && imc <= 29.9) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Pré-obeso, IMC entre 25.0 - 29.9 ");
        } else if (imc >= 30.0 && imc <= 34.9) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Obesidade grau I, IMC entre 30.0 - 34.9 ");
        } else if (imc >= 35.0 && imc <= 39.9) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Obesidade grau II, IMC entre 35.0 - 39.9 ");
        } else if (imc >= 40) {
            alert("Seu IMC é: " + imc.toFixed(1) + " Obesidade grau III, IMC > 40 ");
        }

    }

    var peso = prompt("Digite seu peso");
    peso = parseFloat(peso);
    var altura = prompt("Digite sua altura, ex: 1.86 ");
    altura = parseFloat(altura);

    var imc = calcularImc(peso, altura);
    var classificação = classificarImc(imc);


})();