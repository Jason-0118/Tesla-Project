const Vehicle = require('../model/vehicle')

exports.get_vehicle = async function (req, res) {
    let vehicle_list = await Vehicle.find().where('model').eq(req.params.model)
    let titleArray = getTitle(vehicle_list)
    res.render('vehicle.ejs', {
        title: req.params.model,
        list: vehicle_list, titleArray
    })
}

exports.get_detail = async function (req, res) {
    let vehicle_detail = await Vehicle.find().where('_id').eq(req.params.detail)
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

exports.get_update = async function (req, res, next) {
    try {
        let vehicle = await Vehicle.find().where('_id').eq(req.params.update);
        if (vehicle[0].like == 'like') {
            vehicle[0].like = "unlike"
        } else
            vehicle[0].like = "like";
        await vehicle[0].save()
        res.redirect("/vehicle/model/" + vehicle[0].model)
    } catch (err) {
        next(err);
    }
}

function getTitle(list) {
    let titleArray = []
    for (let i of list) {
        if (i.vehicle_history.title !== '')
            titleArray.push(i.vehicle_history.title)
        else
            titleArray.push('No title info')
    }
    return titleArray;
}