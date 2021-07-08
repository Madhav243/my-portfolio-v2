module.exports.projects=function(req,res){

    var data ={
        'styleSheet':'project.css',
        'logoName':'Madhav Verma',
    }
return res.render('project',data);
}