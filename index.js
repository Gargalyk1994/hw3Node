const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");


// function counterViews() {
//     let rawdata = fs.readFileSync('./counter.json');
//     let countViews = JSON.parse(rawdata);
//     countViews.url += 1; 
//     let data = JSON.stringify(countViews);
//     fs.writeFileSync('./counter.json', data);
// }

app.get('/', (req, res) =>{
    let rawdata = fs.readFileSync(path.join(__dirname, '/counter.json'));
    let countViews = JSON.parse(rawdata);
    countViews.urlMain++; 
    res.send(`<h1>Главная страница</h1>
        <p>Просмотров ${countViews.urlMain}</p>
        <a href="/about">На страницу about</a>`);
    fs.writeFileSync(path.join(__dirname, '/counter.json'), JSON.stringify(countViews));
});

app.get('/about', (req, res) =>{
    let rawdata = fs.readFileSync(path.join(__dirname, '/counter.json'));
    let countViews = JSON.parse(rawdata);
    countViews.urlAbout++;
    res.send(`<h1>Страница о сайте</h1>
        <p>Просмотров ${countViews.urlAbout}</p>
        <a href="/">На главную</a>`);
    fs.writeFileSync(path.join(__dirname, '/counter.json'), JSON.stringify(countViews));
});

app.listen(3000);