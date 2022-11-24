import { useState } from 'react'
import FormRipasso from '../FormRipasso/FormRipasso'
import ListaRipasso from '../ListaRipasso/ListaRipasso'

function TodoRipasso() {

    const [arrayImpegni, setArrayImpegni] = useState([])
    

    // let arrayImpegni = ['impegno1', 'impegno2']

    

   return (

    <div>
        
        <FormRipasso arrayImpegni={arrayImpegni} setArrayImpegni={setArrayImpegni}/>
        <ListaRipasso arrayImpegni={arrayImpegni}/>
        
    </div>

   )

}

export default TodoRipasso