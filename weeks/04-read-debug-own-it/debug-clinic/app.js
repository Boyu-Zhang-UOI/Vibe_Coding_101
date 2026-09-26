// Reading Log: keeps a list of books and how many pages you have read.
// Everything is saved in this browser with localStorage.

// ---------- 1. Find the parts of the page we need ----------
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title-input");
const pagesInput = document.getElementById("pages-input");
const formMessage = document.getElementById("form-message");
const stats = document.getElementById("stats");
const bookList = document.getElementById("books-list");
const filterButtons = document.querySelectorAll("[data-filter]");
const sampleButton = document.getElementById("sample-button");

// ---------- 2. State: the data the app keeps track of ----------
const STORAGE_KEY = "reading-log-books";
let books = loadBooks(); // an array of book objects
let currentFilter = "all"; // "all", "reading" or "finished"

// ---------- 3. Saving and loading ----------
function loadBooks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) {
    return []; // first visit: nothing saved yet
  }
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.warn("Could not read saved books, so starting with an empty list.", error);
    return [];
  }
}

function saveBooks() {
  localStorage.setItem(STORAGE_KEY, books);
}

// ---------- 4. Actions: things the user can do ----------
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function addBook(title, totalPages) {
  const book = {
    id: makeId(),
    title: title
    totalPages: totalPages,
    pagesRead: 0,
  };
  books.push(book);
  saveAndRender();
}

function logPages(id, pages) {
  const book = books.find((b) => b.id === id);
  if (!book) {
    return;
  }
  book.pagesRead = book.pagesRead + pages;
  saveAndRender();
}

function deleteBook(index) {
  books.splice(index, 1);
  saveAndRender();
}

function addSampleBooks() {
  books.push(
    { id: makeId(), title: "Pride and Prejudice", totalPages: 432, pagesRead: 0 },
    { id: makeId(), title: "Frankenstein", totalPages: 280, pagesRead: 280 },
    { id: makeId(), title: "The Time Machine", totalPages: 118, pagesRead: 40 },
  );
  saveAndRender();
}

// ---------- 5. Small helpers ----------
function isFinished(book) {
  return book.pagesRead >= book.totalPages;
}

function matchesFilter(book) {
  if (currentFilter === "reading") {
    return !isFinished(book);
  }
  if (currentFilter === "finished") {
    return isFinished(book);
  }
  return true; // "all"
}

function plural(count, word) {
  return count === 1 ? `${count} ${word}` : `${count} ${word}s`;
}

// ---------- 6. Drawing the page from the state ----------
function saveAndRender() {
  saveBooks();
  render();
}

function render() {
  // The summary line
  const finishedCount = books.filter(isFinished).length;
  const pagesTotal = books.reduce((sum, book) => sum + book.pagesRead, 0);
  stats.textContent = `${plural(books.length, "book")} · ${finishedCount} finished · ${pagesTotal} pages read`;

  // Highlight the filter button that is switched on
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === currentFilter);
  });

  // The list of books, newest first
  bookList.replaceChildren();
  const visibleBooks = books.filter(matchesFilter).reverse();

  if (visibleBooks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = books.length === 0 ? "No books yet. Add one above." : "No books match this filter.";
    bookList.append(empty);
    return;
  }

  visibleBooks.forEach((book, index) => {
    bookList.append(createBookItem(book, index));
  });
}

function createBookItem(book, index) {
  const item = document.createElement("li");
  item.className = isFinished(book) ? "book finished" : "book";

  const title = document.createElement("h3");
  title.textContent = book.title;

  const progress = document.createElement("progress");
  progress.max = book.totalPages;
  progress.value = book.pagesRead;

  const percent = Math.round((book.pagesRead / book.totalPages) * 100);
  const detail = document.createElement("p");
  detail.className = "detail";
  detail.textContent = `${book.pagesRead} / ${book.totalPages} pages (${percent}%)`;

  // A small box and button for logging a reading session
  const logInput = document.createElement("input");
  logInput.type = "number";
  logInput.min = "1";
  logInput.step = "1";
  logInput.placeholder = "pages";
  logInput.setAttribute("aria-label", `Pages read in ${book.title}`);

  const logButton = document.createElement("button");
  logButton.type = "button";
  logButton.textContent = "Log pages";
  logButton.addEventListener("click", () => {
    const pages = logInput.value;
    if (pages === "" || pages <= 0) {
      logInput.focus();
      return;
    }
    logPages(book.id, pages);
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${book.title}`);
  deleteButton.addEventListener("click", () => {
    if (confirm(`Delete "${book.title}"?`)) {
      deleteBook(index);
    }
  });

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(logInput, logButton, deleteButton);

  item.append(title, progress, detail, actions);
  return item;
}

// ---------- 7. Listen for what the user does ----------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the browser from reloading the page
  const title = titleInput.value.trim();
  const totalPages = Number(pagesInput.value);

  if (title === "") {
    formMessage.textContent = "Please type a title.";
    titleInput.focus();
    return;
  }
  if (!Number.isInteger(totalPages) || totalPages < 1) {
    formMessage.textContent = "Total pages must be a whole number above 0.";
    pagesInput.focus();
    return;
  }

  addBook(title, totalPages);
  formMessage.textContent = `Added "${title}".`;
  form.reset();
  titleInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    render();
  });
});

sampleButton.addEventListener("click", addSampleBooks);

// ---------- 8. Start ----------
render();
