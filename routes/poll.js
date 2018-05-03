const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote =  require('../models/Vote');
var Pusher = require('pusher');



var pusher = new Pusher({
    appId: '517471',
    key: '7aedae171304eb3f67e3',
    secret: 'c99c165db898781a6760',
    cluster: 'ap2',
    encrypted: true
  });

router.get('/',(req, res)=>{
    Vote.find().then(votes=>res.json({
        success: true,
        votes:votes}));



});

router.post('/',(req,res) => {

    const newVote = {
        os: req.body.os,
        points:1
    };

 new Vote(newVote).save().then( vote =>{
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os : vote.os
          });
    
         return res.json({success: true, message : 'Thank you for voting'});

    });

});

module.exports = router;