import Card from "../Card/Card"

// il json non ha nome, glielo do io qui e d'ora in poi lo chiamo cosi in qst file
import datiCard from '../Card/dati.json'


function Main(props) {
    // console.log(props.tema);
    // console.log(props.titoloMain);

    // let array = [1, 2, 3, 4]
    // let arrayStringhe = ['prova1', 'prova2']

    return (
        <main>
            {/* <h2>{props.titolo}</h2> */}

            {/* <Card colore="dark" /> */}

            {/* <Card colore={props.tema} />
            <Card colore={props.tema} />
            <Card colore={props.tema} />
            <Card colore={props.tema} />
            <Card colore={props.tema} /> */}


            {/* {array}
            {arrayStringhe}
            {array.map((valore) => (
                <p>{valore}</p>
            ))} */}




            {/* daticards è il nome che ho dato al json, e poi lo attraverso come al solito */}
            {/* {datiCard.cards.map((elementi) => (
                <Card key={elementi.id} id={elementi.id} price={elementi.price} titoloPulsante={elementi.buttonTitle} etichette={elementi.etichette} colore={props.tema} titolo={elementi.title} immagine={elementi.cover}></Card>
            ))} */}
            {/* key serve a react, deve avere qualcosa di univoco */}

            {/* <Card colore={props.tema} titolo="ciao mondo" senzaBottone={false} /> */}




            {datiCard.cards.map((elementi) => (
                <Card key={elementi.id} colore={props.tema} dati={elementi} />
            ))}

        </main>
        
    )
}

export default Main