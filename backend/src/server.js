const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack9:oministack9@cluster0-yowmc.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

// app.use(express.json())

// app.get('/users',(req,res) => {
//     return res.json({idade: req.query.idade});
// });

// app.put('/users/:id',(req,res) => {
//     return res.json({id: req.params.id});
// });

// app.post('/users',(req,res) => {
//     return res.json(req.body);
// });

// app.post('/users',(req,res) => {
//     return res.json({message: "Hello Word"});
// });

// app.listen(3333);