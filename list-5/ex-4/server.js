const http = require('http')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const htop = require('html-pdf')

var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  var model = req.session.model
  if (model == undefined) {
    model = {
      name: "",
      surname: "",
      class_: "",
      date: "",
      exercises: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    }
    req.session.model = model
  }
  // console.log(model)
  res.render('form.ejs', model)
})

app.post('/validate', (req, res) => {
  console.log(req.body)
  var exercises = new Array(10)
  for (var i = 0; i < 10; i++) {
    exercises[i] = req.body['ex-' + i] || 0
  }

  const model = {
    name: req.body.name || "",
    surname: req.body.surname || "",
    class_: req.body.class_ || "",
    date: req.body.date || "",
    exercises: exercises
  }

  req.session.model = model

  if (!(model.name && model.surname && model.class_)) {
    res.redirect('/')
  } else {
    res.redirect('/print')
  }
})

app.get('/print', (req, res) => {
  const model = req.session.model
  ejs.renderFile('views/display.ejs', model, (err, str) => {
    console.log(err)
    console.log(str)
    htop.create(str, { format: 'A4' }).toBuffer((err, pdf) => {
      res.contentType('application/pdf')
      res.send(pdf)
    })
  })
})

http.createServer(app).listen(3000)
