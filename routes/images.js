const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../configs/cloudinary');
const upload = multer({ dest: 'uploads/' });


router.get('/', async (req, res) => {
   const { resources } = await cloudinary.search
      .expression('folder:trip')
      .sort_by('created_at', 'desc')
      .max_results(1000)
      .execute();
   const publicIds = resources.map((file) => file.public_id);
   console.log(resources);
   res.send(resources);
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
