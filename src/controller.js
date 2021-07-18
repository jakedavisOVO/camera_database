const pool = require('./db');
const queries = require('./queries');
 
 // queries go here

 const getCameraById = (req, res) => {

    const cameraId = parseInt(req.params.id)

    pool.query(queries.getCameraByIdQuery, [cameraId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

 const getCameras = (req, res) => {
     pool.query(queries.getCamerasQuery, (error, results) =>{
      if (error) throw error;
      res.status(200).json(results.rows)   
     })

}

const addCamera = (req, res) => {
    const {
        brand,
        model,
        aperture,
        focal_range,
        iso,
        batteries,
        self_timer,
        flash,
        rare
    } = req.body;

    pool.query(queries.checkModelExists, [model], (error, results) => {
        if (results.rows.length) {
            res.send(`Camera ${model} already exists`)
        } else if (model == null){
            res.send('No data to post')
        } else {
        pool.query(queries.addCamera, [brand, model, aperture, focal_range, iso, batteries, self_timer, flash, rare], (error, results)=>{
            if (error) throw error;
            res.status(201).send(`Camera model: ${model} added successfully`)
        })

    }
    
    })



}

const getCameraByBrand = (req, res) => {

    const cameraBrand = req.params.brand

    pool.query(queries.getCameraByBrandQuery, [cameraBrand], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getCameraByModel = (req, res) => {
    const cameraModel = req.params.model
    pool.query(queries.getCameraByModelQuery, [cameraModel], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getCameraByAperture = (req, res) => {
const cameraAperture = req.params.aperture
pool.query(queries.getCameraByApertureQuery, [cameraAperture], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows)
})
}

const getCameraByFocalRange = (req, res) => {
    const focalRange = req.params.focal_range
    pool.query(queries.getCameraByFocalRange, [focalRange], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getCameraBySelfTimer = (req, res) => {
    const selfTimer = req.params.self_timer
    pool.query(queries.getCameraBySelfTimer, [selfTimer], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}
const getCameraByFlash = (req, res) => {
    const flash = req.params.flash
    pool.query(queries.getCameraByFlash, [flash], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getCameraByRare = (req, res) => {
    const rare = req.params.rare
    pool.query(queries.getCameraByRare, [rare], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}


 module.exports = {
    getCameraById,
    getCameras,
    addCamera,
    getCameraByBrand,
    getCameraByModel,
    getCameraByAperture,
    getCameraByFocalRange,
    getCameraBySelfTimer,
    getCameraByFlash,
    getCameraByRare
     
 }