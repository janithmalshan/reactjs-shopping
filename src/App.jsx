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
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <main className="app__main">
                    <Router>
                        <Header/>
                        <Switch>
                            <Route path="/index" component={Index}/>
                            <Route path="/orders" component={ListHistory}/>
                            <Route path="/shopping" component={ListShopping}/>
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
