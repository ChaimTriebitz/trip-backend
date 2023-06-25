const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './images');
   },
   filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + '--' + file.originalname);
   },
});
const upload = multer({ storage });
const Image = require('../modules/images');

router.get('/', async (req, res) => {
   try {
      const images = await Image.find({}).sort({ createdAt: -1 });
      res.json(images);
   } catch (err) {
      console.log(err);
      res.status(500).send('Failed to fetch images.');
   }
});





router.post('/', upload.single('image'), async (req, res) => {
   if (!req.file) return res.status(400).send('No file uploaded.');

   const image = new Image({ filename: req.file.filename, path: req.file.path, });

   try {
      await image.save();
      res.status(200).send('Image uploaded successfully.');
   } catch (err) {
      console.log(err);
      res.status(500).send('Failed to upload image.');
   }
});
router.get('/:id', (req, res) => {
   const imageId = req.params.id;

})
router.delete('/:id', (req, res) => {
   res.json({ success: 'success' });
});

router.patch('/:id', (req, res) => {
   res.json({ success: 'success' });
});

module.exports = router;
