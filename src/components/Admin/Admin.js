import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            // header changes to FeedBack Results!
            <div>
                <table>
                    <thead>
                       <tr>
                           <th>Feeling</th>
                           <th>Comprehension</th>
                           <th>Support</th>
                           <th>Comments</th>
                           <th>Delete</th>
                       </tr>
                    </thead>
                </table>
            </div>
            
        )
    }
}

export default Admin;