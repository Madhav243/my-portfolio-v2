module.exports.home = function(req,res){


    var what_i_do=[
        {
        'heading':'Web Development',
        'icons':[
            {'icon':'fab fa-html5',
            'color':'#e34f26'
    },
            {
            'icon':'fab fa-css3-alt',
            'color':'#1572b6'},
            {
            'icon':'fab fa-bootstrap',
            'color':'#543b79'},
            {
            'icon':'fab fa-js-square',
            'color':'#f7df1e'},
            {
            'icon':'fab fa-react',
            'color':'#61dafb'},
            {
            'icon':'fab fa-node',
            'color':'#679e63'},
            {
            'icon':'fab fa-figma',
            'color':'#f24e1e'}
            
        ],
        'para':[
            '💥 Building Fully responsive website front end using HTML, CSS, Bootstrap and Javascript.',
            '💥 Buliding website backend using NodeJS, ExpressJs and Django.',
            '💥 Experience in working with Nosql as well as Sql Databases.'
        ],
        'image':'website.svg'//image size (1015 * 526 px)
    },{
        'heading':'Data Structures and Algorithms',
        'icons':[
        {'icon':'fas fa-file-code',
        'color':'#a8afcb'
    },    
        {'icon':'fas fa-laptop-code',
        'color':''
    },
        ],
        'para':[
            '💥 I have knowledge of Data Structure like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently.',
            '💥 As I know Data Structure and Algorithms are the heart of programming, So I loves to solve programming question in different competitive website like codeforce,codechef,hackerrank and many more.'
        ],
        'image':'Coding.svg'

    }
    ]


    var data={
        'styleSheet':'home.css',
        'logoName':'Madhav Verma',
        'name':'Madhav',
        'description':"Madhav is a computer geek credited with strong ability to solve complex problems with optimal solutions. He believes in making this world a better place to live not only by extensive use of technology but also through act of kindness.",
        'instagram':'https://www.instagram.com/madhav.verma.961/',
        'linkedin':'https://www.linkedin.com/in/madhav-verma-b13224183/',
        'github':'https://github.com/Madhav243',
        'mail':'madhav.verma108@gmail.com',
        'whatido':what_i_do,
        
    }


    return res.render('home',data);

}

