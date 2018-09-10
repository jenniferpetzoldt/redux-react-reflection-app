import React, { Component } from 'react';

class QuestionFour extends Component {
    render() {
        return (
            <div>
                <h1>4 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>Any Comments you want to leave?</h1>
                            <input type="number" placeholder="leave comment here" />
                        </div>
                        <div>
                            <h1>Submit</h1>
                            {/* This button should submit the whole form */}
                            <button>Check</button>
                        </div>
                    </div>
                </card >
            </div>
        );
    }
}

export default QuestionFour;