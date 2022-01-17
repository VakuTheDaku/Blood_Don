var http=require('http')
const express=require('express')
const app=express()
const bodyParser= require('body-parser')
const db=require('./util/database')
app.use(bodyParser.urlencoded({extended: false}))
adminRouter =require('./routes/admin')

app.set('view engine','ejs')
app.set('views','views')
app.use(adminRouter)
// db.execute('SELECT * FROM name_group').then((result)=>
// {
//     console.log(result)
// }).catch((err)=>{console.log(err)})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})