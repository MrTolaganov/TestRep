// // const button = document.querySelector('button');

// // button.addEventListener("mouseover", () => {
// //   console.log("You clicked me");
// // })

// // console.log(lists);

const ul = document.querySelector("ul");
const button = document.querySelector("button");

// console.log(ul);

// ul.remove();

button.addEventListener("click", () => {
  // ul.innerHTML += "<li>Something new text</li>"

  const li = document.createElement("li");
  li.textContent = "Someting new text";
  ul.append(li);
});

// const lists = document.querySelectorAll("li");

// lists.forEach((list) => {
//   list.addEventListener("click", (e) => {
//     // console.log(list);
//     // console.log(e);
//     // console.log(e.target);
//     // e.target.style.textDecoration = "line-through";
//     // e.target.remove();
//     console.log("clicked li");
//     e.stopPropagation();
//   });
// });

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIV") {
    e.target.remove();
  }
});
