import React, { Component } from 'react';

class QuestionThree extends Component {
    render() {
        return (
            <div>
                <h1>3 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>How well are you being supported?</h1>
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

export default QuestionThree;