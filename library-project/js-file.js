const books = document.querySelector(`.books`);

let myLibrary = [];
let booksHTML = ``;
const yesReadSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,17C12.5,17 12.97,16.93 13.42,16.79C13.15,17.5 13,18.22 13,19V19.45L12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5C17,4.5 21.27,7.61 23,12C22.75,12.64 22.44,13.26 22.08,13.85C21.18,13.31 20.12,13 19,13C18.22,13 17.5,13.15 16.79,13.42C16.93,12.97 17,12.5 17,12A5,5 0 0,0 12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17Z" /></svg>`;
const noReadSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" /></svg>`;

function Book(form) {
  let titleValue = form.title.value;
  let authorValue = form.author.value;
  let pagesValue = form.pages.value;
  let readValue = form.read.value;

  if (
    titleValue.length > 1 &&
    authorValue.length > 1 &&
    pagesValue > 0 &&
    readValue.length > 1
  ) {
    return [titleValue, authorValue, pagesValue, readValue];
  }
}

function addBookToLibrary(form) {
  let newBook = new Book(form);

  readValue = form.read.value;

  if (newBook != undefined) {
    myLibrary.push(newBook);
    books.innerHTML = `${showBooks(myLibrary)}`;
  }
}

function showBooks(library) {
  booksHTML = ``;

  for (let i = 0; i < library.length; i++) {
    let titleValue = library[i][0];
    let authorValue = library[i][1];
    let pagesValue = library[i][2];
    let readValue = library[i][3];

    if (readValue == `No`) {
      booksHTML =
        booksHTML +
        `<div id="book${i}" class="book"><p><b>Title:</b> ${titleValue} <b>Author:</b> ${authorValue} <b>Pages:</b> ${pagesValue} <b>Read:</b> ${readValue}</p><div class="button-wrapper"><button id="${i}" class="eye" onClick="changeReadValue(this.id)">${noReadSvg}</button><button id="${i}" onClick="deleteBook(this.id)">x</button></div></div>`;
    } else {
      booksHTML =
        booksHTML +
        `<div id="book${i}" class="book"><p><b>Title:</b> ${titleValue} <b>Author:</b> ${authorValue} <b>Pages:</b> ${pagesValue} <b>Read:</b> ${readValue}</p><div class="button-wrapper"><button id="${i}" class="eye" onClick="changeReadValue(this.id)">${yesReadSvg}</button><button id="${i}" onClick="deleteBook(this.id)">x</button></div></div>`;
    }

    if (i != library.length - 1) {
      booksHTML = booksHTML + `<hr>`;
    }
  }

  return booksHTML;
}

function deleteBook(id) {
  let bookDiv = document.querySelector(`#book${id}`);

  bookDiv.remove();

  myLibrary.splice(id, 1);

  books.innerHTML = `${showBooks(myLibrary)}`;
}

function changeReadValue(id) {
  if (myLibrary[id][3] == "Yes") {
    myLibrary[id][3] = `No`;
  } else {
    myLibrary[id][3] = `Yes`;
  }

  books.innerHTML = `${showBooks(myLibrary)}`;
}