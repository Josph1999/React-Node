const User = require("../models/User")

const getUsers = (req, res) => {
    User.find((error, users) => {
        if(error){
            res.send(error)
        }
        res.json(users)
    })
  };

const createUser = (req, res) => {
    const user = new User({
      name: req.body.name,
      city: req.body.city,
      country: req.body.country,
      email: req.body.email,
      date_of_birth: req.body.date_of_birth,
      child: req.body.child,
      english_level: req.body.english_level,
      photo: req.body.photo
    })

    user.save((error, user) => {
        if(error) {
          res.send(error)
        }
        res.json(user)
    })
}

  module.exports = {
    getUsers,
    createUser
  };