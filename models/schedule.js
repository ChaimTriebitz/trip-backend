const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ScheduleSchema = new Schema({
   ScheduleDay: Number,
   times: {
      netz: String,
      szkshmga: String,
      szkshgra: String,
      sztmga: String,
      sztgra: String,
      chatzot: String,
      shkiah: String,
      tzethacochavim: String,
   },
   schedule: [{
      time: String,
      info: String,
      links: [{
         name: String,
         link: String,
      }],
   }]
})

module.exports = mongoose.model('Schedule', ScheduleSchema)
