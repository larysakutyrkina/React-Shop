import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <AppRoutes />
            </div>
                );
    }
}

export default App;