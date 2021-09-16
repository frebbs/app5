const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/app5", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) {
        console.log(err)
    }
})


module.exports = mongoose;