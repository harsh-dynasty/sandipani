const express=require('express')
const app=express()
const cors= require('cors')
const path=require('path')

const port = process.env.PORT || 5000
app.listen(port,()=>console.log('Server started at port '+port))
app.use(express.json())
app.use(cors())

const {google}=require('googleapis');
const keys=require('./keys.json');

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
   
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

const client= new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
);

client.authorize((err,tokens)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Spreadsheet Connected");
        
    }

})

function gsrun(cl,newRow){
    const gsapi=google.sheets({version:'v4',auth:cl});

    const options={
        spreadsheetId:"1-NL_D1QgV3_4f4tfl2k4y_MlKu-m7kvN49DXSgZJvDQ",
        range:"Sheet1!A1",
        
        valueInputOption:'USER_ENTERED',
        
        resource:{values:[newRow]}
    };
    gsapi.spreadsheets.values.append(options);
   
        
}

app.post('/contactus',(req,res)=>{
    
    var email=req.body.email;
    var subject=req.body.subject;
    var message=req.body.message;
    
    var newRow=[email,subject,message];
    gsrun(client,newRow);
    res.json({mssg:"Success"});
})