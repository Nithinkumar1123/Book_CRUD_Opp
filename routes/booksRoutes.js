const router = require("express").Router();

const bookModel = require("../models/booksModel.js");
//post request
router.post("/add", async (req, res) => {
   try {
    const data = req.body; 
    const newBook = new bookModel(data);
    await newBook.save().then(() =>{
        res.status(200).json({message: "Book added successfully"})
    } );

   } catch (error) {
    console.log(error);
    
   }
});

// GET REQUEST
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json(books);
        
    } catch (error) {
        console.log(error);
        
    }
});

//GET REQ. WITH ID
router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id= req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json( {book});
    } catch (error) {
        console.log(error);
        
    }
});

// update book by id
router.put('/updateBooks/:id', async (req, res) => {
    const id = req.params.id;
    const { bookname,description, author,image, price } = req.body;
    let book;

    try {
        book = await bookModel.findByIdAndUpdate(id,{
            bookname,
            description, 
            author,
            image, 
            price,
        });
        await book.save().then(()=>res.json({message: "Data Updated"}));
        //await book.save().then(()=>res.json(book)); this will display the updated values in json 
        
    } catch (error) {
        console.log(error);
    }
});

// DELETE BOOK BY ID
router.delete('/deleteBooks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(() => res.status(201).json({ message: "DELETED SUCCESSFULLY"}));
    }catch (error){
        console.log(error);
    }
    
});





module.exports = router;









