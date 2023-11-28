const U = [
  0, 0.05, 0.1, 0.197, 0.347, 0.413, 0.446, 0.467, 0.52, 0.564, 0.587, 0.603,
  0.616, 0.626, 0.634, 0.641, 0.648, 0.653,
];
const I = [
  0, 0.000104, 0.000375, 0.0002659, 0.053, 0.187, 0.354, 0.553, 1.48, 3.437,
  5.413, 7.396, 9.386, 11, 13, 15, 17, 19,
];

// for (let i = 0; i < U.length; i++) {
//   console.log(U[i] / I[i]);
//   console.log("\n");
//   console.log((U[i + 1] - U[i]) / (I[i + 1] - I[i]));
// }

for (let number of U) {
  console.log(number);
}

console.log();

for (let number of I) {
  console.log(number);
}
