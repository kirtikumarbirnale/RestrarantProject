let express=require('express')
let app=express()
let body_parser=require('body-parser')

app.set('view engine','ejs')
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(express.static('./public'))

app.get('',(req,res)=>{
    res.render('HomeLandingPage.ejs')
})

app.listen(5000,()=>{
    console.log("Server created successfully");
    
})