function show() {
    document.querySelector(".bookForm").style.display = "flex";
}

function hide() {
    document.querySelector(".bookForm").style.display = "none";
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function Book(title, author, date, pages, read){
    this.title = title;
    this.author = author;
    this.date = date;
    this.pages = pages;
    this.read = read;
}

function createBookElement() {
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookDate = document.getElementById("date").value;
    const bookPages = document.getElementById("pages").value;
    const bookRead = document.getElementById("read").checked;

    const book = new Book(
        bookTitle,
        bookAuthor,
        bookDate,
        bookPages,
        bookRead
    );

    return book;
}

function createBookInfoContainer(book){
    const title = document.createElement("p");
    title.textContent = book.title;
    title.classList.add("bookTitle");

    const author = document.createElement("p");
    author.textContent = book.author;
    author.classList.add("bookInfo");

    const date = document.createElement("p");
    date.textContent = book.date;
    date.classList.add("bookInfo");

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    pages.classList.add("bookInfo");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("bookInfoContainer");
    infoContainer.appendChild(title);
    infoContainer.appendChild(author);
    infoContainer.appendChild(date);
    infoContainer.appendChild(pages);

    return infoContainer;
}

function createBookRead(read) {
    const bookRead = document.createElement("div");
    bookRead.classList.add("bookRead")

    const label = document.createElement("p");
    label.textContent = "Read"

    const check = document.createElement("input")
    check.type = "checkbox"
    check.checked = read

    bookRead.appendChild(label)
    bookRead.appendChild(check)

    return bookRead;
}

function createBookButtons(book) {
    const buttons = document.createElement("div");
    buttons.classList.add("bookButtons");
    buttons.appendChild(createBookRead(book.read));
    buttons.appendChild(document.createElement("div"));
    return buttons;
}

function renderBook(bookArray) {
    for (i in bookArray) {
        const bookContainer = document.createElement("div");
        bookContainer.appendChild(createBookInfoContainer(bookArray[i]));
        bookContainer.appendChild(createBookButtons(bookArray[i]));

        document.querySelector(".bookGrid").appendChild(bookContainer);
    }
}

function bookClean(){
    while (document.querySelector(".bookGrid").firstChild) {
        document.querySelector(".bookGrid").firstChild.remove();
    }
}

const addBookButton = document.querySelector("#addBook");
const books = [];

form.addEventListener("submit", () =>{
    books.push(createBookElement());
    bookClean();
    renderBook(books);
})