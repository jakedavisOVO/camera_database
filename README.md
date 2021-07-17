# ALWAYS ON FILM - CAMERA API
-To run the project, make a copy of creds_template, populate with data and rename to creds.js

-npm start to kick off the server


# Base Route 
http://localhost:5000/api/v1/cameras/

# Extended Routes (all lower case)
```
/:id = camera ID (an automatically assigned number)
/brand/:brand (eg, olympus, canon etc)
/model/:model (eg, mju, af-7 etc)
/aperture/:aperture (eg, f2,8 f3,5 etc)
/focal_range/:focal_range (eg, 35mm)
/self_timer/:self_timer (boolean)
/flash/:flash (boolean)
/rare/:rare (boolean)
```

