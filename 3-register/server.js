const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

// home route
app.get("/", (req, res) => {
    res.render()
})