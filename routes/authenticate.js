var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/DynamicsDB', ['users']);
var jwt    = require('jsonwebtoken');


router.get('/getToken/:role', function(req, res, next) {
  console.log('!!!!!!!!dszdcsdf!!!!!!!!!');
    let role = req.params.role;
  console.log(role);
    if(role){

        var token = jwt.sign({role:role}, 'superSecret', {//app.get('superSecret'), {
          expiresIn : 60*60*24 // expires in 24 hours
          //expiresInMinutes: 1440
        });

          res.json({
          success: true,
          isAdmin: role=='Admin',
          message: 'Enjoy your token!',
          token: token
        });
    }
    else
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    //
    


  });

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
//router.post('/authenticate', function(req, res, next) {
//
//  // find the user
//  //db.Users.findOne({name: req.body.name }, function(err, user) {
//        
//    //if(err){
//    //    res.send(err);
//    //}
//
//user=req.body;
//    //
//    if(req.body.name == 'giorgos' && req.body.password == 'karapatis'){
//
//        var token = jwt.sign(user, 'superSecret', {//app.get('superSecret'), {
//          expiresIn : 60*60*24 // expires in 24 hours
//        });
//
//          res.json({
//          success: true,
//          message: 'Enjoy your token!',
//          token: token
//        });
//    }
//    else
//        res.json({ success: false, message: 'Authentication failed. User not found.' });
//    //
//    
//    if (!user) {
//      res.json({ success: false, message: 'Authentication failed. User not found.' });
//    } else if (user) {
//
//      // check if password matches
//      if (user.password != req.body.password) {
//        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
//      } else {
//
//        // if user is found and password is right
//        // create a token
//        var token = jwt.sign(user, app.get('superSecret'), {
//          expiresInMinutes: 1440 // expires in 24 hours
//        });
//
//        // return the information including token as JSON
//        res.json({
//          success: true,
//          message: 'Enjoy your token!',
//          token: token
//        });
//      }   
//
//    }
//
//  });
//});

module.exports = router;