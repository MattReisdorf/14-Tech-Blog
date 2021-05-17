const { Post, User } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    console.log(req.params.id)
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            }
        })

        const currentPost = postData.get({ plain: true });
        // console.log(currentPost)

        res.render('comment', {post:currentPost, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;