const express = require('express');
const {check}=require('express-validator');
const router = express.Router();
const{getPostById,
     createPost,
    deletePost}=require('../controllers/postControl');


router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

router.get('/:id',getPostById);
router.post('/',[check ('title').not().isEmpty(), check('content').isLength({min:5})],
createPost);
router.delete('/:id', deletePost);
 
module.exports = router;