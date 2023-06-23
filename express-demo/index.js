process.env['DEBUG'] = 'app:startup';
const debug= require('debug')('app:startup');
const router=require('./routes/courses');
const config = require('config');
const morgan = require('morgan');
const Joi=require('joi');
const logger=require('./logger');
const express=require('express');
const app=express();

app.use(express.json());
app.use(logger);
app.use('/api/courses',router);

//console.log(`Env_variabel:  ${process.env.NODE_ENV}`);
//console.log(`Environment using get method:  ${app.get('env')}`);

console.log("Application Name: "+ config.get('name'));
console.log("Mail Server: "+ config.get('mail.host'));
console.log("Mail Password: "+ config.get('mail.password'));

if(app.get('env')==='development'){ app.use(morgan('tiny'));
debug('Morgan enabled...');
}

app.get('/',(req, res)=> {
res.send('Hello World!!!');
});



const port=process.env.PORT || 3000;
app.listen(port, console.log(`Executing port ${port}`));