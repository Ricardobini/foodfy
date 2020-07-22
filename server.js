const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")

const server = express()


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("index", {items: recipes})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes/:index", function(req, res){
    const recipeIndex = req.params.index

    return res.render("recipes", {item:recipes[recipeIndex]})
})


server.listen(5000, function(){
    console.log("Server is running")
})



