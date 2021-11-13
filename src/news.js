const request=require('request')
const News=(address,history,callback)=>{
    const url='https://newsapi.org/v2/everything?q='+ address+'&from='+ history +'&sortBy=publishedAt&apiKey=05aa3f4559fa48ca93d5292152faa814'
    request({url:url,json:true},(error,response)=>{

        if(error){
            callback({
                title:'404-file or directory not found'
            },undefined)
        }

        else{
            callback(undefined,{
                articles:response.body.articles
                
            }

            )
        }
    })



}





module.exports=News
