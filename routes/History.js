const express = require('express')
const histories = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const History = require('../models/History')
histories.use(cors())

process.env.SECRET_KEY = 'secret'

histories.post('/history', (req, res) => {
  const today = new Date()
  const historyData = {
    file_name: req.body.file_name,
    number_register: req.body.number_register,
    email: req.body.email,
    created: today
  }

    History.findOne({
    where: {
      file_name: req.body.file_name
    }
  })
    //TODO bcrypt
    .then(history => {
      if (!history) {
        bcrypt.hash(req.body.email, 10, (err, hash) => {
          historyData.email = hash
          History.create(historyData)
            .then(history => {
              res.json({ status: history.file_name + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'error al guardar' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

histories.get('/history', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  History.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(history => {
      if (history) {
        res.json(history)
      } else {
        res.send('error al guardar')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = histories