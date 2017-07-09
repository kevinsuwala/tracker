var Category = require('../models').categories;
var Session = require('../models').sessions;
var User = require('../models').users;
var data = require('../data');

module.exports = function(app){ 
    app.post('/api/utils/dummydata', function(req, res) {
        var err = false;

        User.create({
          "username": "kevinsuwala", 
          "firstName": "Kevin",
          "lastName": "Suwala"
        });

        data['categories'].forEach(category => {
          console.log("creating category...", category['name']);
          Category.create(category);
        });
        
        data['sessions'].forEach(session => {
          console.log("creating session...", session['description']);
          Session.create(session);
        });
  
        return res.status(200).send({});
    });
}

