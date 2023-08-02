const mongoose = require('mongoose')

let Subscription = new mongoose.Schema({
    Subscription_name:{type:String},
    gridData:[{
        Date:{type:Date},
        startTime:{type:Date},
        endTime:{type:Date}
    }]
})

module.exports = mongoose.model('SubscritionCollection', Subscription)