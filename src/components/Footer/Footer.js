// come le altre props devo gestirlo qui per renderizzarlo sulla pagina

function Footer(props) {
    return (
        <footer>
            {props.children}
        </footer>
    )
}


// function Footer({children}) {
//     return (
//         <footer>
//             {children}
//         </footer>
//     )
// }

export default Footer