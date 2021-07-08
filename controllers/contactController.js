module.exports.contact=function(req,res){

    var data ={
        'styleSheet':'contact.css',
        'logoName':'Madhav Verma',
    }
return res.render('contact',data);
}