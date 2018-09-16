const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//sends data to feedbacks reducer
router.get('/', (req,res)=>{
    const query = 'SELECT * FROM feedback;';
    pool.query(query)
    .then((result) => {res.send(result.rows);})
    .catch((error)=> {
        console.log ('Error completeng SELECT feedback query', error);
        res.sendStatus(500);
    });
});

//deletes feedback from data base by specific id with data sanitization
router.delete('/:id', (req,res)=>{
    const idOfFeedbackToDelete = req.params.id;
    const query = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(query,[idOfFeedbackToDelete]). then ((result)=> {
        res.sendStatus(200);
    }).catch((error)=> {
        console.log('Error in delete', error);
        res.sendStatus(500);
    })
})


//adds data from reduxstate surveyData
router.post('/', (req,res) => {
    const newFeedback = req.body;
    const query = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    const queryValues = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
    ];
    pool.query(query, queryValues)
    .then(()=> {res.sendStatus(201);})
    .catch((error)=>{
        console.log('Error completing INSERT', error);
        res.sendStatus(500);
    });
});

module.exports = router;