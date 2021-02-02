const express=require('express')
const app=express()
const cors= require('cors')
const path=require('path')

const port = process.env.PORT || 5000
app.listen(port,()=>console.log('Server started at port '+port))
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
    })
}
const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://dbUser:1234@cluster0.afpe2.mongodb.net/eaccounting?retryWrites=true&w=majority')
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));

const notificationSchema = mongoose.Schema({
    date:String,
    mssg:String
});

var notifications=mongoose.model('notifications',notificationSchema);



app.get('/getNotifications',(req,res)=>{
    
    notifications.find({})
    .then((docs)=>{
      
       res.json({docs:docs})
    })
})

app.post('/addNotification',(req,res)=>{
    
    var date=req.body.notDate;
    var mssg=req.body.mssg;
    
    

    let doc = new notifications({date,mssg});
    notifications.collection.insertOne(doc).then(data=>res.json({status:'success'}))

})
