function saveForm() {
  const formRef = document.querySelector("form.userForm");
  const nameInputRef = document.querySelector("input.userNameInput");
  const emailInputRef = document.querySelector("input.emailInput");

  console.log(nameInputRef.value);
  console.log(emailInputRef.value);

  //   Supposing , We have sent this data to server and it saved

  alert("User Data Saved");

  nameInputRef.value = "";
  emailInputRef.value = "";
}

const userDetails = {
  name: "Ali",
  age: 25,
  grade: 80,
};

const usersDetail = [
  {
    name: "Ali",
    age: 25,
    grade: 85,
  },
  {
    name: "Ali",
    age: 25,
    grade: 75,
  },
  {
    name: "Ali",
    age: 25,
    grade: 70,
  },
];

const filtered = usersDetail.filter((userValue) => {
  if (userValue.grade >= 80) {
    return userValue;
  }
});

console.log(filtered);

const restrictedBox = document.querySelector("div.restrictedBox");

restrictedBox.addEventListener("mouseover", (mouse) => {
  console.log(mouse);
  alert("Yes, Why you hovered it!");
});

function initTheme() {
  const elementRef = document.querySelector(".main_container");

  // Date Object
  const currentTime = new Date();
  const hours = currentTime.getHours();
  console.log(hours);
  let currentTheme;
  if (hours >= 18) {
    currentTheme = "black";
  } else {
    currentTheme = localStorage.getItem("theme");
  }

  if (currentTheme === "black") {
    // Black
    elementRef.classList.add("dark");
  } else {
    // White
    elementRef.classList.remove("dark");
    // If have, remove it, otherwise add it
    // elementRef.classList.toggle("dark");
  }
}

function toggleTheme() {
  const elementRef = document.querySelector(".main_container");
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "black") {
    // White
    elementRef.classList.remove("dark");
    localStorage.setItem("theme", "white");
  } else if (currentTheme === "white") {
    // Black
    elementRef.classList.add("dark");
    localStorage.setItem("theme", "black");
  } else {
    // Black
    elementRef.classList.add("dark");
    localStorage.setItem("theme", "black");
  }
}

const themeBtn = document.querySelector("button.themeBtn");

themeBtn.addEventListener("click", () => {
  toggleTheme();
});

// themeBtn.removeEventListener("mouseout", () => {});

console.log(window.innerHeight);
console.log(window.innerWidth);
window.onbeforeunload = initTheme();
// console.log((window.onbeforeunload = toggleTheme()));

const agePromise = new Promise((resolve, reject) => {
  const age = 5;
  if (age >= 18) {
    resolve({
      ok: true,
      message: "Data Sent",
      records: [],
    });
  } else {
    reject({
      ok: false,
      message: "Something went wrong!",
    });
  }
});

agePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    alert("Promise Fulfilled");
  });

const name1 = "Ali";
const message = `My Name is ${name1} ${"safdd"}`;
