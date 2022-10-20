const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'));
})

app.post('/', function (req, res) {
    return res.sendFile(req.body)
})

const port = process.env.PORT || 3004;
app.listen(port,() => console.log('Servidor corriendo en el puerto' + PORT));

app.listen(3223, () => {
    console.log("servidor Meliebre funcionando papaa")
})