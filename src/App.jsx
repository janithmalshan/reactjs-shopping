import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {ListShopping} from "./components/ListShopping";
import {ListHistory} from "./components/ListHistory";

// const test = lazy(() => import('./components/test'))
// const Test = React.lazy(() => import('./components/Product'));

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <a href="/index">Home</a>
                    <a href="/history">History</a>
                    <a href="/home">Shop</a>
                </header>
                <main className="app__main">
                    <Router>
                        <Switch>
                            <Route path="/index">
                                {/*<ListShopping />*/}
                                <h1>hi</h1>
                            </Route>
                            <Route path="/history" component={ListHistory}/>
                            <Route path="/home" component={ListShopping}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </Router>
                </main>
                <footer className="app__footer">
                    footer
                </footer>
            </div>
        );
    }
}

export default App;
