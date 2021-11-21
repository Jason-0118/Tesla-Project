const Vehicle = require('../model/vehicle')

exports.get_liked_vehicles = async function (req, res) {
    let vehicle_list = await Vehicle.find().where('like').eq('like')
    console.log(vehicle_list)
    let titleArray = []
    for (let i of vehicle_list) {
        if (i.vehicle_history.title !== '')
            titleArray.push(i.vehicle_history.title)
        else
            titleArray.push('No title info')
    }
    res.render('like.ejs', { title: req.params.model, list: vehicle_list, titleArray })
}

exports.delete_all = async function (req, res) {
    let vehicle_list = await Vehicle.find().where('like').eq('like')
    for (let i of vehicle_list) {
        i.like = "unlike"
        await i.save();
    }
    res.redirect('/like')
}