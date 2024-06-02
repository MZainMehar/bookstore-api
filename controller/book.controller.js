import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const saveBook = async(req, res) => {
    try {
        const { name, price, category, image, title } = req.body;
        const book = new Book({
            name: name,
            price: price,
            category: category,
            image: image,
            title: title,
        });
        await book.save();
        res.status(201).json({
            message: "Book created successfully",
            book: {
                _id: book._id,
                name: book.name,
                price: book.price,
                category: book.category,
                image: book.image,
                title: book.title,
            },
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}