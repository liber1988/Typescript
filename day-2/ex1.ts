interface Item {
  id: number;
  title: string;
  available: Boolean;
}

interface Book extends Item {
  author: string;
  pages: number;
}

interface DVD extends Item {
  director: string;
  duration: number;
}

interface Library<T extends Item> {
  addItem(item: T): void;
  getItemById(id: number): T | 0;
  listAvailableItems(): T[];
}

// Class implementation of the Library interface
class LibraryImpl<T extends Item> implements Library<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItemById(id: number): T | 0 {
    return this.items.find((item) => item.id === id);
  }

  listAvailableItems(): T[] {
    return this.items.filter((item) => item.available);
  }
}

// Create instances of LibraryImpl for Book and DVD
const bookLibrary = new LibraryImpl<Book>();
const dvdLibrary = new LibraryImpl<DVD>();

// Add some Book items to the book library
bookLibrary.addItem({
  id: 1,
  title: "The Great Gatsby",
  available: true,
  author: "F. Scott Fitzgerald",
  pages: 180,
});
bookLibrary.addItem({
  id: 2,
  title: "1984",
  available: false,
  author: "George Orwell",
  pages: 328,
});
bookLibrary.addItem({
  id: 3,
  title: "To Kill a Mockingbird",
  available: true,
  author: "Harper Lee",
  pages: 281,
});

// Add some DVD items to the DVD library
dvdLibrary.addItem({
  id: 1,
  title: "Inception",
  available: true,
  director: "Christopher Nolan",
  duration: 148,
});
dvdLibrary.addItem({
  id: 2,
  title: "The Matrix",
  available: false,
  director: "Lana Wachowski, Lilly Wachowski",
  duration: 136,
});
dvdLibrary.addItem({
  id: 3,
  title: "Interstellar",
  available: true,
  director: "Christopher Nolan",
  duration: 169,
});

// List all available books
console.log("Available Books:");
console.log(bookLibrary.listAvailableItems());

// List all available DVDs
console.log("Available DVDs:");
console.log(dvdLibrary.listAvailableItems());

// Retrieve a specific book by ID and log the details
const specificBook = bookLibrary.getItemById(1);
console.log("Retrieved Book:");
console.log(specificBook);

// Retrieve a specific DVD by ID and log the details
const specificDVD = dvdLibrary.getItemById(3);
console.log("Retrieved DVD:");
console.log(specificDVD);
