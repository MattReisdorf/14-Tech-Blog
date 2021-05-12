const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');


Post.hasOne(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { Post, Comment, User }