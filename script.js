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

function createBookElement() {
    const bookTitle = document.createElement("p");
    bookTitle.textContent = document.querySelector("#title").value
    bookTitle.classList.add("bookTitle")

    const bookAuthor = document.createElement("p")
    bookAuthor.textContent = document.querySelector("#author").value
    bookAuthor.classList.add("bookInfo")

    const date = document.createElement("p")
    date.textContent = document.querySelector("#date").value
    date.classList.add("bookInfo")

    const pages = document.createElement("p")
    pages.textContent = document.querySelector("#pages").value
    pages.classList.add("bookInfo")

    const book = document.createElement("div");
    book.appendChild(bookTitle)
    book.appendChild(bookAuthor)
    book.appendChild(date)
    book.appendChild(pages)
    return book
}

function renderBook(arr) {
    for (i in arr) {
        document.querySelector(".bookGrid").appendChild(arr[i]);
    }
}

const addBookButton = document.querySelector("#addBook");
const books = [];

addBookButton.addEventListener("click", () => {
    books.push(createBookElement());
    renderBook(books);
})