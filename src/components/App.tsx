
import * as React from 'react';

import PageInterface from '../PageInterface';

class App extends React.Component<PageInterface, {}> {
    render() {
        return (

            <div>
                <h1>Welcome to React with Typescript</h1>
                <h1>Testing123!</h1>
                <button type="button" onClick={(e) => { console.dir(e.target) }}>click me :) </button>

                <a href="http://www.google.com">take me to google</a>
                <p>The color of this page is: {this.props.color}</p>
            </div >
        );
    }
}

export default App;