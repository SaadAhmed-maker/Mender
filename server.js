require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/mydb')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB Connection Failed"));

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('App running on port: ${port}!')
})
