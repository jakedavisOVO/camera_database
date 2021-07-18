const getCamerasQuery = "SELECT * FROM ddr8f9r4oj9g7b";
const getCameraByIdQuery = "select * from aof_cameras where id = $1"; 
const checkModelExists = "SELECT cam from aof_cameras cam WHERE cam.model = $1";
const addCamera = 
"INSERT INTO aof_cameras (brand, model, aperture, focal_range, iso, batteries, self_timer, flash, rare) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
const getCameraByBrandQuery = "SELECT * FROM aof_cameras WHERE brand = $1";
const getCameraByModelQuery = "SELECT * FROM aof_cameras WHERE model LIKE '%'||$1||'%'" 
const getCameraByApertureQuery = "SELECT * FROM aof_cameras WHERE aperture LIKE '%'||$1||'%'";
const getCameraByFocalRange = "SELECT * FROM aof_cameras WHERE focal_range = $1";
const getCameraBySelfTimer = "SELECT * FROM aof_cameras WHERE self_timer = $1";
const getCameraByFlash = "SELECT * FROM aof_cameras WHERE flash = $1";
const getCameraByRare = "SELECT * FROM aof_cameras WHERE rare = $1";

//const getCameraByIso = "SELECT * FROM aof_cameras WHERE iso LIKE '%'||$1||'%'"; **not implementing this query**




module.exports = {
    getCamerasQuery,
    getCameraByIdQuery,
    checkModelExists,
    addCamera,
    getCameraByBrandQuery,
    getCameraByModelQuery,
    getCameraByApertureQuery,
    getCameraByFocalRange,
    getCameraBySelfTimer,
    getCameraByFlash,
    getCameraByRare,
    
}