import "./Card.css"
import imgCaffe from "./caffe.jpg"
import Button from '../Button/Button'

// function Card({ colore, titolo, id, etichette, price, titoloPulsante, immagine, buttonTitle }) {
// // function Card(props) {
// // function Card({ tema }) {


//     // {"card "+props.tema}
//     // `card ${props.tema}`

//     console.log(etichette);
//     return (
//         <div className={"card "+colore}>
//         {/* <div className={"card "+props.tema}> */}
//          {/* <div className={`card ${props.tema}`}> */}
//             <div className="card-body">
//                 <img src={immagine.src} alt={immagine.alt} />

//                 {/* c'è nella certella public e pox richiamarla così */}
//                 {/* <img src="./assets/caffepublic.jpg" alt="caffe" /> */}
//                 <div>
//                     <h1>{id} - {titolo}</h1>
//                     <p>{price}</p>
//                 </div>
//             </div>
//             <div className="card-footer">
//                 <div className="etichette">

//                     {/* vuol dire:
//                     se esite etichette fammi etichette.map*/}
//                     {etichette && etichette.map((etichetta, indice) => (
//                         <span key={indice}>{etichetta}</span>
//                     ))}


//                 </div>
//                 {/* <button>{titoloPulsante}</button> */}
//             </div>
//         </div>
//     )
// }


function Card({ dati }) {

        return (
            <div className={"card "+dati.tema}>

                <div className="card-body">
                    <img src={dati.cover.src} alt={dati.cover.alt} />
                    <div>
                        <h1>{dati.id} - {dati.title}</h1>
                        <p>{dati.price}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="etichette">
                        {dati.etichette && dati.etichette.map((etichetta, indice) => (
                            <span key={indice}>{etichetta}</span>
                        ))}
                    </div>
                    {/* <Button>{dati.buttonTitle}</Button> */}
                    { dati.senzaBottone ? null : <Button> {dati.buttonTitle} </Button > }
                </div>
            </div>
        )
    }


export default Card




