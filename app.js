const express = require('express');
const app = express();

const comments = [
    {
        name: 'name_1',
        message: 'Research about Nanostructured Transition Metal Phosphides Published in EES',
        dataTime: '2020-11-16'
    },
    {
        name: 'name_2',
        message: 'Research about Nanostructured Transition Metal Phosphides Published in EES',
        dataTime: '2020-11-16'
    },
    {
        name: 'name_3',
        message: 'Research about Nanostructured Transition Metal Phosphides Published in EES',
        dataTime: '2020-11-16'
    },
    {
        name: 'name_4',
        message: 'Research about Nanostructured Transition Metal Phosphides Published in EES',
        dataTime: '2020-11-16'
    },
    {
        name: 'name_5',
        message: 'Research about Nanostructured Transition Metal Phosphides Published in EES',
        dataTime: '2020-11-16'
    },
]

app.use('/public/', express.static('./public/'))
app.use('/views/', express.static('./views/'))

// view engine setup
app.engine('html', require('express-art-template'));

app.get('/' ,function (req, res) {
    res.render('index.html', {
        comments: comments
    });
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

app.get('/comments', function (req, res) {
    const comment = req.query;
    comment.dataTime = '2020-11-24';
    comments.unshift(comment);
    //重定向
    res.redirect('/')
})

app.listen(4396, function() {
    console.log('server is running')
})