const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Gets All Members
router.get('/', (req, res) => {
    res.json(members);
});

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
}else{
    res.status(400).json({msg: `Member not found ${req.params.id}`});
}
});

// create Member
router.post('/', (req, res) => {
    res.send(req.body); 
})


module.exports = router;
