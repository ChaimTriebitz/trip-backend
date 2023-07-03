const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const upload = multer({ dest: 'uploads/' });


const Image = require('../modules/images');

router.get('/', async (req, res) => {
   const folder = req.query.folder; // Extract the folder name from the query parameter
   const options = {
      type: 'upload',
      prefix: `${folder}/`,
   };

   cloudinary.api.resources(options, (error, result) => {
      if (error) {
         console.error('Error retrieving images:', error);
         return res.status(500).json({ error: 'Failed to retrieve images' });
      }
      const images = result.resources;
      res.json({ images });
   });
});





router.post('/', upload.single('image'), async (req, res) => {
   try {
      const result = await cloudinary.uploader.upload(req.file.path, {
         folder: 'trip',
      });

      // Return the Cloudinary image URL in the response
      res.json({ imageUrl: result.secure_url });
   } catch (error) {
      console.error('Error uploading image:', error);
      return res.status(500).json({ error: 'Image upload failed' });
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
