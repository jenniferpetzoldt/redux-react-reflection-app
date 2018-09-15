import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionFive extends Component {
    render() {
        return (
            <div>
                <card>
                    <div>
                        <div>
                            <h1>Thank You!</h1>
                            {/* takes you back to be beginning of the survey and resets */}
                            <button>Leave New Feedback</button>
                        </div>
                    </div>
                </card >
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuestionFive);