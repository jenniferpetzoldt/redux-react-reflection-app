import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionFive extends Component {
    handleClick = () => {
        this.props.dispatch({type: 'CLEAR_FORM'})
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <card>
                    <div>
                        <div>
                            <h1>Thank You!</h1>
                            {/* takes you back to be beginning of the survey and resets */}
                            <button onClick={this.handleClick}>Leave New Feedback</button>
                        </div>
                    </div>
                </card >
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuestionFive);