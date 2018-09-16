import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, TextField, Button, Grid } from '@material-ui/core'

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
    //adds understanding to state
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        });
    }
    //sends action and updates reduxState and sends user to next question
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/3');
    }

    render() {
        return (
            <div className="view">
                <h3>2 of 4 pages</h3>
                <div className="color"></div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card className="question">
                            <div id="number" >
                                <h2>How well are you understanding the content?</h2>
                                <TextField label="1-5" onChange={this.handleChange} type="number" margin="normal" />
                            </div>
                            <Grid item xs={6}>
                                <Button className="next" varient="raised" onClick={this.handleClick}>Next</Button>
                            </Grid>
                        </Card >
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps)(QuestionTwo);