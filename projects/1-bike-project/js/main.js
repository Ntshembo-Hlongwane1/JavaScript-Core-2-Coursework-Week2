//==================================================PART1================================================
const blueButton = document.getElementById("blueBtn");
const oranageButton = document.getElementById("orangeBtn");
const greenButton = document.getElementById("greenBtn");
const jumboTronContainer = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".buttons .btn-primary");
const volunteerBtn = document.querySelector(".buttons .btn-secondary");

blueButton.addEventListener("click", () => {
  jumboTronContainer.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "#000";
  volunteerBtn.style.color = "#fff";
});

oranageButton.addEventListener("click", () => {
  jumboTronContainer.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "#fff";
});
greenButton.addEventListener("click", () => {
  jumboTronContainer.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "#000";
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

//==================================================PART2================================================
const formButton = document.getElementById("btn-submit");
const emailField = document.getElementById("exampleInputEmail1");
const nameField = document.getElementById("example-text-input");
const textAreaField = document.getElementById("exampleTextarea");
const formFieldContainer = document.querySelectorAll(".form-group");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailField.value);
  if (!emailField.value || !nameField.value || !textAreaField.value) {
    return formFieldContainer.forEach((element, idx) => {
      let paragraph = document.createElement("p");
      paragraph.textContent = "* Field is required";
      paragraph.style.color = "red";
      paragraph.className = "error-message";
      if (idx === 0) {
        let isEmpty = emailField.value.length <= 0 ? true : false;
        if (isEmpty) {
          if (!element.lastElementChild.classList.contains("error-message")) {
            element.append(paragraph);
          }
        }
      } else if (idx === 1) {
        let isEmpty = nameField.value.length <= 0 ? true : false;
        if (isEmpty) {
          if (!element.lastElementChild.classList.contains("error-message")) {
            element.append(paragraph);
          }
        }
      } else {
        let isEmpty = textAreaField.value.length <= 0 ? true : false;
        if (isEmpty) {
          if (!element.lastElementChild.classList.contains("error-message")) {
            element.append(paragraph);
          }
        }
      }
    });
  }

  if (!emailField.value) {
    return formFieldContainer.forEach((element, idx) => {
      if (idx === 0) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "* Field is required";
        paragraph.style.color = "red";
        element.append(paragraph);
      }
    });
  }

  if (!nameField.value) {
    return formFieldContainer.forEach((element, idx) => {
      if (idx === 1) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "* Field is required";
        paragraph.style.color = "red";
        element.append(paragraph);
      }
    });
  }

  if (!textAreaField.value) {
    return formFieldContainer.forEach((element, idx) => {
      if (idx === 2) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "* Field is required";
        paragraph.style.color = "red";
        element.append(paragraph);
      }
    });
  }

  alert("Thank for filling in the form");
  emailField.value = " ";
  textAreaField.value = " ";
  nameField.value = " ";
});
