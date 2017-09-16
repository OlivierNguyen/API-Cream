import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    img: {
        data: Buffer,
        contentType: String
    },
    slug: {
        type: String,
        required: 'Slug is required'
    },
    summary: {
        type: String,
        required: 'Summary is required'
    },
    content: {
        type: String,
        required: 'Content is required'
    },
    tags: {
        type: Array,
        required: 'Tags is required'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Post', PostSchema);