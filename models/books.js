const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    id: { type: String, required: true},
    title: String,
    author: String,
    pic: String,
    desc: String,
    link: String,
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;