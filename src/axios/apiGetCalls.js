const axios = require('axios');

getAllCameras = async () => {
    axios.get('http://localhost:5000/api/v1/cameras')
    .then(function (response){
        console.log(response.data)
    })
    .catch(function (err) {
        console.log(err.message)
    })
}


getAllCameras()