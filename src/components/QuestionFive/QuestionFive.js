import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Card, Grid, Button } from '@material-ui/core';

const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionFive extends Component {
    //struggled with asycronis functions. this sloved the proplem the have the next page render run the function
    componentDidMount() {
        this.addFeedback();
    }
    //adds feedback to database
    addFeedback = () => {
        const surveyData = this.props.reduxState.surveyData;
        axios({
            method: 'POST',
            url: '/feedbacks',
            data: surveyData,
        }).then((response) => {
            console.log('4th andswer in axios', this.props.reduxState.surveyData);
        }).catch((error) => {
            console.log('POST error', error);
            alert('Unable to send data.');
        });
    }

    //clears reduxstate for surveyData and pushes user back to first question
    handleClick = () => {
        this.props.dispatch({ type: 'CLEAR_FORM' })
        this.props.history.push('/');
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Card className="question">
                        <div>
                            <div>
                                <h1>Thank You!</h1>
                                <Grid item xs={6}>
                                    <Button id="reset" variant="contained" color="primary" onClick={this.handleClick}>Leave New Feedback</Button>
                                </Grid>
                            </div>
                        </div>
                    </Card >
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps)(QuestionFive);