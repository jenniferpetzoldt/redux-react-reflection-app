import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understanding: '',
            }
        }

    handleChange = (event) => {
        this.setState({
             understanding: event.target.value,
        });
    }

    handleClick = () => {
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding})
        this.props.history.push('/3');
    }

    render() {
        return (
            <div>
                <h1>2 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>How well are you understanding the content?</h1>
                            <input type="number" placeholder="select a nubmer 1 - 5" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <h1>Next</h1>
                            <button onClick={this.handleClick}>arrow</button>
                        </div>
                    </div>
                </card >
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuestionTwo);