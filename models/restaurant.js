const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name : { type: String, required: true},
    link: { type: String, required: true},
    cat:{ type: String},
    // location: { type: [Number], index: { type: '2dsphere', sparse: true}},
    rating :{ type: Number},
    isOpen:{ type: Boolean},
    catName:{ type: String},
    price:{type:String},
    imgs:{type:String},
    lon:{type:Float32Array},
    lat:{type:Float32Array}
},{timestamps : true})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant
