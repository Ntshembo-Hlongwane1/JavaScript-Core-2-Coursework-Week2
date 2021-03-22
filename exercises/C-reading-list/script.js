function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ulTag = document.createElement("ul");
  ulTag.style.cssText =
    "list-style-type: none; display: flex; justify-content: center; height: 60vh; margin-top: 20vh";
  for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead === true) {
      let liTag = document.createElement("li");
      let paragraph = document.createElement("p");
      let pContent = document.createTextNode(
        `${books[i].title} - ${books[i].author} `
      );
      paragraph.appendChild(pContent);
      liTag.appendChild(paragraph);
      let image = document.createElement("img");
      liTag.appendChild(image);
      if (books[i].title === "Think Like A Man") {
        image.src =
          "https://res.cloudinary.com/dhau62dxz/image/upload/v1616431979/220px-ThinkLikeAManPoster_glfu8r.jpg";
        image.style.cssText = " width: 190px;";
      } else if (books[i].title === "Clean Code") {
        image.src =
          "https://res.cloudinary.com/dhau62dxz/image/upload/v1616432042/41yafGMO_rL._SX376_BO1_204_203_200__c0nynq.jpg";
        image.style.cssText = " width: 190px;";
      }
      liTag.style.cssText =
        "background-color: green; padding: 1rem; flex-basis: 25%; margin-right:2rem";
      // liTag.style.cssText = 'background-color: green; width: 30%; height: 50vh; float: left; margin: 10rem 0.5rem 0rem 0.5rem; padding: 1rem';
      ulTag.appendChild(liTag);
    } else {
      let liTag = document.createElement("li");
      let paragraph = document.createElement("p");
      let pContent = document.createTextNode(
        `${books[i].title} - ${books[i].author} `
      );
      let image = document.createElement("img");
      paragraph.appendChild(pContent);
      liTag.appendChild(paragraph);
      if (books[i].title === "Crack the coding interview") {
        image.src =
          "https://res.cloudinary.com/dhau62dxz/image/upload/v1616432074/41oYsXjLvZL._SX348_BO1_204_203_200__jgqtez.jpg";
        image.style.cssText = " width: 200px;";
      }
      liTag.appendChild(image);
      liTag.style.cssText =
        "background-color: red; padding: 1rem; flex-basis: 25%; margin-right:2rem";
      // liTag.style.cssText = 'background-color: red; width: 30%; height: 50vh; float: left; margin: 10rem 0.5rem 0rem 0.5rem';
      ulTag.appendChild(liTag);
    }
  }
  content.appendChild(ulTag);
}

const books = [
  {
    title: "Think Like A Man",
    author: "Steve Harvey",
    alreadyRead: false,
  },
  {
    title: "Clean Code",
    author: "Robert Cecil Martin",
    alreadyRead: true,
  },
  {
    title: "Crack the coding interview",
    author: "Gayle Laakmann McDowell",
    alreadyRead: true,
  },
];

readingList(books);
