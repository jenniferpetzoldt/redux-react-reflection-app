import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TableRow, TableCell } from '@material-ui/core';

const mapStateToProps = reduxState => ({
    reduxState,
});

class TableData extends Component {

handleClick = () => {
    this.props.deleteFeedback(this.props.feedback.id);
}

    render() {
        return (
            
            <TableRow>
                <TableCell>{this.props.feedback.feeling}</TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell><Button className="delete" onClick={this.handleClick}>Delete</Button></TableCell>
            </TableRow>

        )
    }
}

export default connect(mapStateToProps)(TableData);