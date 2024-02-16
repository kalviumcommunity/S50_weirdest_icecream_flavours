const express = require('express');
const app = express();
const port = 3005;
require('dotenv').config();
const connectDb = require('./config/connect'); 
const router = require('./routes/user_'); 

connectDb(); 

app.use(express.json()); 

// Routes
app.get('/ping', (req, res) => {
    res.send('<h1>pong</h1>');
});

app.use("/", router); 

if (require.main === module) {
    app.listen(port, () => {
        console.log(`🚀 server running on PORT: ${port}`);
    });
}

module.exports = app;
