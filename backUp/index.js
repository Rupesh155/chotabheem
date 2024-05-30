// console.log('hello');
let express=   require('express')

 let app=   express()
 app.use(express.urlencoded({extended:true}))
 app.use('/home' ,   express.static('public'))
//  app.set('view engine', 'ejs')
   let arr=[1,2,3,4,5]      
 app.get('/cat',(req,res)=>{
    res.send('cat')
    
 })
 app.get('/todo',(req,res)=>{
   res.json(arr)

 })
 app.post('/todo',(req,res)=>{
   console.log(req.body,"jeje");
   let {data}=req.body
   let data1=  parseInt(data)
   arr.push(data1)
   res.send('hehhe')

 })

 app.listen(5000,()=>{
    console.log('server running...');
 })

// csr vs ssr 
