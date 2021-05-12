const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');


Post.hasOne(User, {
    foreignKey: 'user_id'
})