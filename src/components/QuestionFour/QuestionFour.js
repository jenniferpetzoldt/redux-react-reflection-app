import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            response: event.target.value
        });
    }

    handleClick = () => {
        this.props.dispatch({type: 'ADD_RESPONSE', payload: this.state.response})
        this.props.history.push('/5');
    }

    render() {
        return (
            <div>
                <h1>4 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>Any Comments you want to leave?</h1>
                            <input type="text" placeholder="leave comment here" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <h1>Submit</h1>
                            {/* This button should submit the whole form */}
                            <button onClick={this.handleClick}>Check</button>
                        </div>
                    </div>
                </card >
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuestionFour);