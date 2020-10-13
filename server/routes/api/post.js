import express from 'express'

// Model
import Post from '../../models/post'

// Create a router
const router = express.Router()

// Get method route
router.get('/', async(req, res) => {
    const postFindResult = await Post.find()    // https://mongoosejs.com/docs/api.html#model_Model.find
    console.log(postFindResult, "All Post Get")

    res.json(postFindResult)
})

router.post('/', async(req, res, next) => {
    try {
        console.log(req, "request");
        const {title, contents, fileUrl, creator} = req.body;   // https://www.geeksforgeeks.org/express-js-req-body-property/
        const newPost = await Post.create({
            title: title,
            contents: contents,
            fileUrl: fileUrl,
            creator: creator
        });
        res.json(newPost)
    } catch(e) {
        console.log(e)
    }
});

export default router