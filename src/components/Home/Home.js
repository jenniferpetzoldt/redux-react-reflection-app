import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, TextField, Button } from '@material-ui/core';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: '',
        }
    }

    //adds feeling to state   
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    //sends feeling to reduxState and sends the user to next question
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
        this.props.history.push('/2');
    }

    render() {
        return (
            <div className="view">
                <h3>1 of 4 pages</h3>
                <div className="color"></div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card className="question">
                            <div id="number" >
                                <h2>How are you feeling today?</h2>
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

export default connect(mapStateToProps)(Home);