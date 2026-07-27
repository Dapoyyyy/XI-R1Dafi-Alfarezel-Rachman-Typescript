/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */


type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

const book1: Book = {
  isbn: "9786020324781",
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  totalPages: 529,
  category: "Novel",
  isAvailable: true,
};

const book2: Book = {
  isbn: "9789793062792",
  title: "Bumi",
  author: "Tere Liye",
  totalPages: 440,
  category: "Fantasy",
  isAvailable: true,
};

const book3: Book = {
  isbn: "9786022912825",
  title: "Negeri 5 Menara",
  author: "Ahmad Fuadi",
  totalPages: 424,
  category: "Novel",
  isAvailable: false,
};

console.log(book1);
console.log(book2);
console.log(book3);


