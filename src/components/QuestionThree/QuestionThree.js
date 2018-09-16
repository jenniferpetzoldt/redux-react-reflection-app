import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, TextField, Button, Grid } from '@material-ui/core'

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
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
        this.props.history.push('/4');
    }

    render() {
        return (
            <div className="view">
                <h3>3 of 4 pages</h3>
                <div className="color"></div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Card className="question">
                            <div id="number" >
                                <h2>How well are you being supported?</h2>
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

export default connect(mapStateToProps)(QuestionThree);