
const Post=require('../models/posts');
const {validationResult}=require('express-validator');

 const getPostById=(req, res) => {
   /*  const postId= req.params.id 
 
    const post=posts.find((item) => {
     return item.id=postId;
    })
    res.json({post}); */
 } 
 //Create Post
 const createPost=async(req, res) => {
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        res.status(422).json({message:'Invalid Data'})
    }
    const {title, content}=req.body;

    const createdPost= new Post({title, content });
    await createdPost.save();
    
    res.status(201).json(createdPost);
 }
const deletePost=(req, res) => /* {
    const postId=req.params.id

    posts=posts.filter((item)=>{
        return item.id !==postId;
    })
    res.status(200).json({message: 'Post deleted successfully'});
}
  */



module.exports={getPostById,createPost,deletePost}