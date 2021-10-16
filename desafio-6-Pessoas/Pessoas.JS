// Declarar uma variável qualquer, que receba um objeto vazio.
var Pessoa = new Object();

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

Pessoa.Nome = "israel";
Pessoa.Sobrenome = "Mota";
Pessoa.Sexo = "Masculino";
Pessoa.Idade = 16;
Pessoa.Altura = 1.80;
Pessoa.Peso = 55;
Pessoa.Andando = false;
Pessoa.CaminhouQuantosMetros = 0;

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

Pessoa.FazerAniversario = function(){
    return Pessoa.Idade = Pessoa.Idade + 1;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

Pessoa.Andar = function(Metros){
    Pessoa.Andando = true;
    return Pessoa.CaminhouQuantosMetros = Pessoa.CaminhouQuantosMetros + Metros;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

Pessoa.Parar = function(){
    Pessoa.Andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

Pessoa.NomeCompleto = function(){
    return "Olá! Meu nome é " + Pessoa.Nome + Pessoa.Sobrenome;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

Pessoa.MostrarIdade = function(){
    return "Olá!, eu tenho " + Pessoa.Idade + "anos!"
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

Pessoa.MostrarPeso = function(){
    return "Eu peso " + Pessoa.Peso + "Kg";
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

Pessoa.MostrarAltura = function(){
    return "Minha altura é " + Pessoa.Altura + "m";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.NomeCompleto());

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.MostrarIdade());

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.MostrarPeso());

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.MostrarAltura());

/*
Faça a `pessoa` fazer 3 aniversários.
*/

Pessoa.FazerAniversario();
Pessoa.FazerAniversario();
Pessoa.FazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(Pessoa.MostrarIdade());

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

Pessoa.Andar(2);
Pessoa.Andar(3);
Pessoa.Andar(4);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoa.Andando);

/*
Se a pessoa ainda está andando, faça-a parar.
*/

if(Pessoa.Andar){
    Pessoa.Parar();
}

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(Pessoa.Andando);

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(Pessoa.CaminhouQuantosMetros);

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

Pessoa.Apresentacao = function(){

    let P_Nome = "Olá, eu sou o " + Pessoa.Nome + " " + Pessoa.Sobrenome;
    let P_Idade = ", tenho " + Pessoa.Idade + "anos, ";
    let P_Caminhada = " e, só hoje, eu já caminhei " + Pessoa.CaminhouQuantosMetros + " metros!";

    if(Pessoa.Sexo === "Feminino"){
        P_Nome = "Olá, eu sou a" + Pessoa.NomeCompleto()
    }else if(Pessoa.Idade === 1){
        P_Idade = ", tenho " + Pessoa.MostarIdade() + "ano, "
    }else if(Pessoa.CaminhouQuantosMetros === 1){
        P_Caminhada = " e, só hoje, eu já caminhei" + Pessoa.CaminhouQuantosMetros + " metro!"
    }
    
    return P_Nome + P_Idade + Pessoa.Altura + ", meu peso é " + Pessoa.Peso + P_Caminhada;
}

console.log(Pessoa.Apresentacao());