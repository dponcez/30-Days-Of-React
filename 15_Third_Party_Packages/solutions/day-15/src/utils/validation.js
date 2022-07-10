const express = require('express')
const { body, validationResult } = require('express-validator')

const app = express()
const validation = () => {

  app.use(express.json())
  app.post('user/',
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
  
    (req, res) => {
     const errors = validationResult(res)
     if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array()})
     }
    User.create({
      username: req.body.username,
      email: req.body.email
    }).then(user => res.json(user))
  })
}

export default validation