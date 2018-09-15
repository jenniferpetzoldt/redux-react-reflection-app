import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            support: '',
            }
        }

    handleChange = (event) => {
        this.setState({
                support: event.target.value,
        });
    }

    handleClick = () => {
        this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state.support})
        this.props.history.push('/4');
    }

    render() {
        return (
            <div>
                <h1>3 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>How well are you being supported?</h1>
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

export default connect(mapStateToProps)(QuestionThree);