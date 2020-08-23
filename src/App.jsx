import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {ListShopping} from "./components/ListShopping";
import {ListHistory} from "./components/ListHistory";
import Index from "./components/Index";

// const test = lazy(() => import('./components/test'))
// const Test = React.lazy(() => import('./components/Product'));

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <a href="/index">Home</a>
                    <a href="/old">History</a>
                    <a href="/home">Shop</a>
                </header>
                <main className="app__main">
                    <Router>
                        <Switch>
                            <Route path="/index" component={Index}/>
                            <Route path="/old" component={ListHistory}/>
                            <Route path="/home" component={ListShopping}/>
                            <Redirect to="/index"/>
                        </Switch>
                    </Router>
                </main>
                <footer className="app__footer">
                    © 2020
                </footer>
            </div>
        );
    }
}

export default App;
