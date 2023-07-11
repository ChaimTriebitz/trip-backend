const express = require('express')

require('dotenv').config()
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose')

const app = express()

app.use(cors({
   origin: '*'
}));
app.use(express.json())
app.use('/images', express.static('images'));
app.use('/api/schedules', require('./routes/schedules'))
app.use('/api/images', require('./routes/images'))
// app.use('/api/auth', require('./routes/auth'))

app.use(express.static(path.join(__dirname, 'trip-backend/build')));

// Define a catch-all route to serve the React app
// app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'trip-backend/build', 'index.html'));
// });




// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//    .then(() =>
app.listen(process.env.PORT, () => {
   console.log('listening on port', process.env.PORT)
})
   // )
   // .catch((err) => console.log(err))


