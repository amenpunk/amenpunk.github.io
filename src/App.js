import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './components/main.css';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <div className="container">
                <Header/>
            </div>
        </Router>
    );
}

export default App;
