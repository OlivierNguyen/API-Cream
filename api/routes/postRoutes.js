import posts from '../controllers/postController';

module.exports = (app) => {

    app.route('/api/post/')
        .post(posts.createPost);

    app.route('/api/post/:postId')
        .get(posts.getPost)
        .put(posts.updatePost)
        .delete(posts.deletePost);
};
