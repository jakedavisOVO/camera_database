const { Router } = require('express')
const controller = require('./controller')

const router = Router()

// this will connect the queries to a router.<method>

router.get("/", controller.getCameras)
router.post("/", controller.addCamera)

router.get("/:id", controller.getCameraById)
router.get("/brand/:brand", controller.getCameraByBrand)
router.get("/model/:model", controller.getCameraByModel)
router.get("/aperture/:aperture", controller.getCameraByAperture)
router.get("/focal_range/:focal_range", controller.getCameraByFocalRange)
router.get("/self_timer/:self_timer", controller.getCameraBySelfTimer)
router.get("/flash/:flash", controller.getCameraByFlash)
router.get("/rare/:rare", controller.getCameraByRare)

module.exports = router;