const express = require('express');
const router = express.Router();
var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '517471',
    key: '7aedae171304eb3f67e3',
    secret: 'c99c165db898781a6760',
    cluster: 'ap2',
    encrypted: true
  });

router.get('/',(req, res)=>{
    res.send('POLL');



})

router.post('/',(req,res)=>{
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os : req.body.os
      });

     return res.json({success: true, message : 'Thank you for voting'}) 
})

module.exports =router;