function validarNumero() {

    /* Captura dos elementos */
    let numero = document.getElementById("numero").value;
    let mensagem = document.getElementById("mensagem");

    /* Validação de campo vazio */
    if (numero == "") {

        mensagem.textContent = "Por favor, insira um número.";
        mensagem.style.color = "red";

    } else {

        /* Conversão para número inteiro */
        numero = parseInt(numero);

        /* Estrutura de decisão baseada no valor do número */
        
        // Caso 1: número maior que 10
        if (numero > 10) {

            mensagem.textContent = "O número é maior que 10.";
            mensagem.style.color = "green";

        // Caso 2: número maior que 5 e menor ou igual a 10
        } else if (numero > 5) {

            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";

        // Caso 3: número menor ou igual a 5
        } else {

            mensagem.textContent = "O número é 5 ou menor.";
            mensagem.style.color = "blue";
        }
    }
}