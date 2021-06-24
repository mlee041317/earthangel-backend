const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true});

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;