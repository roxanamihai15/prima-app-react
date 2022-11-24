import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Layout.css'

// ../ è quello che mi fa uscire


function Layout() {
    let titoloMain = 'titolo main'
    return (
        <div className='container'>
            <Header />
            <Main tema="light" titolo={titoloMain}/>
            <Footer>
                ciao sono il footer
            </Footer>
            {/* il testo dentro footer è 'children' ed è anche lei una props*/}

        </div>
    )
}

export default Layout;
