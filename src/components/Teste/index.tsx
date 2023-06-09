import { useCallback, useState } from "react"

const Teste = () => {
  const [numeroConst, setNumeroConst] = useState(10)

  // Callback é uma função javascript que é passada como parâmetro para outra
  // função javascript

  const testeFn = useCallback(() => {
    console.log("Teste")
  }, [])

  // TODA vez que um componente sofre um re-render, todas as funções declaradas dentro do
  // escopo do componente são reescritas para que seus valores sejam atualizados

  const sumFunction = (var1: number, var2: number) => {
    return var1 + var2 + numeroConst
  }

  // Sempre coloque suas funções que precisam ser internas ao componente dentro de
  // um useCallback

  const sumFunctionCallback = useCallback(
    (var1: number, var2: number) => {
      return var1 + var2 + numeroConst
    },
    [numeroConst]
  )

  const testeFunction = () => {
    console.log("Teste")
  }

  return <div />
}

export default Teste
