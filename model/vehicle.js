const mongoose = require('mongoose')
const Schema = mongoose.Schema


var VehicleSchema = new Schema({
    year: { type: Number },
    model: { type: String },
    vehicle_summary: { type: Object },
    vehicle_history: { type: Object },
    cc: { type: Array },
    safty: { type: Array },
    entertainment: { type: Array },
    ee: { type: Array },
    url: { type: String },
})

VehicleSchema.virtual('whole').get(function () {
    return this.year + " " + this.model
})

VehicleSchema.virtual('detail').get(function () {
    return "/vehicle/detail/" + this._id
})
module.exports = mongoose.model('vehicle', VehicleSchema)
