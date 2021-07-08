module.exports.education=function(req,res){

    var data ={
        'styleSheet':'edu.css',
        'logoName':'Madhav Verma',
    }
return res.render('edu',data);
}