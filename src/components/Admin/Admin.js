import React, { Component } from 'react';
import TableData from '../TableData/TableData';
import axios from 'axios';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';


const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {
    // populates talbe with data at page load
    componentDidMount() {
        this.getFeedbacks();
    }
    //deletes feedback from database
    deleteFeedback = (feedbackId) => {
        console.log('in deleteFeedback', feedbackId);
        axios({
            method: 'DELETE',
            url: '/feedbacks/' + feedbackId
        }).then((response) =>{
            this.getFeedbacks();
        }).catch((error)=>{
            alert('Unable to delete feedback.')
            console.log('delete error', error);
        });
    }
    //pulls current data from database - called in componentDidMount
    getFeedbacks = () => {
        axios({
            method: 'GET',
            url: '/feedbacks'
        }).then((response) => {
            const feedbacks = response.data;
            const action = { type: 'UPDATE_FEEDBACK', payload: feedbacks };
            this.props.dispatch(action);
        }).catch((error) => {
            alert('unable to get feedbacks from server');
            console.log(error);
        });
    }

    render() {
        return (
            // header changes to FeedBack Results!
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.feedbacks.map((feedback, i) => {
                            return (
                                <TableData key={i} feedback={feedback} deleteFeedback={this.deleteFeedback}/>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>

        )
    }
}

export default connect(mapStateToProps)(Admin);