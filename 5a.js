let cor = "roxo";

if (cor = "azul" && cor != "vermelho" && cor != "marrom") {
    console.log("cor inválida");
} else {
    switch (cor) {
        case "vermelho":
            console.log("Cor Quente");
            break;
        case "azul":
            console.log("Cor Fria");
            break;
        case "Marrom":
            console.log("Cor Neutra");
            break;


    }
}