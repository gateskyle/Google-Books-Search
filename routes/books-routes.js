const router = require("express").Router();
const Books = require("../models/books.js");

router.get('/api/books', async (req, res) => {
  Books.find({}).then(
    (data) => {
      res.json(data);
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
});

router.post('/api/books', async (req, res) => {
  try {
    const book = await Books.create({
      id: req.body.id,
      title: req.body.title,
      authors: req.body.authors,
      desc: req.body.desc,
      pic: req.body.pic,
      link: req.body.link,
    })
    res.json(book);
    }
    catch (err) {
      console.log(err);
    }
});

router.delete('/api/books/:id', async (req, res) => {
  Books.findOneAndRemove({ _id: req.params.id }, req.body, function(err, data)
  {
      if(!err){
        console.log("Book Deleted");
      } 
      else {
        console.log(err)
      }
  });
})   

module.exports = router;