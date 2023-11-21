const first = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};

const second = () => {
  console.log(2);
};

first(second);