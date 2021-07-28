import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './components/main.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="container">
                <Header/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
