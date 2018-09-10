import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>1 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>How are you feeling today?</h1>
                            <input type="number" placeholder="select a nubmer 1 - 5" />
                        </div>
                        <div>
                            <h1>Next</h1>
                            <button>arrow</button>
                        </div>
                    </div>
                </card >
            </div>
        );
    }
}

export default Home;