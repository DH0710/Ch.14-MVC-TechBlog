const { Post } = require('../models');

const postData = [
  {
    title: '',
    post_text: '',
    user_id: 8
  },
  {
    title: '',
    post_text: '',
    user_id: 10
  },
  {
    title: '',
    post_text: '',
    user_id: 7
  },
  {
    title: '',
    post_text: '',
    user_id: 1
  },
  {
    title: '',
    post_text: '',
    user_id: 1
  },
  {
    title: '',
    post_text: '',
    user_id: 7
  },
  {
    title: '',
    post_text: ' ',
    user_id: 10
  },
  {
    title: '',
    post_text: '',
    user_id: 9
  },
  {
    title: '',
    post_text: '',
    user_id: 4
  },
  {
    title: '',
    post_text: '',
    user_id: 3
  },
  {
    title: '',
    post_text: '',
    user_id: 3
  },
  {
    title: '',
    post_text: '',
    user_id: 1
  },
  {
    title: '',
    post_text: '',
    user_id: 8
  },
  {
    title: '',
    post_text: '',
    user_id: 3
  },
  {
    title: '',
    post_text: '',
    user_id: 3
  },
  {
    title:
      '',
    post_text: '',
    user_id: 7
  },
  {
    title: '',
    post_text: '',
    user_id: 6
  },
  {
    title: '',
    post_text: '',
    user_id: 4
  },
  {
    title: '',
    post_text: '',
    user_id: 6
  },
  {
    title: '',
    post_text: '',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;