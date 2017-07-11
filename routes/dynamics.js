var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/DynamicsDB', ['dynamics']);
var jwt    = require('jsonwebtoken');

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
      console.log(req.headers['x-access-token']);
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

router.get('/dynamics', function(req, res, next) {
    //db.dynamics.find(function(err, dynamics){
    //    if(err){
    //        res.send(err);
    //    }
    //    res.json(dynamics);
    //});
    res.send('Task API');
});


router.get('/dynamics/:tableName', function(req, res, next) {
    let tableName = req.params.tableName;
    db[tableName].find(function(err,  dynamics){
        if(err){
            res.send(err);
        }
        res.json(dynamics);
    });
});


//  Get Single Task

router.get('/dynamic/:tableName/:id', function(req, res, next) {
    let tableName = req.params.tableName;
    db[tableName].findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


//  Save dynamic
router.post('/dynamics/:tableName', function(req, res, next){
    let tableName = req.params.tableName;
    var dynamic = req.body;
   db[tableName].save(dynamic, function(err, dynamic){
       if(err){
           res.send(err);
       }
       res.json(dynamic);
   });

   //if(!dynamic.title){ //  if(!task.title || !(task.isDone + ''))
   //    res.status(400);
   //    res.json({
   //        "error": "Bad Data"
   //    });
   //} else {
   //    db.dynamics.save(dynamic, function(err, dynamic){
   //        if(err){
   //            res.send(err);
   //        }
   //        res.json(dynamic);
   //    });
   //}
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

router.put('/dynamic/:tableName/:objectID', function(req, res, next) {
    var task = req.body;
    var updateTask = {};
    //task._id=undefined;
    delete task._id;
    //if(task.title){
    //    updateTask.title = task.title;
    //}
    //if(task.isDone){
    //    updateTask.isDone = task.isDone;
    //}

    if(!updateTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
            console.log(task);
        db[req.params.tableName].update({_id: mongojs.ObjectId(req.params.objectID)}, task, {}, function(err, task){
            if(err){
                res.send(err);
            }
            console.log(task);
            res.json(task);
        });
    }  
});

module.exports = router;