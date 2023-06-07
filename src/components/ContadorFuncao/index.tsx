import { useEffect, useState } from "react"

type ContadorProps = {
  estadoInicial: number
}

const Contador = ({ estadoInicial }: ContadorProps) => {
  const [contador, setContador] = useState(estadoInicial)
  const [nome, setNome] = useState("")
  // useEffect SEMPRE executa na montagem do componente - SEMPRE!!!!!

  // componentDidUpdate
  useEffect(() => {
    console.log("Teste useEffect - renderização")
  })

  // componentDidMount
  useEffect(() => {
    console.log("Teste useEffect - montagem")
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log("Teste useEffect - dependência", contador)
    if (contador !== 0 && nome !== "") {
      console.log(
        "Teste useEffect - dependência, ambos diferentes que o valor inicial"
      )
    }
  }, [contador, nome])

  function diminui() {
    setContador(contador - 1)
  }

  return (
    <div>
      <button onClick={diminui}>Diminuir 1</button>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Aumentar 1</button>
      <input value={nome} onChange={(event) => setNome(event.target.value)} />
    </div>
  )
}

export default Contador
