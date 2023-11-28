const btn = document.querySelector("#btn");

function myAnimation() {
  const car = document.querySelector(".car");
  let pos = 0;
  car.style.left = 0;

  const timerId = setInterval(frame, 10);
  btn.disabled = "fewf";
  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
      pos = 0;
      btn.disabled = "";
    } else {
      pos++;
      car.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);