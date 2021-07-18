const axios = require('axios');
const qs = require('qs')

postCameras = async () => {


    //TODO: abstract out these values

    body = JSON.stringify({
        "brand": "olympus",
        "model": "am-100",
        "aperture": "f3,5",
        "focal_range": "35mm",
        "iso": "50-1000",
        "batteries": "2 x AAA",
        "self_timer": true,
        "flash": true,
        "rare": false
    })

await axios.post('http://localhost:5000/api/v1/cameras', body,{
    "headers": {
        "content-type": "application/json"
    }
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

}

postCameras()