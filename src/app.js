const express=require('express')
const app=express()
// const port=process.env.PORT || 3000
const port= 4000
const path=require('path')
const News=require('./news')

app.set('view engine', 'hbs')

const viewspath=path.join(__dirname,'../views')
app.set('views',viewspath)


app.get('/',(req,res)=>{
    if(!req.query.address){
        return res.send({
          error:'You must provide address'
        })
       }
       if(!req.query.history){
        return res.send({
          error:'You must provide history'
        })
       }
    News(req.query.address,req.query.history,(error, data)=>{
        // if(error){
        //     return res.render('index',{
        //         error:error
        //     })
        // }
        return res.render('index',{
            articles:data.articles

        })
    
    })
})



app.get('*',(req,res)=>{
    res.render('404page',{
      title:'Not found',
      name:'Default page'
    })
  })

  
app.listen(port , ()=>{
    console.log('service is running' , port)
})








