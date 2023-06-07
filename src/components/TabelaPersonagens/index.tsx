import { useEffect, useState } from "react"

type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: Array<string>
  url: string
  created: string
}

const TabelaPersonagens = () => {
  const [personagens, setPersonagens] = useState<Array<Character>>([])
  const [nome, setNome] = useState("")

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await (
        await fetch(`https://rickandmortyapi.com/api/character?name=${nome}`)
      ).json()
      setPersonagens(result.results)
    }

    fetchCharacters()
  }, [nome])

  return (
    <>
      <div>
        <label>Busca por nome: </label>
        <input value={nome} onChange={(event) => setNome(event.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {personagens.map((personagem) => (
            <tr key={personagem.id}>
              <td>{personagem.id}</td>
              <td>{personagem.name}</td>
              <td>{personagem.status}</td>
              <td>{personagem.species}</td>
              <td>{personagem.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TabelaPersonagens
