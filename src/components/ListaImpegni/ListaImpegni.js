import Task from '../Task/Task'
// import impegniJson from '../Task/tasks.json'
import Form from '../Form/Form'

// import { useState } from 'react'

function ListaImpegni(props) {
  return (
    <>
        <Form />
        <ul>
            <Task />
            {/* {impegniJson.impegni.map((impegno) => (
                <Task key={impegno.id} dati={impegno} />
            ))} */}
        </ul>
    </>
  )
}

export default ListaImpegni



// versione senza componenti vari

// function ListaImpegni(props) {
//     return (
//       <div>
//           <input></input>
//           <button>Aggiungi</button>
//           <ul>
//               {impegniJson.impegni.map((impegno) => (
//                   <li key={impegno.id}>{impegno.testo} <button>x</button></li>
//               ))}
//           </ul>
//       </div>
//     )
//   }
  
//   export default ListaImpegni





// versione senza json
// function ListaImpegni() {

//     const [array, setArray] = useState([])

//     // const array = [ 'about', 'home', 'privacy' ]
//     let str = ''

//     const change = (e) => {
//         console.log(e.target.value);
//         str = e.target.value;
//         console.log(str)
//     }

//     const submit = (e) => {
//         e.preventDefault();
//         let arrayAppoggio = [...array, str];
//         setArray(arrayAppoggio)
//         // console.log(array)
//         // console.log('ciao')
//     }

//     const stampa = () => {
//         console.log('ciao') 
//     }

//     return (
//       <div>
//           <form action="#" onSubmit={submit}>
//               <input onChange={change}></input>
//               <button type='submit' onClick={stampa}>Aggiungi</button>
//           </form>
//           <ul>
//               {array.map((value, index) => (
//                 <li key={index}>{value}</li>
//             ))}
//           </ul>
//       </div>
//     )
//   }
  
//   export default ListaImpegni








// seconda prova

// function ListaImpegni() {

//     // const arrayImpegni = ['prova1', 'prova2', 'prova3']
//     const [arrayImpegni, setArrayImpegni] = useState(['inizio lista'])
//     let nuovoImpegno = ''

//     const stampaImpegno = () => {
//         console.log('ciao');
//     }

//     const cambioValore = (e) => {
//         console.log(e.target.value);
//         nuovoImpegno = e.target.value;
//     }

//     const submit = (e) => {
//         e.preventDefault();
//         console.log('submit');
//         // arrayImpegni.push(nuovoImpegno)

//         let arrayAppoggio = [...arrayImpegni, nuovoImpegno]
//         console.log(arrayImpegni);
//         setArrayImpegni(arrayAppoggio)
//     }

//     return (
//       <div>
//         <form action="" onSubmit={submit}>
//             <input type="text" onChange={cambioValore}></input>
//             <button onClick={stampaImpegno} type="submit">Aggiungi</button>
//             <ButtonInput></ButtonInput>
//         </form>

//         <ul>
//             {arrayImpegni.map((impegno, indice) => (
//                 <li key={indice}>{impegno}</li>
//             ))}
//         </ul>
//       </div>
//     )
//   }
  


//   export default ListaImpegni