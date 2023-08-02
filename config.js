const mongoose = require('mongoose')

function mongoConnection(){
    try {
        mongoose.connect('mongodb://0.0.0.0:27017/subscription').then(()=>{
            console.log('connected succsessfuly');
        }).catch((err)=>console.log(err))
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoConnection