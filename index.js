//Adding dependencies 
var express = require('express')
var bodyParser = require('body-parser')
var hbrs = require('express-handlebars')


//Initializing app
var app = express()


//Template engines
app.engine('handlebars', hbrs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + "/views")

//Adding CSS file (main.css)
app.use(express.static(__dirname + '/public'))

//Using Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//Routes
app.get('/', function( req, res ){
	res.render('home')
})

app.get('/about', function( req, res ){
	res.render('about')
})

app.get('/contact', function( req, res ){
	res.render('contact')
})

app.get('*', function( req, res ){
	res.send('Page not found/404')
})

app.listen( process.env.PORT || 3000, function() {

  console.log( 'listening on 3000' )

}) 