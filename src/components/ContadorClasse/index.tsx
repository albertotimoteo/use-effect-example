import React from "react"

class Contador extends React.Component {
  state = {
    contador: 0,
  }

  // Montagem
  componentDidMount(): void {
    //..codigo
  }
  // render
  // Atualização
  // render
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {}
  // Desmontagem
  componentWillUnmount(): void {}

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir 1
        </button>
        {this.state.contador}
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar 1
        </button>
      </div>
    )
  }
}

export default Contador
