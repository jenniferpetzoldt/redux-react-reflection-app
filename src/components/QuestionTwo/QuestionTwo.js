import React, { Component } from 'react';

class QuestionTwo extends Component {
    render() {
        return (
            <div>
                <h1>2 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>How well are you understanding the content?</h1>
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

export default QuestionTwo;