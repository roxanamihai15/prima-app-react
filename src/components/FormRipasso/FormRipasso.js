import { useState } from 'react'

function FormRipasso( {arrayImpegni, setArrayImpegni} ) {

    const [nuovoImpegno, setNuovoImpegno] = useState('')

    const stampaValore = (e) => {
        setNuovoImpegno(e.target.value)
        console.log(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault()
        console.log('prova');
        // arrayImpegni.push(nuovoImpegno)
        setArrayImpegni([...arrayImpegni, nuovoImpegno])
        console.log(arrayImpegni);
        setNuovoImpegno('')
    }

    return (
        <form action="" onSubmit={submit}>
            <input onChange={stampaValore} type="text" value={nuovoImpegno}/>
            <button>aggiungi</button>
        </form>
    )
  
}

export default FormRipasso