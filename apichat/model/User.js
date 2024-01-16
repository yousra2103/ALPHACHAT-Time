const mongoose = require('mongoose');
const User = mongoose.model("User", {


    username : {
    type : String ,
    unique : true 
    } ,

    password : {
    type : String
}
})


module.exports = User ;