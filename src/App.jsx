import React from 'react';
import {ListShopping} from "./components/ListShopping";

function App() {
    return (
        <div className="app">
            <header className="app__header">
                header
            </header>
            <main className="app__main">
                main
                <ListShopping/>
            </main>
            <footer className="app__footer">
                footer
            </footer>
        </div>
    );
}

export default App;
