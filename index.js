const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:3453457017/movieApp')
    .then(() => {
        console.log("Connection open!!!!")
    })
    .catch(err => {
        console.log("oh no error!!!")
        console.log(err)
    })

