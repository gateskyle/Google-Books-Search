const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    pic: String,
    desc: String,
    link: String,
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;