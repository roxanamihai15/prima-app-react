
function Input() {


  // let impegnoNew = ''

  // const [valore, setValore] = useState('')

  const cambiaValore = (e) => {
    console.log('cambia valore!');
    // impegnoNew = e.target.value;
    // console.log(impegnoNew);

    // setValore(e.target.value)

  }

  return (
    <input type="text" onChange={cambiaValore}></input>
  )
}

export default Input



// function Input({ passaValore }) {

//   const cambiaValore = (e) => {
//     console.log('cambia valore!');
//     let passaValore = e.target.value
//     // console.log(impegnoNew);
//   }

//   return (
//     <input type="text" onChange={cambiaValore}></input>
//   )
// }

// export default Input