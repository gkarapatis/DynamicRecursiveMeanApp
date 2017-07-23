var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/DynamicsDB', ['dynamicForms']);


router.get('/dynamicForm/:id', function(req, res, next) {
    db.dynamicForms.findOne({formID: req.params.id}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


router.get('/dynamicForms', function(req, res, next) {
    db.dynamicForms.find(function(err, dynamics){
        if(err){
            res.send(err);
        }
        res.json(dynamics);
    });
});


router.post('/dynamicForm', function(req, res, next){
    var dynamic = req.body;

   if(dynamic.formID==null||dynamic.formID==""){ //  if(!task.title || !(task.isDone + ''))
       res.status(400);
       res.json({
           "error": "Bad Data"
       });
   } else {
       db.dynamicForms.save(dynamic, function(err, dynamic){
           if(err){
               res.send(err);
           }
           res.json(dynamic);
       });
   }
});

router.delete('/dynamicForm/:id', function(req, res, next) {
    db.dynamicForms.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

router.put('/dynamicForm/:id', function(req, res, next) {
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
        db.dynamicForms.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }  
});

module.exports = router;