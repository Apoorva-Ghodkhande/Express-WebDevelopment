const express= require('express');
const router=express.Router();

const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

// app.get('/',(req, res)=> {
// res.send([1,2,3]);
// });

// app.get('/:id',(req, res)=> {
//     res.send(req.params.id);
//     });

// app.get(/:id',(req, res)=> {
//     res.send(req.params);
//     });

router.get('/',(req, res)=> {
    res.send(courses);
    });


router.get('/:id',(req, res)=> {
        const course=courses.find(c => c.id===parseInt(req.params.id));
       if(!course) res.status(404).send('course with required id not found');
       res.send(course);
        });


router.post('/',(req,res)=>{

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


  router.put('/:id',(req, res)=> {
    const course=courses.find(c => c.id===parseInt(req.params.id));
   if(!course) res.status(404).send('course with required id not found');
   console.log(course);
    course.name=req.body.name;
    res.send(course);
    });

    router.delete('/:id',(req, res)=> {
        const course=courses.find(c => c.id===parseInt(req.params.id));
       if(!course) res.status(404).send('course with required id not found');
    
      courses.splice(course,1);
       res.send(course);
        });   


        module.exports= router;
