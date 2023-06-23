const morgan = require('morgan');
const Joi=require('joi');
const logger=require('./logger');
const express=require('express');
const app=express();

app.use(express.json());
app.use(logger);
app.use(morgan('tiny'));



const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

app.get('/',(req, res)=> {
res.send('Hello World!!!');
});

// app.get('/api/courses/',(req, res)=> {
// res.send([1,2,3]);
// });

// app.get('/api/courses/:id',(req, res)=> {
//     res.send(req.params.id);
//     });

// app.get('/api/courses/:id',(req, res)=> {
//     res.send(req.params);
//     });

app.get('/api/courses',(req, res)=> {
    res.send(courses);
    });


app.get('/api/courses/:id',(req, res)=> {
        const course=courses.find(c => c.id===parseInt(req.params.id));
       if(!course) res.status(404).send('course with required id not found');
       res.send(course);
        });


app.post('/api/courses',(req,res)=>{

//  const schema={
//     name: Joi.string().min(3).required
//  };
//  const result=Joi.validate(req.body,schema);

//  if(result.error){
//     res.status(400).send(result.error.details[0].message);
//  }
   
 const course={
    id:courses.length+1,
    name:req.body.name
   };
   courses.push(course);
   res.send(course);
  });


  app.put('/api/courses/:id',(req, res)=> {
    const course=courses.find(c => c.id===parseInt(req.params.id));
   if(!course) res.status(404).send('course with required id not found');
   console.log(course);
    course.name=req.body.name;
    res.send(course);
    });

    app.delete('/api/courses/:id',(req, res)=> {
        const course=courses.find(c => c.id===parseInt(req.params.id));
       if(!course) res.status(404).send('course with required id not found');
    
      courses.splice(course,1);
       res.send(course);
        });   


const port=process.env.PORT || 3000;
app.listen(port, console.log(`Executing port ${port}`));