var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/mytasklist', ['tasks']);
var jwt    = require('jsonwebtoken');

//  Get All Tasks

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

router.get('/tasks', function(req, res, next) {
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
    //res.send('Task API');
});


//  Get Single Task

router.get('/task/:id', function(req, res, next) {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


//  Save Task

router.post('/task', function(req, res, next){
    var task = req.body;

    if(!task.title){ //  if(!task.title || !(task.isDone + ''))
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});


// Delete Task

router.delete('/task/:id', function(req, res, next) {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


// Update Task

router.put('/task/:id', function(req, res, next) {
    var task = req.body;
    var updateTask = {};

    if(task.title){
        updateTask.title = task.title;
    }
    if(task.isDone){
        updateTask.isDone = task.isDone;
    }

    if(!updateTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }  
});




module.exports = router;