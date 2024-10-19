// const bodyReference = document.getElementsByTagName("body");

// console.log(bodyReference.item(0));

// Reference
// const elementRef = document.querySelector(".dark");

// elementRef.style.backgroundColor = "black";
// // Text Color
// elementRef.style.color = "white";

// const btnReference = document.querySelector(".btn_theme");

console.log(myName);
let myName;

function toggleTheme() {
  const elementRef = document.querySelector(".dark");
  const currentTheme = elementRef.style.backgroundColor;
  if (currentTheme === "black") {
    // White
    elementRef.style.backgroundColor = "white";
    elementRef.style.color = "black";
  } else if (currentTheme === "white") {
    // Black
    elementRef.style.backgroundColor = "black";
    elementRef.style.color = "white";
  } else {
    // Black
    elementRef.style.backgroundColor = "black";
    elementRef.style.color = "white";
  }
}

