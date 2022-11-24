import ButtonTask from '../ButtonTask/ButtonTask'
import './Task.css'

// function Task({ dati }) {
function Task({ arrayX }) {

  console.log(arrayX);

  return (
  
    <>

        {/* <li className='add-margin'>{dati.testo} <ButtonTask></ButtonTask> </li> */}
        
        {/* <button className="buttonTodo">x</button> */}


        {arrayX && arrayX.map((impegno, indice) => (
          <li key={indice}>{impegno}</li>
      ))}

    </>

  )
}

export default Task



