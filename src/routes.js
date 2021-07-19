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
router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM aof_cameras');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;