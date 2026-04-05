function exercicio01(){
    let nomedopersonagem = "Walter Hartwell White Sr.";
    let codinome = "Heisenberg";
    let datanascimento = "7 de setembro de 1958";
    let anonascimento = 1958;
    let anoatual = 2026;
    let alturaPersonagem = 1.78;
    let pesoPersonagem = 79;
    let categoriaPersonagem = "Químico brilhante e traficante";
    let servicos = 250;
    let salario = 400000;

    alert(
        "Nome do personagem: " + nomedopersonagem + "\n" +
        "Codinome: " + codinome + "\n" +
        "Data de nascimento: " + datanascimento + "\n" +
        "Idade atual: " + (anoatual - anonascimento) + " anos" + "\n" +
        "Altura do herói: " + alturaPersonagem + "m" + "\n" +
        "Peso do personagem: " + pesoPersonagem + "kg" + "\n" +
        "Indice de Massa Corporal: " + (pesoPersonagem / (alturaPersonagem * alturaPersonagem)).toFixed(2) + " kg/m²" + "\n" +
        "Categoria: " + categoriaPersonagem + "\n" + 
        "Serviços: " + "≈ " + servicos + "\n" +
        "Média acumulada na carreira: " + "R$ "+ servicos * salario
     )
}

function exercicio02(){
    let nomeAluno = "Maicon Jeckson da Silva";
    let nota1 = 8.5;
    let nota2 = 7;
    let nota3 = 9;
    let nota4 = 6.6;

    alert (
        "Nome do aluno: " + nomeAluno + "\n" +
        "Nota primeira avaliaçäo: " + nota1 + "\n" +
        "Nota segunda avaliaçäo: " + nota2 + "\n" +
        "Nota terceira avaliaçäo: " + nota3 + "\n" +
        "Nota quarta avaliaçäo: " + nota4 + "\n" +
        "Média Final: " + ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)
    )
}

function exercicio03(){
    let nomeProduto = "Ryzen 7 5700x";
    let valorProduto = 1299.99;
    let quantidadeProduto = 4;
    let descontoProduto = 0.90;

    alert(
        "Nome do produto: " + nomeProduto + "\n" +
        "Valor do produto: R$ " + valorProduto + "\n" + 
        "Quantidade: " + quantidadeProduto + "\n" +
        "Valor total: R$ " + quantidadeProduto * valorProduto + "\n" + 
        "Valor com desconto (-10%): R$ " + ((quantidadeProduto * valorProduto) * descontoProduto).toFixed(2)
    )
}

function exercicio04(){
    let nomeCarro = "Vectra Elite 2.4";
    let anoCarro = "2011";
    let velocidadeMax = 205;
    let tempoViagem = 3;

    alert(
        "Carro: " + nomeCarro + "\n" +
        "Ano: " + anoCarro + "\n" + 
        "Velocidade Máxima: " + velocidadeMax + " km/h" + "\n" + 
        "Tempo de viagem: " + tempoViagem + "h" + "\n" +
        "Distância: " + (velocidadeMax * tempoViagem) + " km"
    )
}

function exercicio05(){
    let nomeCidade = "Maceió";
    let populacaoMcz = 957916;
    let areaMcz =   509.6;

    alert(
        "Cidade: " + nomeCidade + "\n" +
        "População: " + populacaoMcz + " habitantes" + "\n" +
        "Área: " + areaMcz + "km²" + "\n" +
        "Densidade demográfica: " + (populacaoMcz / areaMcz).toFixed(2)
    )
}

function exercicio06(){
    let filme = "Joias Brutas";
    let tempoFilme = "2h 15m";
    let tempoFilmen = 135;
    let classificacao = "16";
    let vezesAssistido = 5;

    alert(
        "Filme: " + filme + "\n" +
        "Tempo de filme: " + tempoFilme + "\n" +
        "Classificação: " + classificacao + " anos" + "\n" + 
        "Vezes assitido: " + vezesAssistido + "\n" +
        "Tempo Assistido: " + (tempoFilmen * vezesAssistido) / 60 + "h"
    )
}

function exercicio07(){
    let funcionario = "Everson Zoio";
    let salario = 1820.50;
    let salarioHora = 10.8;
    let horaExtra = 25;

    alert(
        "Funcionário: " + funcionario + "\n" +
        "Salário: R$ " + salario.toFixed(2) + "\n" + 
        "Salário por hora extra: R$ " + salarioHora.toFixed(2) + "\n" + 
        "Total de horas extras: " + horaExtra + "h" + "\n" + 
        "Valor total de horas extras: R$ " + (horaExtra * salarioHora).toFixed(2) + "\n" + 
        "Salário final: R$ " + (salario + (horaExtra * salarioHora)).toFixed(2)
    )
}
