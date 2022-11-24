import { useState } from 'react'

function Todo() {

    let listaReset = ['task1', 'task2']

    const [lista, setLista] = useState(listaReset)
    const [valore, setValore] = useState('')

    const handleChange = (e) => {
        setValore(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(lista);
        setLista( [...lista, valore] )
        setValore('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={valore}></input>
                <button type="submit">Aggiungi</button>
            </form>
            <ul>
                {lista.map((elemento, indice) => 
                    <li key={indice}>{elemento}</li>
                )}
            </ul>

        </>
    )
}

export default Todo