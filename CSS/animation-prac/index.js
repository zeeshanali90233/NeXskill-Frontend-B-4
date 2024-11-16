document.querySelector(".parent").addEventListener("click", (event) => {
  console.log("Parent is Called");
});
document.querySelector(".child").addEventListener("click", (event) => {
  console.log("Child is Called");
});
document.querySelector(".nested").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Nested Child is Called");
});
