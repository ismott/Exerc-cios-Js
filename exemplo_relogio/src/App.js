import React from 'react';
import './App.css';

// Define um componente funcional DataFormatada que retorna o subtítulo com o valor da hora formatado
function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}



// Componente de classe
// Define a classe Clock que será chamada dentro da renderização do componente App
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // Define a propriedade date pegando a data e hora atual
      date : new Date(),
      clockPause : false 
      // 1 - 19/10/2021 15:14:35
      // 2 - 19/10/2021 15:14:36
      // 3 - 19/10/2021 15:14:37
    };
  };

  // Define a função thick() que atualiza a propriedade date com a data e hora atual
  // toda vez que a função for invocada
  thick(){
    if(this.state.clockPause === false){
      this.setState({
        date : new Date()
      })
    }
  };

  pausar(){
    if(this.state.clockPause === false){
      this.setState({
        clockPause : true
      })
      console.log("Relogio " + this.timerID + " Pausado");
    }
    else{
      this.setState({
        clockPause : false
      })
      console.log("Relogio " + this.timerID + " Retomado");
      this.timerID += 2
      console.log("Agora eu sou o relogio " + this.timerID);
    }
  }

  // Ciclo de vida que ocorre quando o componente Clock é inserido na árvore DOM
  // ou seja, o ciclo de vida de montagem/nascimento
  componentDidMount(){
      this.timerID = setInterval( () => {
        this.thick()
      }, 1000 );
      console.log('Eu sou o relógio ' + this.timerID);
      
    // Exibe no console o ID de cada relógio
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da árvore DOM
  // ou seja, o ciclo de vida da desmontagem/morte
  // Quando isso ocorre, a função clearInterval limpa o relógio criado pela função
  // setInterval
  componentWillUnmount(){
    clearInterval(this.timerID);
  };

  // Renderiza o conteúdo do retorno na tela
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button onClick={() => this.pausar()}>Pause/play</button>
      </div>
    )
  }

}

// Componente funcional
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;
