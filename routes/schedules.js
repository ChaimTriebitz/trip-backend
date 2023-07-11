const express = require('express')

const Schedule = require('../models/schedule')
const router = express.Router()

router.get('/', async (req, res) => {
   const schedules = await Schedule.find({}).sort({ createdAt: -1 })
   res.status(200).json(schedules)
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
   try {
      const newSchedule = await Schedule.create(req.body)
      res.status(200).json(newSchedule)
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
})

router.delete('/:id', (req, res) => {
   res.json({ success: 'success' })
})

router.patch('/:id', (req, res) => {
   res.json({ success: 'success' })
})

module.exports = router 