const express = require('express') 
const cameraRoutes = require('./routes')
app = express()
const PORT = 5000

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Always On Film Camera Database")
})

app.use('/api/v1/cameras',cameraRoutes);

app.listen(PORT, ()=>{
    console.log(`Server listening on port http://localhost:${PORT}`) 
})

