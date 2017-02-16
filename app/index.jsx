import React from 'react';
import {render} from 'react-dom';
import Header from './components/header'
import Main from './components/main'
import styles from '../styles.css'

class App extends React.Component {
    render () {
        return <div>
            <Header />
            <Main />
        </div>;
    }
}

render(<App/>, document.getElementById('app'));