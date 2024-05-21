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
    const book = document.createElement("div");
    
}

function renderBook(arr) {
    for (i in arr) {
        document.querySelector(".bookGrid").appendChild(arr[i]);
    }
}

const addBookButton = document.querySelector("#addBook");
const books = [];

addBookButton.addEventListener("click", () => {
    const book = document.createElement("div");
    books.push(book);
    renderBook(books);
})