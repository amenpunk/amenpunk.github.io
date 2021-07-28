import { BrowserRouter as Router } from "react-router-dom";
import './components/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
    return (
        <Router>
            <Container>
                <Header/>
                <Footer/>
            </Container>
        </Router>
    );
}

export default App;
