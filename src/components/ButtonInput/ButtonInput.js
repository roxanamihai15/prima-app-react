


function ButtonInput() {

  const stampataNew = () => {
    console.log('stampa New!');
  }

  return (
    <button onClick={stampataNew}>aggiungi</button>
  )
}

export default ButtonInput







// esercizio fatto insieme

// function ButtonInput({children, stampaImpegno}) {
//   return (
//     // <button onClick={stampaImpegno}>{children}</button>
//     <button onClick={stampaImpegno}>aggiungi</button>
//   )
// }

// export default ButtonInput