let colorBackground = document.getElementById("main")[0];
function changeBackground1() {
  setTimeout(function () {
    main.style.backgroundColor = "red";
  }, 5001);
}
changeBackground1();
let colorArray = ["gold", "crimson", "turquoise", "magenta"];
function changeBackground2() {
  let x = 0;
  setInterval(() => {
    if (x == colorArray.length) x = 0;
    main.style.backgroundColor = colorArray[x];
    x++;
  }, 5000);
}
changeBackground2();
