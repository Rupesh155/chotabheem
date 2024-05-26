// console.log('hello');
let express=   require('express')

 let app=   express()

 app.get('/',(req,res)=>{
    res.send('helllo')
 })

//  app.get('/:a',(req,res)=>{
//     let {a}=req.params
//     console.log(a);
//     res.send(a)

//  })

 app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send('hello')


 })
//  app.get('/cat',(req,res)=>{
//     res.send('cat')
    
//  })
//  app.get('/dog',(req,res)=>{
//     res.send('dog')

//  })


 app.get('*',(req,res)=>{
    res.send('kya krna chah rhe')
 })

 app.listen(5000,()=>{
    console.log('server running...');
 })

