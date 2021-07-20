import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{true ? 'js' : 'js2'}123</li>
                <li>456</li>
            </ul>
        );
    }
}

export default App