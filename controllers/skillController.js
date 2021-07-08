module.exports.skills=function(req,res){

    var data ={
        'styleSheet':'skill.css',
        'logoName':'Madhav Verma',
    }
return res.render('skill',data);
}