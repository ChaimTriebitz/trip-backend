const express = require('express')
require('dotenv').config()
const cors = require('cors');


const mongoose = require('mongoose')

const app = express()


const scheduleRoutes = require('./routes/schedules')
const imagesRoutes = require('./routes/images')
app.use(cors({
   origin: '*'
}));
app.use(express.json())
app.use('/images', express.static('images'));
app.use('/api/schedules', scheduleRoutes)
app.use('/api/images', imagesRoutes)


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
   .then(() =>
      app.listen(process.env.PORT, () => {
         console.log('listening on port', process.env.PORT)
      })
   )
   .catch((err) => console.log(err))


