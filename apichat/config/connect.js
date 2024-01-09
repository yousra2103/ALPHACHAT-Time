const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ALPHACHAT')


.then(()=>{
    console.log(" Bien connécté à Mongoose");
})
.catch(()=>{
    console.log(" Ooops !! Something went wrong , Please try again !");
})

module.exports = mongoose ;
