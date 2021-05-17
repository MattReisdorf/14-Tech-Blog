const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    Post.findAll({raw: true,
      include: [
        {
          model: User,
          attributes: [
            'id',
            'name',
            'email'
          ]
        }
      ]
    }).then(function(postData) {
      console.log(postData)
      res.render('home', {posts: postData, loggedIn: req.session.logged_in});      
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async(req, res) => {

  const postData = await Post.findAll({
    where: {
      user_id: req.user.session
    },
    include: {
      model: User, 
      attributes: [
        'id',
        'name',
        'email'
      ]
    }
  })

  const posts = postData.map((post) => post.get({ plain: true }));


  res.render('posts', {
    logged_in: req.session.logged_in,
    posts
  })


})

router.get("/api/user/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
