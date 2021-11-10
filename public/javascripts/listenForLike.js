// const credentials = require('./dbCredentials')
// const mongoose = require('mongoose')
// mongoose.connect(credentials.connection_string, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


const listenForLike = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        // console.log(card)
        var like = card.querySelector('.like')
        var id = card.querySelector('.like').getAttribute('value')

        like.addEventListener("click", (event) => {
            event.target.classList.toggle("like-yes");
            event.target.classList.toggle("like-no");
            if (event.target.classList.contains("like-yes")) {
                console.log("saveing!!!!!!!!!");
                //get info
                const cardBody = card.parentElement;
                const vehicleInfo = {
                    id: id,
                    img: cardBody.querySelector('.card-img-top').src,
                    name: cardBody.querySelector('.card-title').textContent.trim(),
                    info: cardBody.querySelector('.info').textContent.trim()
                }
                console.log(vehicleInfo, cardBody)
                saveIntoDB(vehicleInfo);

            } else {
                console.log("remove saving!!!!!!!");
                localStorage.clear();

            }
        })
    })
}



// const getData = (elem) => {
//     const parent = elem.parentElment;
//     const img = parent.querySelector("img").src;
//     const name = parent.querySelector("h3").textContent;
//     const type = parent.querySelector("span").textContent;
//     const mileage = parent.querySelector("span").textContent;
//     const history = parent.querySelector("span").textContent;
//     const likeObj = { img, name, type, mileage, history };
//     console.log(likeObj);
// }

listenForLike();


const saveIntoDB = (vehicle) => {
    const vehicles = getFromDB();
    vehicles.push(vehicle);
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
}


const getFromDB = () => {
    let vehicles;
    if (localStorage.getItem('vehicles') === null)
        vehicles = []
    else
        vehicles = JSON.parse(localStorage.getItem('vehicles'));
    return vehicles;
}



