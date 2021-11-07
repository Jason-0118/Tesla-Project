var API = 'https://cs-361-tesla.herokuapp.com/tesla/all'
fetch(API)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
