
const fetch = require('node-fetch')

exports.get_rate = function (req, res) {
    let API = "https://cs-361-tesla.herokuapp.com/tesla/?name=2021 " + req.params.model;
    fetch(API)
        .then((response) => {
            if (!response.ok) console.error("Issue with request", response);
            return response.json();
        })
        .then((data) => {
            let info = data
            res.render('rate.ejs', {
                title: req.params.model,
                info
            });
        })
}

