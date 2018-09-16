import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, TextField, Button, Grid } from '@material-ui/core'


const mapStateToProps = reduxState => ({
    reduxState,
});

class QuestionFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
        }
    }
    //adds comments to state
    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    }
    //sends action and updates reduxState and sends user to confirmation page
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        this.props.history.push('/5');
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
                                <h3>Any Comments you want to leave?</h3>
                                <TextField label="comment here" onChange={this.handleChange} type="text" margin="normal" />
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

export default connect(mapStateToProps)(QuestionFour);