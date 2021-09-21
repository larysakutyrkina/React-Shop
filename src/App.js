import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Main from "./routes/Main";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
                );
    }
}

export default App;