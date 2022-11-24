function ListaRipasso({ arrayImpegni }) {

    return (
        <>
        <ul>
            {arrayImpegni.map((impegno, indice) => (
                <li key={indice}>{impegno}</li>
            ))}
        </ul>
        <p>Impegni in lista: {arrayImpegni.length}</p>
        </>
    )
   
}

export default ListaRipasso