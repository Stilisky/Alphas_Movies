// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
const mongoose = require('mongoose')
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const bodyParser = require("body-parser")
// var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies')
var categoriesRouter = require('./routes/category')
var commentsRouter = require('./routes/comments')
var genresRouter = require('./routes/genre')
var likeRouter = require('./routes/like')
var appRouter = require('./routes/appRoute')

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//DB Configuration
mongoose.connect('mongodb://127.0.0.1:27017/alphasmovies',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('connected'))
.catch(() => console.log('error connect'))

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/categories', categoriesRouter)
app.use('/comments', commentsRouter)
app.use('/genres', genresRouter)
app.use('/likes', likeRouter)
app.use('/api/map', appRouter)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
