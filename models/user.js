const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
   username: {
      type: String,
      required: [true, 'username required'],
   },
   emil: {
      type: String,
      required: [true, 'email required'],
      unique: true,
      match: [/^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|gmail|yahoo|outlook|inbox)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,20}|\d{1,3})(\]?)$/, 'email not valid',]
   },
   password: {
      type: String,
      required: [true, 'password required'],
      minLength: 6,
      select: false,
   },
   resetPasswordToken: String,
   resetPasswordExpire: Date,
})

UserSchema.pre('save', async function () {
   if (!this.isModified('password')) {
      next()
   }
})

module.exports = mongoose.model('User', UserSchema)
