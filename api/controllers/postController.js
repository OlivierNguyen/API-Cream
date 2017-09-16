import mongoose from 'mongoose';

const Post = mongoose.model('Post');

exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.createPost = (req, res) => {
    const newPost = new Post(req.body);
    newPost.save((err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.getPost = (req, res) => {
    Post.findById(req.params.postId, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.updatePost = (req, res) => {
    Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.deletePost = (req, res) => {

    Post.remove({
        _id: req.params.postId
    }, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Post successfully deleted'});
    });
};