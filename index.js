const express= require('express');
const app= express();
const port=8000;



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);

    }else{
        console.log(`App is listen on port : ${port}`);
    }

});


