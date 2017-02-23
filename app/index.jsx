import React from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import Main from './components/main';

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Main />
        </div>;
    }
}

render(<App/>, document.getElementById('app'));