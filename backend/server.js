const express = require("express");
const articles = require("./dummydata/articles.js");
const server = express();

server.get('/', (req,res) => {
    res.send("API is running")
})

server.get('/api/articles', (req,res) => {
    res.json(articles);
});

server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});

server.listen(5000,console.log("server is working and listening to PORT 5000"));