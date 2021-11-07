const Vehicle = require('../model/vehicle')

exports.get_all = async function (req, res) {
    res.send('yes')
}

exports.get_vehicle = async function (req, res) {
    let vehicle_list = await Vehicle.find().where('model').eq(req.params.model)
    console.log(vehicle_list)
    let titleArray = []
    for (let i of vehicle_list) {
        if (i.vehicle_history.title !== '')
            titleArray.push(i.vehicle_history.title)
        else
            titleArray.push('No title info')
    }
    res.render('vehicle.ejs', { title: req.params.model, list: vehicle_list, titleArray })
}


exports.get_detail = async function (req, res) {
    let vehicle_detail = await Vehicle.find().where('_id').eq(req.params.detail)
    console.log(vehicle_detail)
    const { report = 'No report info', owner = 'No onwer history' } = vehicle_detail[0].vehicle_history
    if (vehicle_detail[0].vehicle_history.title == '')
        vehicle_detail[0].vehicle_history.title = 'No title info'
    res.render('vehicle_detail.ejs', {
        title: vehicle_detail[0].whole,
        detail: vehicle_detail[0],
        history: vehicle_detail[0].vehicle_history.title,
        report,
        owner
    })
}