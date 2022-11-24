import Input from '../Input/Input'
import ButtonInput from '../ButtonInput/ButtonInput'

import { useState } from 'react'

function Form({ impegnoNew }) {

  console.log(impegnoNew);
  console.log('funziona?');

  

  const [arrayX, setArrayX] = useState([])

  const submitNew = (e) => {
    e.preventDefault()
    console.log('ciao submit');
    let arrayXAppoggio = [...arrayX, impegnoNew]
    setArrayX(arrayXAppoggio)
    console.log(arrayX);
  }


    return (
      <form onSubmit={submitNew}>
        {/* <Input onChange={cambiaValore}></Input> */}
        <Input></Input>
        <ButtonInput></ButtonInput>
      </form>
    )
  }
  
export default Form