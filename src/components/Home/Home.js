import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Home extends Component {
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
        this.props.history.push('/2');
    }

    render() {
        return (
            <div>
                <h1>1 of 4 pages</h1>
                <card>
                    <div>
                        <div>
                            <h1>How are you feeling today?</h1>
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

export default connect(mapStateToProps)(Home);