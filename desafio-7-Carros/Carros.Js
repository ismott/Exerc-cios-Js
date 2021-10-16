/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/


var isTruthy = (TrueOrFalse) => TrueOrFalse;

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.


// console.log(isTruthy(false));
// console.log(isTruthy(null));
// console.log(isTruthy(undefined));
// console.log(isTruthy(0));
// console.log(isTruthy(NaN));
// console.log(isTruthy(''));



/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

// console.log(isTruthy(true));
// console.log(isTruthy({}));
// console.log(isTruthy([]));
// console.log(isTruthy(42));
// console.log(isTruthy("foo"));
// console.log(isTruthy(new Date()));
// console.log(isTruthy(-42));
// console.log(isTruthy(3.14));
// console.log(isTruthy(-3.14));
// console.log(isTruthy(Infinity));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = new Object()

carro.marca = "fiati";
carro.modelo = "Uno";
carro.placa = "999";
carro.ano = 2021;
carro.cor = "branco";
carro.quantasPortas = 4;
carro.assentos = 5;
carro.quantidadePessoas = 0;

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (CorPassada) => carro.cor = CorPassada;

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = () => carro.marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => "Esse carro é um " + carro.marca + " " + carro.modelo;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.quantCarro = function(NumeroP){

    if(carro.quantidadePessoas === carro.assentos > 0)
        return "O carros está lotado";
    else if (NumeroP > (carro.assentos - carro.quantidadePessoas)){
        if((carro.assentos - carro.quantidadePessoas) === 1)
            return "Só cabe mais " + (carro.assentos - carro.quantidadePessoas) + " pessoa!";
        return "Só cabem mais " + (carro.assentos - carro.quantidadePessoas) + " pessoas!";
    }else{
        carro.quantidadePessoas += NumeroP;
        return "já temos " + carro.quantidadePessoas + " no carro!";
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor());

// Mude a cor do carro para vermelho

console.log(carro.mudarCor("vermelho"));

// E agora, qual a cor do carro?

carro.obterCor();

// Mude a cor do carro para verde musgo.

console.log(carro.mudarCor("verde musgo"));

// E agora, qual a cor do carro?

carro.obterCor();

// Qual a marca e modelo do carro?

console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.

console.log(carro.quantCarro(2));

// Adicione mais 4 pessoas no carro.

console.log(carro.quantCarro(4));

// Faça o carro encher.

console.log(carro.quantCarro(3));

// Tire 4 pessoas do carro.

console.log(carro.quantCarro(-4));

// Adicione 10 pessoas no carro.

console.log(carro.quantCarro(10));

// Quantas pessoas temos no carro?

console.log(carro.quantidadePessoas);